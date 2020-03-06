import VideoHighlights from "./index.vue";
import mock from './mock.json'

import {
  withKnobs
} from "@storybook/addon-knobs";

export const Default = () => ({
  components: {
    VideoHighlights
  },
  props: {
    slice: {
      type: Object,
      default: mock
    }
  },
  template: `<video-highlights :slice="slice" />`
});


export default {
  title: "Video Highlights"
};
