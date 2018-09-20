<template>
	<CopyClipboardButton
		buttonValue="Kliknij żeby skopiować: sth"
		:copyValue="copyValue" />
</template>

<script>

import CopyClipboardButton from '@/components/CopyClipboardButton/';

export default {
	name: "BClipboard",
	components: {
		CopyClipboardButton
	},
	data: () => ({
		copyValue: "sth"
	})
}

</script>