<template>
  <prismic-rich-text
    :field="field"
    :class="`ps__desc ${appliedAlign || ''} ${classAttr ? classAttr : ''}`"
    :style="theme.style || `${appliedColor ? `color: ${appliedColor};` : ''}${appliedBackground ? `background: ${appliedBackground}` : ''}`"
  />
</template>
<script>
import {
  commonProps,
  computeProp,
  createComputedProps
} from '../../utils'

export default {
  name: 'PsDescription',
  props: {
    field: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    theme: commonProps.theme,
    classAttr: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: null
    },
    background: {
      type: String,
      required: false,
      default: null
    },
    align: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: createComputedProps('color', 'align', 'background')
}
</script>