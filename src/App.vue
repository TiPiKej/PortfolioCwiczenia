<template>
  <div id="app">
    <div class="c-nav">
      <nav
        class="c-nav__content"
        :class="{ 'active': isActive }">

        <!-- not listing -->
        <router-link
          v-for="{link, value} in withoutListing"
          :to="link"
          @click.native="isActive = !isActive">{{value}}</router-link>

        <!-- with list -->

        <div
          v-for="list in listing">
          {{ list }}
        </div>

      </nav>

      <div class="c-nav__shadow"
          v-if="isActive"
          v-on:click="isActive = !isActive"></div>

      <div class="c-nav__toogleButton"
          :class="{ 'active': isActive }">
        <button
          class="c-nav__toogleButton__hamburger"
          v-on:click="isActive = !isActive">
          <span></span>
        </button>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import * as indexFiles from "./assets/indexFiles.json";
const { files } = indexFiles.default;

export default {
  data: () => ({
    isActive: false,
    menu: files
  }),
  computed: {
    withoutListing () {
      return this.menu.filter(l => !l.list)
    },
    listing () {
      return this.menu.filter(l => l.list)
    }
  }
}
</script>

<style lang="css" src="./assets/reset.css"></style>

<style lang="sass">
// styles for main app wrapper
#app
  background-color: #ecf0f1
  min-height: 100vh
</style>

<style scoped lang="sass" src="./components/NavBar/NavBar.sass"></style>
