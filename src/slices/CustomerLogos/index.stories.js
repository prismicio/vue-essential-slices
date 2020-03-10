import CustomerLogos from "./index.vue";
import mock from './mock.json'

import {
  withKnobs
} from "@storybook/addon-knobs";

export const Default = () => ({
  components: {
    CustomerLogos
  },
  props: {
    slice: {
      type: Object,
      default: mock
    }
  },
  template: `<customer-logos :slice="slice" />`
});


export default {
  title: "Customer Logos"
};
