import PricingTable from "./index.vue";
import mock from './mock.json'

import { formatThemeProps } from 'vue-slicezone/theme.js'

export const Default = () => ({
  components: { PricingTable },
  props: {
    slice: {
      type: Object,
      default: mock
    },
  },
  template: `<pricing-table :slice="slice" />`
});

export const WithCustomTheme = () => ({
  components: {
    PricingTable
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
          align: 'left',
          button: {
            style: 'background: #FFF;color: #111'
          },
          wrapper: {
            style: 'background: tomato'
          },
          eyebrow: {
            color: '#FFF',
            align: 'left'
          },
          button: {
            primary: true
          }
        }, {
          i: 0
        })
      }
    }
  },
  template: `<pricing-table :slice="slice" :theme="theme" />`
});

export default {
  title: "PricingTable",
};
