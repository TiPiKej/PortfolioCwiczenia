<template>
	<CopyClipboardButton
		buttonValue="Kliknij żeby skopiować: sth"
		:copyValue="copyValue" />
</template>

<script>
import CopyClipboardButton from "@/components/CopyClipboardButton/";

export default {
  name: "BClipboard",
  components: {
    CopyClipboardButton
  },
  data: () => ({
    copyValue: "sth"
  })
};
</script>

<style lang="sass" scoped>

.copyButton
	line-height: 3em
	background: #c073df
	display: block
	padding: 20px
	font-weight: bold
	font-size: 30px
	cursor: pointer
	transition: 220ms ease-in-out all
	&:hover
		background: #8e44ad

</style>
