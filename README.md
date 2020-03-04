# study-tailwindcss

Based on tailwindcss course

## Table of Contents

## Setup PostCSS and Tailwind

### Commands

#### Tailwind init

`npx tailwind init` - Create tailwind.config.js file.

### PostCSS Config

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")]
};
```

### Scripts

```json
"scripts": {
    "build": "postcss css/tailwind.css -o public/build/tailwind.css"
}
```
