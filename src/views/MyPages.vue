<template>
	<div class="l-mypages">

		<!--================================
		=            Apps block            =
		=================================-->
		
		<div
			class="apps"
			v-if="apps.apps.length > 0">
			<p
				class="l-mypages__title">
				Moje aplikacje:</p>
			
			<AppsViews
				v-for="app in apps.apps"
				:dataApp="app" />
		</div>

		<!--=================================
		=            Pages block            =
		==================================-->

		<div
			class="apps"
			v-if="apps.pages.length > 0">
			<p
				class="l-mypages__title">
				Moje strony:</p>
			
			<AppsViews
				v-for="app in apps.pages"
				:dataApp="app" />
		</div>

	</div>
</template>

<script>

import * as apps from '@/assets/apps.json'
import AppsViews from '@/components/AppsViews/AppsViews.vue'

console.log(apps)
export default {
	name: 'mypages',
	data: () => ({
		apps: apps.default
	}),
  components: {
    AppsViews
  }
}
</script>