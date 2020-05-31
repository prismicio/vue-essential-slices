<template>
<ps-section v-bind="theme.wrapper" classAttr="ps-alternate ps-alternate--grid">
  <div class="ps__wrap">
    <div class="ps__main grid grid--12 grid--align-center">
      <div :class="firstColSpan" v-if="slice.primary.optional_image">
        <div class="ps__img">
          <prismic-image :field="slice.primary.optional_image" v-bind="theme.image" />
        </div>
      </div>
      <div :class="secondColSpan">
        <div class="ps__head ps__head--left">
          <header class="ps__header">
            <ps-eyebrow :theme="theme.eyebrow" :align="theme.align" :color="theme.color">
              {{ $prismic.asText(slice.primary.eyebrow_headline) }}
            </ps-eyebrow>
            <ps-title :theme="theme.title" :align="theme.align" :color="theme.color">
              {{ $prismic.asText(slice.primary.title) }}
            </ps-title>
          </header>
          <ps-description :theme="theme.description" :align="theme.align" :color="theme.color">
            {{ $prismic.asText(slice.primary.description) }}
          </ps-description>
        </div>
        <div class="ps-alternate__modules" v-if="slice.items.length">
          <div v-for="(item, i) in slice.items" :key="`grid-item-${i + 1}`" v-bind="theme.item" class="ps-alternate__module">
            <prismic-image v-if="item.optional_icon" v-bind="theme.icon" :field="item.optional_icon" class="ps-alternate__module__img" />
            <div class="ps-alternate__module__content">
              <prismic-rich-text :field="item.title" />
              <prismic-rich-text :field="item.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</ps-section>
</template>
<script>
import {
	PsEyebrow,
	PsDescription,
	PsTitle,
	PsSection,
	PsSlider,
} from '../../components'
import { commonProps } from '../../utils' 

export default {
  props: commonProps,
  components: {
		PsEyebrow,
		PsDescription,
		PsTitle,
		PsSection,
  },
  computed: {
    noImage({ slice }) {
      return slice.primary.optional_image === null
    },
    imageLeft({ slice }) {
      return slice.primary.image_side === 'left'
    },
    firstColSpan({ slice, noImage, imageLeft, theme }) {
      if (theme && theme.grid && theme.grid.spans && theme.grid.spans.length > 0) {
        return `span-${theme.grid.spans[0]}`
      }
      return imageLeft ? 'span-1-5' : 'span-8-12'
    },
    secondColSpan({ slice, noImage, imageLeft, theme }) {
      if (theme && theme.grid && theme.grid.spans && theme.grid.spans.length > 1) {
        return `span-${theme.grid.spans[1]}`
      }
      if (noImage) {
        return 'span-1-10'
      }
      return imageLeft ? 'span-7-12' : 'span-1-6'
    },
  }
}
</script>