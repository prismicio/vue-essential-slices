# Vue Essential Slices

A set of responsive, accessible, and customizable website sections (think Hero, Faq...),
connected to a ([Prismic.io](https://prismic.io)) backend. You most probably want to use this with [SliceMachine](https://slicemachine.dev)!

Components can be viewed on our Storybook: https://vue-essential-slices.netlify.com.

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

## Manual use

At the moment of writing, manual installation is not advised, as Prismic does not offer a simple way to update Slice models to your own Prismic writing room. But if you want to get a better understanding of what the Prismic CLI does for you, this is how you could manually install these slices:

#### 1/ Create a custom type on Prismic
1/ Create a repeatable Custom Type of type "Page" in your Prismic writing room. Then click on "Add a SliceZone". The JSON viewer should show you an empty "choices" object there.

#### 2/ Copy-paste the slices models
 Open our `sm.json` file and find the "slices" key. Copy-paste this part of the file (the object inside the "slice" key, without the key itself) and copy-paste it inside the "choices" object of the JSON viewer.

#### 3/ Create a first page on Prismic
The UI should now display all the slices forms. Now, go to your Prismic documents, create a first page, and give it a uid "homepage".

#### 4/ Create a first page in Nuxt
 Now, run `yarn add vue-slicezone vue-essential-slices`, create a first page in Nuxt and query your Prismic API:

```javascript
<template>
  <slice-zone :slices="slices" :resolver="resolver" />
</template>

<script>
import SliceZone from 'vue-slicezone'
import * as Slices from 'vue-essential-slices'

export default {
  components: {
    SliceZone
  },
  async asyncData({ $prismic }) {
    // $prismic is injected here by '@nuxtjs/prismic'
    const res = await $prismic.api.getByUID('page', 'homepage')
  },
  methods: {
    resolver({ sliceName, slice, i }) {
      return Slices[sliceName]
    }
  }
}
</script>
````

👆 If you've configured everything correctly, congrats!
Otherwise, hit the forum: https://community.prismic.io

### CSS variables

The library comes with some stylesheets that are automatically added to your Nuxt config file, when bootstrapping a project from the command line. You can find the full list of variables [in this CSS file](https://github.com/prismicio/vue-essential-slices/blob/master/src/styles/_settings.scss). WIP: for  component, we will soon describe which CSS variables are available and how they affect the design.

### Theme prop (wip)

Each slice also takes an optional `theme` prop as argument. Inspired by css-in-js solutions like Emotion, it's meant to provide a quick access to deeply-nested style properties. We are currently on the path to unify defined properties, across various SliceMachine libraries.

At the moment, these theme properties should be available for all components:

- `align`, which defines the alignement of the text in the section
- `color`, which defines the text color of the section
- `wrapper`, an arbitrary object bound to the wrapper component of each slice
- `title`, object passed to titles in the section, of accepted keys `align`, `color` and `background`
- `description`, object passed to descriptions in the section, of accepted keys `align`, `color` and `background`
- `eyebrow`, object passed to eyebrow headines in the section, of accepted keys `align`, `color` and `background`

For example, this is how you would use the theme prop in a SliceMachine project:

```javascript
<template>
  <slice-zone type="page" uid="homepage" :theme="theme" />
</template>

<script>
import SliceZone from 'vue-slicezone'
import * as Slices from 'vue-essential-slices'

// b&w theme except CallToAction sections
const theme = {
    align: 'left',
    CallToAction: {
        color: '#FFF',
        color: '#111',
        wrapper: {
            style: 'background: tomato'
        },
        eyebrow: {
            color: 'pink'
        }
    }
}

export default {
  components: {
    SliceZone,
    data(){
      return {
        theme
      }
    }
  },
}
</script>
````

👆 We'll soon document which theme properties are available to each component, and how these properties affect the design.

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

Then, add this script line to your package.json file (subject to change because I don't know how to make it appear as a bin script 😭) :

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

