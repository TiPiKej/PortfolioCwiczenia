<template>
  <p
    class="c-Paragraph"
    :class="{header}">
    {{value}}
  </p>
</template>

<script>

export default {
  name: 'Paragraph',
  props: {
    value: String,
    header: Boolean
  }
}

</script>

<style lang="sass" scoped="" src="./Paragraph.sass"></style>
