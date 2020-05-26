<template>
  <component
    v-bind:is="'h2'"
    v-if="$slots.default"
    aria-level="2"
    :class="`ps__title ${classAttr ? classAttr : ''}`"
    :style="`${appliedColor ? `color: ${appliedColor};` : ''}${appliedAlign ? `text-align: ${appliedAlign}` : ''}`"
  >
    <slot></slot>
  </component>
</template>
<script>
import { commonProps, createComputedProps } from '../../utils'

export default {
  name: 'PsTitle',
  props: {
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
    }
  },
  computed: createComputedProps('color', 'align')
}
</script>