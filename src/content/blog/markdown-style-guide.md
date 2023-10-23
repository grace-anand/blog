---
title: 'Markdown Style Guide'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing blog posts.'
pubDate: '2023-10-23T16:00:00Z'
author: 'anand'
heroImages: ['/blog/markdown/from-to.png', '/blog/markdown/from-to-dark.png']
---

Here you will find a sample of some basic Markdown syntax that can be used when writing blog posts. You can also use HTML tags in Markdown.
Once you are familiar with Markdown, you can use the [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/) as a quick reference guide
Or even this article itself as a reference guide.

You can find how the Markdown syntax is rendered by looking at source under each section.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

```md
# H1
```

## H2

```md
## H2
```

### H3

```md
### H3
```

#### H4

```md
#### H4
```

##### H5

```md
##### H5
```

###### H6

```md
###### H6
```

## Paragraph

Any sequence of lines separated by one or more blank lines is a paragraph. A blank line is any line that looks like a blank line — a line containing nothing but spaces or tabs is considered blank. Normal paragraphs should not be indented with spaces or tabs.

```md
This is a paragraph.
```

## Images

![This is a placeholder image description](/placeholder-hero-dark.jpg)

```md
![alt text](/img-src.jpg)
```

## Details

<details className="mb-3">
  <summary>Click to expand!</summary>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
  </p>
</details>

```html
<details>
  <summary>Click to expand!</summary>
  <p>Text content that will be shown/hidden.</p>
</details>
```

## Attribution

For attribution, you can dynamically generate a list of links to the original source material and/or authors using the `<cite>` element.

_"This is a quote from somewhere"_
The source of the quote can be added as a footnote.[^1] <cite>Anand</cite>

[^1]: This is the footnote.

```md
_"This is a quote from somewhere"_
The source of the quote can be added as a footnote.[^1] <cite>Anand</cite>

[^1]: This is the footnote.
```

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use Markdown syntax within a blockquote.

<br>

```md
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use Markdown syntax within a blockquote.
```

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^2]</cite>

[^2]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

<br>

```md
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

## Code Blocks

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test Multiple lines of code</p>
    <p>
      Test One line expanding through a long line of code Test One line expanding through a long
      line of codeTest One line expanding through a long line of codeTest One line expanding through
      a long line of codeTest One line expanding through a long line of codeTest One line expanding
      through a long line of code
    </p>
  </body>
</html>
```

````md
```html
<!DOCTYPE html>
<html lang="en">
  ....
</html>
```
````

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

```md
1. First item
2. Second item
3. Third item
```

#### Unordered List

- List item
- Another item
- And another item

```md
- List item
- Another item
- And another item
```

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

```md
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

## Inline style

`test-inline`

```md
`test-inline`
```

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

Test <mark>mark tag</mark>

```html
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format. H<sub>2</sub>O X<sup
  >n</sup
>
+ Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session. Most
<mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures. Test
<mark>mark tag</mark>
```

## External Links

This is an external link: [Google](https://google.com)

```md
This is an external link: [Google](https://google.com)
```
