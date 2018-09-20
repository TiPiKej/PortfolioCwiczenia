<template>
	<button
		class="c-AndroidButton"
		v-on:click="click">
		{{ value? value: "Kliknij" }}
		<span
			v-if="effectOn"
			class="effect"
			:style="{top, left}"></span>
	</button>
</template>

<script>
	
export default {
	name: "AndroidButton",
	props: {
		value: String
	},
	data: () => ({
		effectOn: false,
		top: 0,
		left: 0
	}),
	methods: {
		click(el){
			if(!this.effectOn){
				this.top = `${el.layerY}px`;
				this.left = `${el.layerX}px`;
				this.effectOn = true;
				setTimeout(() => this.effectOn = false, 500);
			}
		}
	}
}

</script>

<style lang="sass" src="./AndroidButton.sass" scoped=""></style>