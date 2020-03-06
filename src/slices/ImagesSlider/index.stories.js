import ImagesSlider from "./index.vue";
import mock from './mock.json'

import {
  withKnobs
} from "@storybook/addon-knobs";

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


export default {
  title: "Images Slider"
};
