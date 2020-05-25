import CallToAction from "./index.vue";
import mock from './mock.json'

import { formatThemeProps } from 'vue-slicezone/theme.js'

import {
  withKnobs,
  object,
  select,
  boolean
} from "@storybook/addon-knobs";

const groups = {
  writer: 'Content',
  dev: 'Props',
}

const paraDefaultValue = [{
  "type": "paragraph",
  "text": "It’s very easy to create stylish and beautiful prototypes for your future projects, both graphical and dynamic.",
  "spans": []
}];

const titleDefaultValue = [{
  "type": "paragraph",
  "text": "Collector Slices kit",
  "spans": []
}];

export const Default = () => ({
  components: { CallToAction },
  props: {
    slice: {
      type: Object,
      default: {
        ...mock,
        primary: {
          ...mock.primary,
          title: object('Title', titleDefaultValue, groups.writer),
          paragraph: object('Paragraph', paraDefaultValue, groups.writer)
        }
      }
    },
  },
  template: `<call-to-action :slice="slice" />`
});

console.log({
  formatThemeProps,
  res: formatThemeProps({
    wrapper: {
      style: 'background: tomato'
    }
  }, {
    i: 0
  })
});

export const WithCustomTheme = () => ({
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
          title: object('Title', titleDefaultValue, groups.writer),
          paragraph: object('Paragraph', paraDefaultValue, groups.writer),
        }
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
           title: object('Title', titleDefaultValue, groups.writer),
           paragraph: object('Paragraph', paraDefaultValue, groups.writer),
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
      default: {
        ...mock,
        primary: {
          ...mock.primary,
          title: object('Title', titleDefaultValue, groups.writer),
          paragraph: object('Paragraph', paraDefaultValue, groups.writer),
        }
      }
    },
    darkMode: true,
  },
  template: `<call-to-action :slice="slice" darkMode />`
});

export default {
  title: "Call To Action",
  decorators: [withKnobs]
};
