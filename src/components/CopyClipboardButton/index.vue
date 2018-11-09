<template>
	<a
		class="copyButton"
		v-on:click="copy">
		{{buttonValue? buttonValue: "Kopiuj"}}
		<textarea
      v-if="this.textareaVisible"
			style="width: 1px; height: 1px; opacity: 1; pointer-events: none; display: unset; border-color: transparent; outline: none; resize: none; background-color: transparent;">{{ copyValue }}</textarea>
	</a>
</template>

<script>
import AndroidButton from "@/components/AndroidButton/";

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
    copy({ target }) {
      const textarea = target.children[0];

      textarea.select();
      document.execCommand("copy");
    }
  }
};
</script>