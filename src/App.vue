<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="css" src="./assets/css/reset.css"></style>

<style lang="sass">
@import "@/assets/sass/variables.sass"

*
  padding: 0
  margin: 0
  box-sizing: border-box

// styles for main app wrapper
#app
  background-color: #ecf0f1
  min-height: 100vh
  .content
    @media screen and (max-width: $mobile)
      margin-top: 85px
    @media screen and (min-width: $mobile + 1)
      width: 200px
      margin: auto
      background-color: red
    @media screen and (min-width: $mobile-full)
      width: 300px
    @media screen and (min-width: $tablet-small)
      width: 400px
    @media screen and (min-width: $tablet-medium)
      width: 600px
    @media screen and (min-width: $tablet-full)
      width: 800px
    @media screen and (min-width: $medium-site)
      width: 1200px
    @media screen and (min-width: $full-site)
      width: 1450px
</style>
