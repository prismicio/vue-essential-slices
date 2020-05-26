<template>
  <prismic-link
    v-bind="theme"
    :class="`ps-button ${variant}`"
    :field="link"
  >
    <slot></slot>
  </prismic-link>
</template>
<script>
import { commonProps } from '../../utils'

export default {
  name: 'PsButton',
  props: {
    link: {
      type: Object,
      required: true
    },
    primary: {
      type: Boolean,
      required: false,
      default: true
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    theme: commonProps.theme
  },
  computed: {
    variant({ theme, primary, secondary }) {
      if (theme.primary || (!theme.secondary && !secondary)) {
        return 'ps-button--primary'
      }
      return 'ps-button--secondary'
    }
  }
}
</script>