import FeatureTestimonials from "./index.vue";
import mock from './mock.json'

export const Default = () => ({
  components: {
    FeatureTestimonials
  },
  props: {
    slice: {
      type: Object,
      default: mock
    }
  },
  template: `<feature-testimonials :slice="slice" />`
});


export default {
  title: "FeatureTestimonials"
};
