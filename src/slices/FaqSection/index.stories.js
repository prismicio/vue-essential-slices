import FaqSection from "./index.vue";
import mock from './mock.json'

import {
  withKnobs
} from "@storybook/addon-knobs";

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


export default {
  title: "Faq Section"
};
