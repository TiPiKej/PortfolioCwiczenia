<template>
	<div class="c-Textarea">
		<textarea
			v-if="readonly"
			class="c-Textarea__content"
			readonly="">{{value}}</textarea>
		<textarea
			v-else
			class="c-Textarea__content">{{value}}</textarea>

		<button 
			v-if="buttonCopy"
			v-on:click="copy"
			class="c-Textarea__buttonCopy">
			Kopiuj
		</button>
	</div>
</template>

<script>


export default {
	name: "Textarea",
	props: {
		value: Object,
		readonly: Boolean,
		buttonCopy: Boolean
	},
	methods: {
		copy: (el) => {
			const {children} = el.target.parentElement;
			const textareas = Array.from(children).filter(el => el.type === 'textarea');

			Array.from(textareas).forEach(el => {
				el.select();
				document.execCommand('copy');
			});
		}
	}
}

</script>

<style lang="sass" scoped="" src="./Textarea.sass"></style>