<template>
	<div class="home">
		<PageBlock
      v-for="file in indexFiles"
      :value="file" />
	</div>
</template>

<script>
import PageBlock from "@/components/PageBlock/";
import * as indexFiles from "@/assets/json/indexFiles.json";
const { files } = indexFiles.default;

export default {
  name: 'home',
  data: () => ({
  	indexFiles: files
  }),
  components: {
  	PageBlock
  }
}
</script>
