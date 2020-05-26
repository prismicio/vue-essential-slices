<template>
  <div
    v-if="$slots.default"
    :class="`ps__desc ${appliedAlign || ''} ${classAttr ? classAttr : ''}`"
    :style="theme.style || `${appliedColor ? `color: ${appliedColor};` : ''}${appliedBackground ? `background: ${appliedBackground}` : ''}`"
  >
    <p>
      <slot></slot>
    </p>
  </div>
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