<template>
  <component
    v-bind:is="'span'"
    v-if="$slots.default"
    :class="`ps__kicker ${classAttr ? classAttr : ''}`"
    :style="`${appliedColor ? `color: ${appliedColor};` : ''}${appliedAlign ? `text-align: ${appliedAlign}` : ''}`"
  >
    <slot></slot>
  </component>
</template>
<script>
import { commonProps, createComputedProps } from '../../utils'

export default {
  name: 'PsEyebrow',
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
    },
    align: {
      type: String,
      required: false,
      default: null
    }
  },
  // compute style instead
  computed: createComputedProps('color', 'align')
}
</script>