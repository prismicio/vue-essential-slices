<template>
  <component
		:class="`ps${(darkMode) ? ' ps--black' : ''} ${classAttr ? classAttr : ''}`"
    v-bind:is="'section'"
		v-bind="theme"
	>
    <slot></slot>
  </component>
</template>
<script>
import { commonProps } from '../../utils'

export default {
  name: 'PsSection',
  props: {
    theme: commonProps.theme,
    darkMode: commonProps.darkMode,
    classAttr: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>