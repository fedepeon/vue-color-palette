# vue-color-palette

> Create a color palette using Vue & Nuxt

## Color model

```javascript
{
  name: 'Ultramarine blue',
  hex: '#3780ff',
  rgb: 'rgb(55, 128, 255)',
  dominant: 'blue'
}
```

## User stories:

**As a user, I want to**:
- [ ] ... always have a look at my current color palette.
- [ ] ... add new colors to the colors list.
- [ ] ... create a color palette with existing colors.
- [x] ... switch color code display between `hex` and `rgb`.
- [ ] ... filter colors by `dominant`.
- [x] ... search a color by its `name`.
- [x] ... reset filters.

## Site structure

**Layout**:
- `<header>`: navigation (home, palette, about)
- `<aside>`: filters by dominant, search by name, switch color code display (only visible on `/`).
- `<main>`: colors list, palette.

**Pages**:
- `/`: see the list of all colors.
- `/palette`: see my color palette.
- `/about`: about author, contact...

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
