import VideoHighlights from "./index.vue";
import mock from './mock.json'

import { formatThemeProps } from 'vue-slicezone/theme.js'

export const Default = () => ({
  components: { VideoHighlights },
  props: {
    slice: {
      type: Object,
      default: mock
    },
  },
  template: `<video-highlights :slice="slice" />`
});

export const WithCustomTheme = () => ({
  components: {
    VideoHighlights
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
          CardsCarousel: {
            align: 'right',
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
  template: `<video-highlights :slice="slice" :theme="theme" />`
});

export default {
  title: "VideoHighlights",
};
