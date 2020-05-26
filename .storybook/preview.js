import Vue from 'vue';
import { configure } from '@storybook/vue';
import PrismicVue from 'prismic-vue'

import "../src/styles/styles.scss"
// import "./demo.css"

Vue.use(PrismicVue, {
  endpoint: 'https://your-api-endpoint.prismic.io/api/v2',
  linkResolver: function (doc) {
    console.log('[preview.js] linkResolver called!')
    return '/link'
  },
})

Vue.prototype.$prismic.asText = function(richText) {
  return (richText && Array.isArray(richText) && richText[0]) ? richText[0].text : ''
}

configure(require.context('../stories', true, /\.stories\.js$/), module);