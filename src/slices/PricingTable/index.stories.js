import PricingTable from "./index.vue";
import mock from './mock.json'

import {
  withKnobs
} from "@storybook/addon-knobs";

export const Default = () => ({
  components: {
    PricingTable
  },
  props: {
    slice: {
      type: Object,
      default: mock
    }
  },
  template: `<pricing-table :slice="slice" />`
});


export default {
  title: "Pricing Table"
};
