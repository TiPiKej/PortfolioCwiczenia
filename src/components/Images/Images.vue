<template>
	<img
		:src="url"
		class="img" />
</template>

<script>
/* eslint-disable */
export default {
	name: "Img",
	props: {
		url: String,
		miniUrl: String
	}
}

window.addEventListener('scroll', ev => {
	console.log(window.top, window.top.screenTop + window.top.innerHeight)
})

</script>