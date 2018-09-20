<template>
	<div class="settings">

		<!--===========================================
		=            Sublime text settings            =
		============================================-->
		
		<div class="wrapper">
			<Paragraph 
				value="Sublime text" />
			<Textarea
				readonly=""
				buttonCopy=""
				:value="SublimeTextSettings" />
		</div>
		
		<!--====  End of Sublime text settings  ====-->
		
		
		<!--====================================
		=            Emmet settings            =
		=====================================-->
		
		<div class="wrapper">
			<Paragraph 
				value="Emmet"/>
			<Textarea
				readonly=""
				buttonCopy=""
				:value="EmmetSettings" />
		</div>
		
		<!--====  End of Emmet settings  ====-->
		
	</div>
</template>

<script>
// @ is an alias to /src
import Textarea from '@/components/Textarea/'
import Paragraph from '@/components/Paragraph/'
import * as EmmetSettings from '@/assets/settings/emmet.json';
import * as SublimeTextSettings from '@/assets/settings/sublimetext.json';

export default {
  name: 'Settings',
  components: {
    Textarea,
    Paragraph
  },
  data: () => ({
  	EmmetSettings: EmmetSettings.default,
  	SublimeTextSettings: SublimeTextSettings.default
  })
}
</script>


<style lang="sass" scoped="">

.settings
	display: flex
	flex-direction: column
	align-items: center
	// .paragraph
	// 	font

</style>
