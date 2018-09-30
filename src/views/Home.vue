<template>
  <div class="home">
    <PageBlock
      v-for="(file, nbr) in basicListItems" :key="nbr"
      :value="file" />
    <div v-for="{value, elements} in withUnderListItems" :key="value">
      <Paragraph
        header
        :value="value" />
      <PageBlock
        v-for="(file, nbr) in elements" :key="nbr"
        :value="file" />
    </div>
  </div>
</template>

<script>
import PageBlock from '@/components/PageBlock/'
import Paragraph from '@/components/Paragraph/'
import * as indexFiles from '@/assets/json/indexFiles.json'

export default {
  name: 'home',
  data: () => ({
    indexFiles: indexFiles.default.files
  }),
  components: {
    PageBlock,
    Paragraph
  },
  computed: {
    withUnderListItems () {
      return this.indexFiles.filter(el => el.list)
    },
    basicListItems () {
      return this.indexFiles.filter(el => !el.list)
    }
  }
}
</script>
