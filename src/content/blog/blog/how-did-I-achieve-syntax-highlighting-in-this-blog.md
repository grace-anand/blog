---
title: 'How did I achieve syntax highlighting in this blog'
description: 'In this blog post, I will explain how I achieved syntax highlighting in this blog. I will also explain how I achieved line highlighting, word highlighting, captioning, line add, remove, code diff, etc.'
pubDate: 'Mar 03 2024'
author: 'anand'
tags: ['blog', 'markdown', 'tips']
heroImages:
  ['/blog/blog/syntax-highlighting-from-to.png', '/blog/blog/syntax-highlighting-from-to.png']
---

I've always wondered how github and other platforms achieve syntax highlighting. I've wanted to achieve the same in my blog. I've finally achieved it and I'm going to explain how I did it in this blog post. Strap in, it's going to be a long one.

## Syntax highlighting

Syntax highlighting is a feature of text editors that are used for programming, scripting, or markup languages, such as HTML. The feature displays text, especially source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect the meaning of the text itself, it is intended only for human readers.

```diff title="Before syntax highlighting" caption="The code block will render plain with any syntax highlighting applied which makes it hard to read and understand. As it's all in the same color with no distinction between keywords, strings, comments, etc."
const a = 1;
const b = 2;
const c = a + b;
console.log('🚀 c:', c);
```

```js title="After syntax highlighting" caption="The code block will render with syntax highlighting😍 applied which makes it easy to read!"
const a = 1;
const b = 2;
const c = a + b;
console.log('🚀 c:', c);
```

## Library I use

I'm using a library called `rehype-pretty-code` to add syntax highlighting. I'm using `rehype-pretty-code` because it's a rehype plugin that adds syntax highlighting to code blocks in markdown files. Essentially we'll get a few extra features like line highlighting, word highlighting, captioning, etc on top of syntax highlighting.

## Title

The title feature is used to add title/file name to a code block.

```ts title="📄 calcs/add.ts" showLineNumbers
function sum(a: number, b: number) {
  console.log(a + b);
  return a + b;
}
```

## Line highlight

The line highlight feature is used to highlight specific lines in a code block.

```ts {1-2,4} showLineNumbers
const a = 1;
const b = 2;
// Sum of a and b
const c = a + b;
console.log('🚀 c:', c);
```

## Word highlight

The word highlight feature is used to highlight specific words in a code block.

```ts showLineNumbers /a + b/ /a = 1/ /b = 2/
const a = 1;
const b = 2;
// Sum of a and b
const c = a + b;
console.log('🚀 c:', c);
```

## Caption

The caption feature is used to add a caption to a code block. The caption is a line below the code block that describes the code block.

```ts caption="💡 The above code is a simple example of a sum" showLineNumbers
const a = 1;
const b = 2;
// Sum of a and b
const c = a + b;
console.log('🚀 c:', c);
```

## Code diff

The code diff feature is used to highlight the lines that are added or removed in a code block without syntax highlighting.

```diff
const a = 1;
const b = 2;
# Delete this line and replace it with the following line
- const c = a + b;
+ const c = a - b;
console.log('🚀 c:', c);
```

## Line add, remove

The line add, remove feature is used to highlight the lines that are added or removed in a code block with syntax highlighting.This is visually more appealing than the code diff feature.

To use this feature, you need to add `/+ /#add{:js}` or `/- /#del{:js}` at the end of the code block language and then prepend `+ ` or `- ` to the line you want to add or remove.

I've had to do a workaround to make this feature to work. As explained in the above paragraph, I've had to add `/+ /#add{:js}` or `/- /#del{:js}` which will add a `data-chars-id` attribute to the code block. I've then used this attribute and added css as below to the code block to add or remove lines.

```css
[data-line]:has([data-chars-id='add']) {
  background-color: green;
}

[data-line]:has([data-chars-id='del']) {
  background-color: red;
}
```

<!-- `Note to self`: I've encountered a strange instance where the whole app is not working when I was using the line add, remove feature. I'm not sure if it's because of the line add, remove feature or the code block itself. I'll have to investigate this further. -->

Example:

```ts showLineNumbers /+ /#add /- /#del
+ added line
- removed line
```

## Bash

To highlight terminal commands, you can use the `bash` language. This will add a `$` sign before each line which makes it look like a terminal. To achieve this, you need to add the below css to your code block as it not supported by `rehype-pretty-code` by default.

```css
.markdown pre > code[data-language='bash'] > [data-line]::before,
.markdown pre > code[data-language='sh'] > [data-line]::before {
  @apply inline-block w-4 mr-4 text-right text-gray-400;
  content: '$';
}
```

Example:

```sh
npm init -y
```

## Inline code

To add syntax highlighting to inline code, you can use the below syntax.

```md caption="The above code will be rendered as the following" showLineNumbers
This is a regular inline code example: `const a = 1;`
This is a ts inline code example: `const a = 1;{:ts}`
This is a function code example: `getSomething{:.fn}`
This is a keyword code example: `someVarValue{:.var}`
This is a string code example: `'some string'{:.str}`
This is a number code example: `123{:.num}`
This is a comment code example: `// some comment{:.cmt}`
This is a punctuation code example: `;{:js}`
This is a const code example: `const{:js}`
This is a default code example: `something{:js}`
```

This is a regular inline code example: `const a = 1;` <br />
This is a ts inline code example: `const a = 1;{:ts}` <br />
This is a function code example: `getSomething{:.fn}` // blue <br />
This is a keyword code example: `someVarValue{:.var}` // dark yellow <br />
This is a string code example: `'some string'{:.str}` // green <br />
This is a number code example: `123{:.num}` // purple <br />
This is a comment code example: `// some comment{:.cmt}` // grey <br />
This is a punctuation code example: `;{:js}` // grey <br />
This is a const code example: `const{:js}` // purple <br />
This is a default code example: `something{:js}` // red <br />
