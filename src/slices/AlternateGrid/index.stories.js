import Fetch from '../../Fetch'

import AlternateGrid from "./index.vue";
import mock from './mock.json'

import {
  formatThemeProps
} from 'vue-slicezone/theme.js'

export const Default = () => ({
  components: {
    AlternateGrid
  },
  methods: {
    render() {
      return AlternateGrid
    }
  },
  props: {
    slice: {
      type: Object,
      default() {
        return {
          ...mock,
          items: mock.items.map((e) => ({ ...e, optional_icon: null }))
        }
      }
    },
  },
  template: `<alternate-grid :slice="slice" />`
});

export const WithIcons = () => ({
  components: {
   AlternateGrid,
  },
  methods: {
    render() {
      return AlternateGrid
    }
  },
  props: {
    slice: {
      type: Object,
      default() {
        return mock
      }
    },
  },
  template: `<alternate-grid :slice="slice" />`
});

export const NoImage = () => ({
  components: {
    AlternateGrid
  },
  props: {
    slice: {
      type: Object,
      default: {
        ...mock,
        primary: {
          ...mock.primary,
          optional_image: null
        }
      }
    },
  },
  template: `<alternate-grid :slice="slice" />`
});

export const WithCustomTheme = () => ({
  components: {
    AlternateGrid,
    Fetch
  },
  methods: {
    render() {
      return AlternateGrid
    }
  },
  props: {
    slice: {
      type: Object,
      default: {
        ...mock,
        primary: {
          ...mock.primary,
          image_side: 'right'
        }
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
            style: 'background: #F7F7F7'
          },
          eyebrow: {
            color: 'tomato'
          },
          item: {
            class: 'custom-class',
            style: 'background: #FFF; border: 1px solid #111;padding: 12px'
          },
          image: {
            style: 'background: yellow'
          }
        }, {
          i: 0
        })
      }
    }
  },
  template: `<alternate-grid :slice="slice" :theme="theme" />`
});

export const WithCustomSpans = () => ({
  components: {
    AlternateGrid
  },
  methods: {
    render() {
      return AlternateGrid
    }
  },
  props: {
    slice: {
      type: Object,
      default: {
        ...mock,
        primary: {
          ...mock.primary,
          image_side: 'right'
        }
      }
    },
    theme: {
      default () {
        return formatThemeProps({
          grid: {
            spans: ['1-2', '3-12']
          }
        })
      }
    }
  },
  template: `<alternate-grid :slice="slice" :theme="theme"/>`
});

export default {
  title: "AlternateGrid",
};
