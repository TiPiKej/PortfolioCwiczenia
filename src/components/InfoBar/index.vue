<template>
	<div
		class="c-info-bar"
		:class="{
			link: banerLink,
			'top-static': position === 'top-static',
			'top-over': position === 'top-over',
			// 'left-over': position === 'left-over',
			// 'right-over': position === 'right-over',
			'bottom-over': position === 'bottom-over',
			close: isClosing
		}"
		@click="clickBar"
		v-if="!isClosed">
		<p>{{ value? value: "Nie podano danych do wyświelenia!" }}</p>
		
		<span 
			v-if="exitButton"
			class="exitButton"
			@click="closeBar"></span>
	</div>
</template>

<script>

export default {
	name: "InfoBar",
	props: {
		value: String,
		position: String,
		exitButton: Boolean,
		banerLink: String
	},
	data: () => ({
		isClosing: false,
		isClosed: sessionStorage.getItem('infoBarClosed')? sessionStorage.getItem('infoBarClosed'): false
	}),
	methods: {
		clickBar(){
			if(this.banerLink) 
				window.location.href = this.banerLink
		},
		closeBar(el){
			el.stopPropagation();
			this.isClosing = true;
			setTimeout( () => this.isClosed = true ,220);
			sessionStorage.setItem('infoBarClosed', true)
		}
	}
}

</script>

<style lang="sass" scoped="" src="./InfoBar.sass"></style>