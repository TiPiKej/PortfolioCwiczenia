<template>
	<div class="c-myapp">
		<a
			:href="dataApp.url"
			target="_blank"
			class="c-myapp__link">
			<Img
				:url="dataApp.shortcut"
				:miniUrl="dataApp.miniShortcut"/>
			<p
				class="c-myapp__link__paragraph">
				{{ dataApp.name }}
			</p>
		</a>
	</div>
</template>

<script>

import Img from '@/components/Images/Images.vue'

export default {
	name: "AppsViews",
	props: {
		dataApp: Object
	},
	components: {
		Img
	}
}

</script>

<style lang="sass" src="./AppsViews.sass" scoped=""></style>