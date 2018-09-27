<template>
  <div class="home">
    <PageBlock
      v-for="file in indexFiles"
      :key="file"
      :value="file" />
  </div>
</template>

<script>
import PageBlock from '@/components/PageBlock/'
import * as indexFiles from '@/assets/json/indexFiles.json'

export default {
  name: 'home',
  data: () => ({
    indexFiles: indexFiles.default.files
  }),
  components: {
    PageBlock
  },
  computed: {
    // listInfo
  }
}
</script>
