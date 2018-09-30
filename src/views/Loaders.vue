<template>
  <div>
    <Loader
      settings
      height="150"
      :barsTypes="{
        nrOfBars: 5,
        colors: ['#f1c40f', '#e67e22', '#d35400', '#f39c12', '#c0392b']
      }"
      backgroundColor="black"
      backgroundBlur="0.8" />
  </div>
</template>

<script>
import Loader from '@/components/Loader/'

export default {
  name: 'loaderView',
  components: {
    Loader
  }
}
</script>
