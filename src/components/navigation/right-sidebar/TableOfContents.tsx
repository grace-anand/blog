import type { MarkdownHeading } from 'astro';
import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';

export interface TocItem extends MarkdownHeading {
	children: TocItem[];
}

interface Props {
	toc: TocItem[];
	labels: {
		onThisPage: string;
	};
	isMobile?: boolean;
}

const TableOfContents = ({ toc = [], labels, isMobile }: Props) => {
	const [currentHeading, setCurrentHeading] = useState({
		slug: toc[0]?.slug,
		text: toc[0]?.text,
	});
	const [open, setOpen] = useState(!isMobile);
	const onThisPageID = 'toc-heading';

	const Container = ({ children }: { children: ReactNode }) => {
		return isMobile ? (
			<details
				{...{ open }}
				onToggle={(e: React.MouseEvent<HTMLDetailsElement>) => setOpen(e.currentTarget.open)}
				className="lg:hidden sticky top-2 z-10"
			>
				{children}
			</details>
		) : (
			children
		);
	};

	const HeadingContainer = ({ children }: { children: ReactNode }) => {
		return isMobile ? (
			<summary>
				<div className="inline-block">{children}</div>
				{!open && currentHeading?.slug !== 'overview' && (
					<span className="text-foreground pb-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 1 16 16"
							aria-hidden="true"
							className="fill-foreground w-4 h-4 inline-block"
						>
							<path
								fillRule="evenodd"
								d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
							></path>
						</svg>
						{unescape(currentHeading?.text || '')}
					</span>
				)}
			</summary>
		) : (
			children
		);
	};

	useEffect(() => {
		const setCurrent: IntersectionObserverCallback = (entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const { id } = entry.target;
					if (id === onThisPageID) continue;
					setCurrentHeading({
						slug: entry.target.id,
						text: entry.target.textContent || '',
					});
					break;
				}
			}
		};

		const observerOptions: IntersectionObserverInit = {
			// Negative top margin accounts for `scroll-margin`.
			// Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
			rootMargin: '-100px 0% -66%',
			threshold: 1,
		};

		const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

		// Observe all the headings in the main page content.
		document.querySelectorAll('article :is(h1,h2,h3)').forEach((h) => headingsObserver.observe(h));

		// Stop observing when the component is unmounted.
		return () => headingsObserver.disconnect();
	}, []);

	const onLinkClick = (e: React.MouseEvent) => {
		if (!isMobile) return;
		setOpen(false);
		setCurrentHeading({
			slug: e.currentTarget.getAttribute('href')!.replace('#', ''),
			text: e.currentTarget.textContent || '',
		});
	};

	const TableOfContentsItem = ({ heading }: { heading: TocItem }) => {
		const { slug, text, children } = heading;
		return (
			<li
				style={{ listStyle: 'none' }}
				className={`w-full border-bk-purple-300/20 p-1 text-sm transition-colors duration-300 hover:border-bk-purple-300/50 ${
					currentHeading.slug === slug
						? 'border-l-4 border-bk-purple-300/100 dark:bg-bk-purple-300/20 bg-bk-purple-300/30'
						: ''
				}`.trim()}
			>
				<a
					className={`text-bk-purple-800 hover:text-bk-purple-400 dark:text-bk-purple-200 dark:hover:text-bk-purple-100 ${
						currentHeading.slug === slug
							? 'font-medium text-bk-purple-700 dark:text-bk-purple-100'
							: ''
					}`.trim()}
					href={`#${slug}`}
					onClick={onLinkClick}
				>
					{unescape(text)}
				</a>
				{children.length > 0 ? (
					<ul>
						{children.map((heading) => (
							<TableOfContentsItem key={heading.slug} heading={heading} />
						))}
					</ul>
				) : null}
			</li>
		);
	};

	return (
		<Container>
			<HeadingContainer>
				<h4 style={{ padding: 0 }} id={onThisPageID} className="flex items-center text-xl mb-2">
					{labels.onThisPage}
					<span className="sr-only">:</span>
				</h4>
			</HeadingContainer>
			<ul>
				{toc.map((heading2) => (
					<TableOfContentsItem key={heading2.slug} heading={heading2} />
				))}
			</ul>
		</Container>
	);
};

export default TableOfContents;
