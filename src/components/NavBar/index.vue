<template>
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
        v-for="{ value, elements } in listing">
        <p @click="changeClass">
          <span class="listIcon"></span>
          {{value}}
          <span class="listIcon"></span>
        </p>
        <router-link
          v-for="{link, value} in elements"
          :to="link"
          @click.native="isActive = !isActive">{{value}}</router-link>
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
</template>

<script>

import * as indexFiles from "@/assets/json/indexFiles.json";
const { files } = indexFiles.default;

export default {
  name: "NavBar",
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
  },
  methods: {
    changeClass({target}){
      if( target.className.indexOf('active') === -1 )
        target.className += ' active';
      else {
        const splited = target.className.split(' active');
        target.className = splited.join('');
      }
    }
  }
}

</script>

<style lang="sass" src="./NavBar.sass" scoped=""></style>