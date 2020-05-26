import FaqSection from "./index.vue";
import mock from './mock.json'

import { formatThemeProps } from 'vue-slicezone/theme'

export const Default = () => ({
  components: {
    FaqSection
  },
  props: {
    slice: {
      type: Object,
      default: mock
    }
  },
  template: `<faq-section :slice="slice" />`
});

export const WithoutImage = () => ({
  components: {
    FaqSection
  },
  props: {
    slice: {
      type: Object,
      default: {
        ...mock,
        primary: {
          ...mock.primary,
          optional_image: null
        }
      }
    }
  },
  template: `<faq-section :slice="slice" />`
});

export const WithCustomTheme = () => ({
  components: {
    FaqSection
  },
  props: {
    slice: {
      type: Object,
      default: {
        ...mock,
        primary: {
          ...mock.primary,
          optional_image: null
        }
      }
    },
    theme: {
      default () {
        return formatThemeProps({
          FaqSection: {
            eyebrow: {
              color: 'tomato',

            },
            wrapper: {
              style: 'transform: rotateZ(2deg);'
            },
          },
        }, {
          i: 0,
          slice: mock,
          sliceName: 'FaqSection'
        })
      }
    }
  },
  template: `<faq-section :theme="theme" :slice="slice" />`
});


export default {
  title: "FaqSection"
};
