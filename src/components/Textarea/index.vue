<template>
	<div class="c-Textarea">
		<textarea
			v-if="readonly"
			class="c-Textarea__content"
			readonly="">{{value}}</textarea>
		<textarea
			v-else
			class="c-Textarea__content">{{value}}</textarea>


		<CopyClipboardButton
			class="c-Textarea__buttonCopy"
			:copyValue="JSON.stringify(value)" />
	</div>
</template>

<script>
import CopyClipboardButton from '@/components/CopyClipboardButton/';


export default {
	name: "Textarea",
	components: {
		CopyClipboardButton
	},
	props: {
		value: Object,
		readonly: Boolean,
		buttonCopy: Boolean
	}
}

</script>

<style lang="sass" scoped="" src="./Textarea.sass"></style>