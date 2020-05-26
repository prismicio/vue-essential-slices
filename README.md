# Vue Essential Slices

A set of responsive, accessible, and customizable website sections (think Hero, Faq...),
connected to a ([Prismic.io](https://prismic.io)) backend. You most probably want to use this with [SliceMachine](https://slicemachine.dev)!

Components can be viewed on our Storybook: https://vue-essential-slices.netlify.com.
Note that it's pretty much a WIP as we need to add docs for each component there.



## Getting started (WIP)

The easiest way to get started with vue-essential-slices is to follow the [Getting started](https://www.slicemachine.dev/documentation/getting-started) of SliceMachine:

```bash
npx create-nuxt-app my-app && cd my-app;
npx prismic-cli sm --setup;
````
👆 Because vue-essential-slices is the default library of SliceMachine, Your project should now be configured to use it. Your next step would be to declare a `slice-zone` in one of your pages:

```javascript
<template>
  <slice-zone
    type="page"
    uid="homepage"
  />
</template>
<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },
}
</script>
````
If you've correctly setup a SliceMachine project and created a page of uid "homepage" on your Prismic writing room, your page should now render a full landing page. If you're unsure why or how this works, please refer to SliceMachien documentation or refer to the [sliceZone README](https://github.com/prismicio/sm-commons/tree/master/packages/vue-slicezone) ✌️




## Project structure
In order for a folder to become an actual SliceMachine library, it needs to follow a certain sctructure, that may be accomodated to your requirements but still follows some conditions:

```bash
Starter structure:
├── .storybook # Design guide config
├── slices # actual components
│   ├── ComponentName # see "slices" section
│   ├──  ...
├── index.js # exports * from './slices'
├── sm.json # auto-generated, see "bundling" section
├── sm.config.json # SliceMachine config

```
#### 1 - slices
What we call slices are **website sections linked to a Prismic backend**. Basically, you can see them as front-end components that contain a schema (or database definition) to tell Prismic how to create an editor that matches their own state.

Each SM project should contain a non-empty `slices` folder. Each of its subfolder being treated as Slice components by SliceMachine. For this reason they need to be:
- PascalCased (minimum 2 words starting with capital letters)
- an `index.[js|ts|vue]` file (the actual component)
- a `model.json` file, that contains the **slice definition**
- a `mock.json` file, that contains a valid API response
- a `preview.png` file, that displays the preview of the component

⚠️ Because this can become overwhelming for library creators, we are thinking about solutions to help you in the process. Fell free to raise an issue if something comes to your mind to solve this with us!

#### 2 - sm.config.json
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
`libraryName`, `framework`and `gitUrl` are mandatory. Other info (like `pathToLibrary`) helps SliceMachine bundler to find your slice definitions. `dependencies`, `css`, `script` and `devDependencies` being information picked up by SliceMachine CLI to kickstart a project.

Most of the time, you would be fine with this:

```json
{
  "libraryName": "Name of your Lib",
  "framework": "nuxt|next",
  "gitUrl": "...",
  "pathToLibrary": "src"
 }
````

## Bundling

Everytime you publish your library on NPM, Prismic servers download your library definition file. This definition file is what the writing room uses to select/preview your slices. In order to generate a valid JSON definition for your library, add our `sm-commons` development package and run its bundle script everytime you want to publish a new version of your library:

```bash
npm i --save-dev sm-commons
````

Then, add this script line to your package.json file (subject to change) :

```json
"scripts": {
    "bundle": "node ./node_modules/sm-commons/scripts/bundle"
}
````
👆 This script is in active development and subject to lots of change. Make sure you update it as often as possible. A lot of effort will be made to help you understand if and why a folder structure is considered invalid. Feel free [to read the script](https://github.com/prismicio/sm-commons/blob/master/packages/sm-commons/scripts/bundle.js) of course, it's really simple atm.

Here is the structure of our actual SM definition file:

```json
{
   "libraryName":"Vue essentials",
   "framework":"nuxt",
   "packageName":"vue-essential-slices",
   "gitUrl":"//github.com/prismicio/vue-essential-slices",
   "pathToLibrary":"src",
   "dependencies":[],
   "css":["vue-essential-slices/src/styles/styles.scss"],
   "package": {},
   "slices": { "call_to_action": {} }

````

### Styling your components

To be discussed.

### Resources

- [StoryBook](https://storybook.js.org/)
- [SliceMachine packages](https://github.com/prismicio/sm-commons) (including sm-commons and sm-api)
- [components](https://front-end--prismic-sm.netlify.com/components/detail/call-to-action.html)

