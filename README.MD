# App Boilerplate

A boilerplate for building a static app/website with ES6 and SASS.

This project was created because most templates I found myself were still using Webpack < 4 so I decided to create an updated boilerplate.

## Features

- Dev-server hot reloads browser whenever an edit is made to any of the source files.
- Build script that:
  - Converts all ES6 to browser friendly ES5.

# Installation

```
git clone https://github.com/milesaylward/html-sass-es6-boilerplate
cd html-sass-es6-boilerplate
npm install | yarn install
```

# Usage

## Development

Sample files are included in `src`. As well as one es6 import module. These files are meant to be replaced. The only constraint is that there must be a `src/js/index.js` file. Place all other files  inside `src`.

`npm start | yarn start` to start the dev-server and view site at: `http://localhost:8080`. As files are edited in `src` the browser will update.

## Build

`npm run build` to create a production build of the site in `dist` directory at project root.

## Deployment
For easy deployment of static sites I like to use [Surge](https://surge.sh/). After building run ` npm install --global surge` then `cd dist` and run the command `surge`. They will generate a link for you and upload all your files. Learn more in their [help docs](https://surge.sh/help/).

# Notes

## JavaScript, SASS, CSS files

This project uses Webpack. What this means as far as this project is concerned is that all JavaScript, SASS, and CSS files must be imported in `index.js`. Or you may import other SASS or CSS files into main.scss.



## Bug Reports & Feature Requests

Drop a line in the [issue tracker](https://github.com/milesaylward/html-sass-es6-boilerplate/issues) to report any bugs or request features.

# Author

Miles Aylward

# License

The code is available under the [MIT license](LICENSE.txt).
