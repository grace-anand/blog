---
title: 'Some tips on npm package installation'
description: 'In this blog post, I will explain some tips on npm usage. I will explain how to install a package globally, locally, how to install a specific version of a package, how to update a package, how to uninstall a package, etc.'
pubDate: 'Mar 09 2024'
heroImages: ['/blog/node/hero-image.png', '/blog/node/hero-image-dark.png']
tags: ['tips']
author: 'anand'
draft: true
---

## What is npm?

Npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command-line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the [npm website](https://www.npmjs.com/).

## Install a package globally

To install a package globally, you can use the `--global` flag or `-g` flag with the `npm install` command.

This will install the package in a directory that is in your system's PATH, so that it can be used from any directory. It will be helpful when you want to use the package as a command-line tool.

```bash
npm install --global <package-name>
# or
npm install -g <package-name>
```

## Install a package locally

You can install a package locally in two ways. One is to use the `--save` flag or `-S` flag with the `npm install` command. The other is to use the `--save-dev` flag or `-D` flag with the `npm install` command.

### Difference between `--save` and `--save-dev`

The `--save` flag or `-S` flag is used to save the package in the `dependencies` section of the `package.json` file. The `--save-dev` flag or `-D` flag is used to save the package in the `devDependencies` section of the `package.json` file.
The main difference between `dependencies` and `devDependencies` is that `dependencies` are required to run the project, whereas `devDependencies` are only needed to develop the project or run tests.

```bash
npm install --save <package-name>
# or
npm install -S <package-name>
```

```bash
npm install --save-dev <package-name>
# or
npm install -D <package-name>
```

## Install a specific version of a package

To install a specific version of a package, you can use the `@` symbol with the package name and the version number.

```bash
npm install <package-name>@<version-number>
```

## Update a package

### Update to the latest major version

To update a package to the latest major version, you can use the `npm update` command.

```bash
npm update <package-name>
```

### Update to the latest version

To update a package to the latest version, you can use the `npm install <package-name>@latest` command.

```bash
npm install <package-name>@latest
```

### Update to a specific major version

To update a package to a specific major version, you can use the `npm install <package-name>@v<major-version>` command.

```bash
npm install <package-name>@v<major-version>
```

### Update to a specific minor version

To update a package to a specific minor version, you can use the `npm install <package-name>@<major-version>.<minor-version>` command.

```bash
npm install <package-name>@<major-version>.<minor-version>
```

## Uninstall a package

In order to uninstall a package, you can use the `uninstall` command with the `--global` flag or `-g` flag to uninstall a package globally.

You can use the `uninstall` command without the `--global` flag or `-g` flag to uninstall a package locally. This would remove the package from the `node_modules` directory and also remove the package from the `dependencies` or `devDependencies` section of the `package.json` file.

```bash
npm uninstall --global <package-name> # to uninstall globally
# or
npm uninstall <package-name> # to uninstall locally
```
