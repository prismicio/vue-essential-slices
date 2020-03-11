# Getting started

Running Storybook is probably the best way to get started with the components.
After cloning this repository, run:

```bash
npm install && npm run dev
````
👇 if you get an error that states that `vue-loader/lib/plugin` does not exist, you'll need an extra-step:
```bash
npm run prepare
````
Fortunately, this is a temporary ssolition to a temporary bug.

## Project structure
In order for this library to become a SliceMachine library, it needs to follow a certain sctructure, that may be accomodated to your requirements but still follows some conditions:

#### 1/ sm.config.json
A configuration file that helps SliceMachine bundle script understand how it should build the library.

```json
{
  "libraryName": "Vue essentials",
  "framework": "nuxt",
  "gitUrl": "//github.com/prismicio/vue-essential-slices",
  "pathToLibrary": "src",
  "dependencies": [],
  "css": ["vue-essential-slices/src/styles/styles.scss"],
  "script": [{
    "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
  }, {
    "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
  }],
  "devDependencies": ["node-sass", "sass-loader"]
}
````
`libraryName`, `framework`and `libraryName`are mandatory. Other info (like `pathToLibrary`) help you define where your library actually is. `dependencies`, `css`, `script` and `devDependencies` being information picked up by SliceMachine CLI to kickstart a project.

Most of the time, you would be fine with this:

```json
{
  "libraryName": "Name of your Lib",
  "framework": "nuxt|next",
  "gitUrl": "...",
  "pathToLibrary": "src" # if not process.cwd()
 }
````

#### 2/ Slices folder

What we call slices are **website sections linked to a Prismic backend**. Basically, you can see them as front-end components that contain a schema (or database definition) to tell Prismic how to create an editor that matches their own state.

Each SM project should contain a non-empty `slices` folder. Each of its subfolder being treated as Slice components by SliceMachine. For this reason they need to be:
- PascalCased (minimum 2 words starting by capital letters)
- an `index.[js|ts|vue]` file (the actual component)
- a `model.json` file, that contains the **slice definition**
- a `mock.json` file, that contains a valid API response
- a `preview.png` file, that displays the preview of the component

⚠️ Because this can become overwhelming for library creators, we are thinking about solutions to help you in the process. Fell free to raise an issue if something comes to your mind to solve this with us!

## Bundling

To be discussed. If working with frameworks like Nuxt, being able tp transpile a specific node module could make custom bundling, unnecessary. Today, my guess is: do things like you usually do them. Which means that you should bundle your library as you usually do.


## Styling your components

At the moment, we enforce the use of css and sass.


`SCSS` and `CSS` are supported out of the box just import your styles into your component like you normaly would do.
For the use of  `CSS Modules` refere to [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)

## Publishing your SM library
Everytime you publish your library over NPM, SliceMachine API fetches your 





## Styleguide

For custom layouts, styleing and more information about the Styleguide please refer to [React Styleguidist](https://react-styleguidist.js.org/) documentation.

#### Deploy the Styleguide to GitHub Pages
Make sure the repository url in `package.json` file is set to your repoitory url, then:

```
> yarn deploy
```

## Scripts

- `yarn dev` : Executes the develop mode, running watcher and the Stylguide, rebuilding your library on every change.
- `yarn start` : Only serves the Styleguide.
- `yarn build` : Builds your library  (build can be faound in `dist` folder).
- `yarn styleguide:build` : Builds the static Styleguide in case you want to deploy it.
- `yarn test` : Runs the tests.
- `yarn test:coverage`: Runs the test and shows the coverage.
- `yarn lint` : Runs the linter.
- `yarn lint:fix` : Runs the linter and fixes automatic fixable issues.
- `yarn release` : Publishes your Library on NPM or your private Registry (depending on your config in your `.npmrc` file).
- `yarn deploy`: Deploys the Styleguide to GitHub Pages.


## Resources

### Bundler
- [Rollup.js](https://rollupjs.org/guide/en)

### Styleguide
- [React Styleguidist](https://react-styleguidist.js.org/)

### Testing
- [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
- [Enzyme](http://airbnb.io/enzyme/)
- [Jest](https://facebook.github.io/jest/)

### Linting
- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

### Compiler
- [Babel 7](https://babeljs.io/)