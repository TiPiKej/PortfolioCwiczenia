<script>
/* eslint-disable */
</script>


<template>
	<div class="c-Textarea">
		<textarea
			v-if="readonly"
			class="c-Textarea__content"
			readonly=""
			:style="{height}">{{value}}</textarea>
		<textarea
			v-else
			class="c-Textarea__content">{{value}}</textarea>


		<CopyClipboardButton
			v-if="buttonCopy"
			class="c-Textarea__buttonCopy"
			:copyValue="JSON.stringify(value)" />
	</div>
</template>

<script>
import CopyClipboardButton from '@/components/CopyClipboardButton/'

export default {
	name: "Textarea",
	components: {
		CopyClipboardButton
	},
	props: {
		value: Object,
		readonly: Boolean,
		buttonCopy: Boolean
	},
	data: () => ({
		height: '200px'
	}),
	mounted(){
		const countLines = (
			JSON.stringify(this.value).split(',').length + 
			JSON.stringify(this.value).split('},').length + 
			1
			)
		const lineHeight = (21 + 1/3) // in px
		this.height = `${countLines * lineHeight}px`
	}
}

</script>

<style lang="sass" scoped="" src="./Textarea.sass"></style>
