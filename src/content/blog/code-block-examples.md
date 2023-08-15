---
title: Code block example
description: This contains example code blocks
pubDate: 'Jul 08 2022'
heroImage: '/placeholder-hero.jpg'
draft: true
---

## Title example

```ts title="📄 calcs/add.ts" showLineNumbers
function sum(a: number, b: number) {
  console.log(a + b);
  return a + b;
}
```

## Line highlight example

```ts {1-2,4} showLineNumbers
const a = 1;
const b = 2;
// Sum of a and b
const c = a + b;
console.log('🚀 c:', c);
```

## Word highlight example

```ts showLineNumbers /a + b/ /a = 1/ /b = 2/
const a = 1;
const b = 2;
// Sum of a and b
const c = a + b;
console.log('🚀 c:', c);
```

## Caption example

```ts caption="💡 The above code is a simple example of a sum" showLineNumbers
const a = 1;
const b = 2;
// Sum of a and b
const c = a + b;
console.log('🚀 c:', c);
```

## Line add, remove example

`Note to self`: I've encountered a strange instance where the whole app is not working when I was using the line add, remove feature. I'm not sure if it's because of the line add, remove feature or the code block itself. I'll have to investigate this further.

To use this feature, you need to add `/+ /#add{:js}` or `/- /#del{:js}` at the end of the code block language and then prepend `+ ` or `- ` to the line you want to add or remove.

```ts showLineNumbers /+ /#add /- /#del
+ added line
- removed line
```

## Code diff example

```diff
const a = 1;
const b = 2;
# Delete this line and replace it with the following line
- const c = a + b;
+ const c = a - b;
console.log('🚀 c:', c);
```

## Bash example

```sh
npm init -y
```

## Inline code example

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

## Library I use

I'm using a library called `rehype-pretty-code` to add extra features to code blocks. You can find the library <a href="https://rehype-pretty-code.netlify.app/" target="_blank">here</a>
