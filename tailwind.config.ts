import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				'bk-purple-50': '#f5eafb',
				'bk-purple-100': '#e0c0f2',
				'bk-purple-200': '#d6aaee',
				'bk-purple-300': '#c280e5',
				'bk-purple-400': '#a341d8',
				'bk-purple-500': '#992bd4',
				'bk-purple-600': '#8927be',
				'bk-purple-700': '#7a23a9',
				'bk-purple-800': '#6b1e94',
				'bk-purple-900': '#5c1a7f',
				'bk-purple-1000': '#4c166a',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				circular: {
					'0%': {
						transform: 'rotate(0deg) translate(190px) rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg) translate(190px) rotate(-360deg)',
					},
				},
				'circular-mid': {
					'0%': {
						transform: 'rotate(0deg) translate(190px) rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg) translate(190px) rotate(-360deg)',
					},
				},
				'circular-reverse': {
					'0%': {
						transform: 'translate(0) scale(1)',
					},
					'33%': {
						transform: 'translate(10%,-10%) scale(1.5)',
					},
					'66%': {
						transform: 'translate(-20%,40%) scale(1.2)',
					},
					'100%': {
						transform: 'tranlate(0,0) scale(1)',
					},
				},
			},
			animation: {
				circular: 'circular 10s infinite linear',
				'circular-mid': 'circular-mid 10s infinite linear',
				'circular-reverse': 'circular-reverse 10s infinite linear',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;
