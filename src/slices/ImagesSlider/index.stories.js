import ImagesSlider from "./index.vue";
import mock from './mock.json'

import { formatThemeProps } from 'vue-slicezone/theme'

export const Default = () => ({
  components: {
    ImagesSlider
  },
  props: {
    slice: {
      type: Object,
      default: mock
    }
  },
  template: `<images-slider :slice="slice" />`
});

export const WithCustomTheme = () => ({
  components: {
    ImagesSlider
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
          ImagesSlider: {
            color: '#FFF',
            wrapper: {
              style: 'background: rgb(112, 99, 255); border: 8px solid pink'
            },
            eyebrow: {
              color: 'pink',

            },
            slider: {
              dot: {
                style: 'fill: #FFF'
              }
            }
          },
        }, {
          i: 0,
          slice: mock,
          sliceName: 'ImagesSlider'
        })
      }
    }
  },
  template: `<images-slider :theme="theme" :slice="slice" />`
});


export default {
  title: "ImagesSlider"
};
