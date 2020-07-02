<template>
  <prismic-rich-text
    :field="field"
    :class="`ps__title ${classAttr ? classAttr : ''}`"
    :style="`${appliedColor ? `color: ${appliedColor};` : ''}${appliedAlign ? `text-align: ${appliedAlign}` : ''}`"
  />
</template>
<script>
import { commonProps, createComputedProps } from '../../utils'

export default {
  name: 'PsTitle',
  props: {
    theme: commonProps.theme,
    field: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    classAttr: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: createComputedProps('color', 'align')
}
</script>