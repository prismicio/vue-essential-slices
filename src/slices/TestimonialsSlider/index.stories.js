import TestimonialsSlider from "./index.vue";
import mock from './mock.json'

import {
  withKnobs
} from "@storybook/addon-knobs";

export const Default = () => ({
  components: {
    TestimonialsSlider
  },
  props: {
    slice: {
      type: Object,
      default: mock
    }
  },
  template: `<testimonials-slider :slice="slice" />`
});


export default {
  title: "Testimonials Slider"
};
