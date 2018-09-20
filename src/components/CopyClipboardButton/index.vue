<template>
	<button v-on:click="copy">
		{{buttonValue? buttonValue: "Kopiuj"}}
		<textarea
			v-if="textareaVisible"
			style="width: 0; height: 0; opacity: 0; pointer-events: none; display: block; border: none;">{{ copyValue }}</textarea>
	</button>
</template>

<script>
import AndroidButton from '@/components/AndroidButton/';

export default {
	name: "CopyClipboardButton",
	components: {
		AndroidButton
	},
	props: {
		buttonValue: String,
		copyValue: String
	},
	data: () => ({
		textareaVisible: true
	}),
	methods: {
		textAreaChangeStatement(){
			this.textareaVisible = !this.textareaVisible
		},
		copy({target}){
			this.textAreaChangeStatement();

			const textarea = target.children[0];

			textarea.select();
			document.execCommand('copy');

			this.textAreaChangeStatement();
		}
	}
}

</script>