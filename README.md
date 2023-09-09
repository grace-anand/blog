# Blog

### Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Categories

To create a category, create a folder in `content` with the slug of the category. Then, create a `{category-name}.json` file in `content/category` folder. The file should have the following structure:

```json
{
  "name": "Category Name",
  "imageUrl": "https://example.com/image.png"
}
```

### Tags

To create a tag, create a file in `content/tags` with the slug of the tag. The file should have the following structure:

```json
{
  "name": "Tag Name",
  "imageUrl": "https://example.com/image.png"
}
```

Then to add a tag to a post, add the tag slug to the `tags` array in the post's frontmatter.

```md
---
title: My Post
date: 2021-01-01
tags: ['tag-slug']
---
```
