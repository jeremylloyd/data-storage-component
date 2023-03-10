# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n).

## Overview

### The challenge

Users should be able to view the optimal layout for the site depending on their device's screen size.

### Screenshot

![](./design/desktop-design.jpg)
![](./design/mobile-design.jpg)

### Links

- Solution URL: [Github](https://github.com/jeremylloyd/data-storage-component)
- Live Site URL: [Vercel](https://data-storage-component-bhsl-m72lfywos-jeremylloyd.vercel.app/)

## My process

### Built with

- HTML
- CSS
- JS (Svelte)

### What I learned

- CSS Container queries
  - Don't yet work in Svelte. It's waiting on some open-source maintainers to finish their work updating
- Svelte Components
  - It's hard to reuse Components if you need to apply a lot of different styles to each instance. If it gets too hard and you find yourself passing too many styling arguments to each component, just make a new component for your use case
  - Reference static files with `/[path]`
- Svelte Stores
