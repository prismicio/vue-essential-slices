import CallToAction from "./index.vue";
import mock from './mock.json'

import { formatThemeProps } from 'vue-slicezone/theme.js'

export const Default = () => ({
  components: { CallToAction },
  props: {
    slice: {
      type: Object,
      default: mock
    },
  },
  template: `<call-to-action :slice="slice" />`
});

export const WithCustomTheme = () => ({
  components: {
    CallToAction
  },
  props: {
    slice: {
      type: Object,
      default() {
        return mock
      }
    },
    theme: {
      default () {
        return formatThemeProps({
          align: 'left',
          button: {
            style: 'background: #FFF;color: #111'
          },
          wrapper: {
            style: 'background: tomato'
          }
        }, {
          i: 0
        })
      }
    }
  },
  template: `<call-to-action :slice="slice" :theme="theme" />`
});


export const NoImage = () => ({
  components: {
    CallToAction
  },
  props: {
   slice: {
       type: Object,
       default: {
         ...mock,
         primary: {
           ...mock.primary,
           icon_image: null
         }
       }
     },
  },
  template: `<call-to-action :slice="slice" />`
});

export const DarkMode = () => ({
  components: {
    CallToAction
  },
  props: {
    slice: {
      type: Object,
      default () {
        return mock
      }
    },
    darkMode: true,
  },
  template: `<call-to-action :slice="slice" darkMode />`
});

export default {
  title: "CallToAction",
};
