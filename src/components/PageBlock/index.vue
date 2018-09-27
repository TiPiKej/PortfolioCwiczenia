<script>
/* eslint-disable */
</script>

<template>
	<div>
		<PageSingleBlock />
	</div>
</template>

<script>
import PageSingleBlock from '@/components/PageSingleBlock/'

export default {
	name: 'PageBlock',
	props: {
		value: Object
	},
	components: {
		PageSingleBlock
	}
}
</script>
