import CustomerLogos from "./index.vue";
import mock from './mock.json'

import { formatThemeProps } from 'vue-slicezone/theme'

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

export const WithCustomTheme = () => ({
  components: {
    CustomerLogos
  },
  props: {
    slice: {
      type: Object,
      default: mock
    },
    theme: {
      default () {
        return formatThemeProps({
          wrapper: {
            style: 'background: rgb(238,174,202);background: radial-gradient(circle, rgba(238, 174, 202, 1) 0% , rgba(148, 187, 233, 1) 100% );'
          },
          color: 'red',
        }, {
          i: 0,
          slice: mock,
        })
      }
    }
  },
  template: `<customer-logos :theme="theme" :slice="slice" />`
});


export default {
  title: "CustomerLogos"
};
