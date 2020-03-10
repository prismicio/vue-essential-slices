import CardsCarousel from "./index.vue";
import mock from './mock.json'

import { withKnobs } from "@storybook/addon-knobs";

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


export default {
  title: "Cards Carousel"
};
