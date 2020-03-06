import CallToAction from "./index.vue";
import mock from './mock.json'

import {
  withKnobs,
  object,
  select,
  boolean
} from "@storybook/addon-knobs";

const handledAddonProperties = {
  object(key, value, groupId) {
    return object(key, value.type(), groupId)
  },
  select,
  boolean(key, value, groupId) {
    return boolean(key, value.type(), groupId);
  },
}

const developerProps = Object.entries(CallToAction.props)
  .filter(([key, _]) => key !== 'slice')

const groups = {
  writer: 'Content',
  dev: 'Props',
}

const paraDefaultValue = [{
  "type": "paragraph",
  "text": "It’s very easy to create stylish and beautiful prototypes for your future projects, both graphical and dynamic.",
  "spans": []
}];

const titleDefaultValue = [{
  "type": "paragraph",
  "text": "Collector Slices kit",
  "spans": []
}];

const options = {
  None: null,
  DarkMode: 'dark_mode'
};

export const Default = () => ({
  components: { CallToAction },
  props: {
    slice: {
      type: Object,
      default: {
        ...mock,
        slice_label: select('Label', options, 'dark_mode', groups.writer),
        primary: {
          ...mock.primary,
          title: object('Title', titleDefaultValue, groups.writer),
          paragraph: object('Paragraph', paraDefaultValue, groups.writer)
        }
      }
    },
    ...(developerProps.reduce((acc, [key, value]) => {
      const maybeFunc = handledAddonProperties[value.type.name.toLowerCase()]
      if (maybeFunc) {
        acc[key] = maybeFunc(key, value, groups.dev)
      }
    }, {}))
  },
  template: `<call-to-action :slice="slice" />`
});

export const NoImage = () => ({
  components: {
    CallToAction
  },
  props: {
   slice: {
       type: Object,
       default: {
         ...mock,
         primary: {
           ...mock.primary,
           title: object('Title', titleDefaultValue, groups.writer),
           paragraph: object('Paragraph', paraDefaultValue, groups.writer),
           icon_image: null
         }
       }
     },
     ...(developerProps.reduce((acc, [key, value]) => {
       const maybeFunc = handledAddonProperties[value.type.name.toLowerCase()]
       if (maybeFunc) {
         acc[key] = maybeFunc(key, value, groups.dev)
       }
     }, {}))
  },
  template: `<call-to-action :slice="slice" />`
});

export default {
  title: "Call To Action",
  decorators: [withKnobs]
};
