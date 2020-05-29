<template>
  <main>
    <component v-if="slice" :is="render()" :slice="slice" :theme="theme" />
  </main>
</template>
<script>
import Prismic from 'prismic-javascript'
export default {
  props: ['type', 'uid', 'body', 'render', 'slice_type', 'theme', 'log'],
  data() {
    return {
      slice: null
    }
  },
  async created() {
    const client = Prismic.client('https://repoz.prismic.io/api/v2')
    const response = await client.getByUID(this.type || 'page', this.uid)
    const slice = response.data[this.body || 'body'].find(e => e.slice_type === this.slice_type)
    this.slice = slice
    console.log(JSON.stringify(slice))
  }
}
</script>