import CardsCarousel from "./index.vue";
import mock from './mock.json'

import { formatThemeProps } from 'vue-slicezone/theme.js'

export const Default = () => ({
  components: {
    CardsCarousel
  },
  props: {
    slice: {
      type: Object,
      default: mock
    }
  },
  template: `<cards-carousel :slice="slice" />`
});

export const WithCustomTheme = () => ({
  components: {
    CardsCarousel
  },
  props: {
    slice: {
      type: Object,
      default: mock
    },
    theme: {
      default () {
        return formatThemeProps({
          CardsCarousel: {
            color: '#FFF',
            wrapper: {
              style: 'background: rgb(112, 99, 255); border: 8px solid pink'
            },
            eyebrow: {
              color: 'pink',

            },
          },
        }, {
          i: 0,
          slice: mock,
          sliceName: 'CardsCarousel'
        })
      }
    }
  },
  template: `<cards-carousel :slice="slice" :theme="theme" />`
});


export default {
  title: "CardsCarousel"
};
