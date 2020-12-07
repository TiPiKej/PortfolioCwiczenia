<template>
  <div id="app">
    <NavBar />
    <!-- <InfoBar
      value="Kliknij w baner żeby wejść do poprzedniej strony z ćwiczeniami"
      position="top-static"
      :exitButton="true"
      banerLink="http://tomekkumor.000webhostapp.com/cw/" /> -->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar/'
import InfoBar from './components/InfoBar/'

export default {
  components: {
    NavBar,
    InfoBar
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
