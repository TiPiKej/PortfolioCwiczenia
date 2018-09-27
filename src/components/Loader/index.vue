<template>
  <div>
    <div
      class="c-Loader"
      v-if="height > 0"
      :style="{
        height: `${height}px`,
        width: `${height}px`
      }">
      <div
        class="c-Loader__rolling-wrapper"
        v-if="Number(barsCount) !== 0">
        <div
          class="c-Loader__rooling-bar"
          v-for="bar in barsActive"
          :key="bar.id"
          :style="{
            borderTop: `${bar.color} solid 2px`,
            animationDuration: `${bar.id * 0.1 + 2}s`,
            width: `calc(100% - ${bar.id * 8}px)`,
            height: `calc(100% - ${bar.id * 8}px)`,
            top: `${4 * bar.id}px`,
            left: `${4 * bar.id}px`
          }"></div>
        </div>
    </div>

    <div v-if="settings">

      <p>
        Wysokość loadingu:
        <input
          type="range"
          v-model="height"
          max="300">
      </p>

      <p>
        Liczba krążków:
        <input
          type="range"
          max="3"
          v-model="barsCount">
      </p>

      <p>
        Kolory krążków:
        <ol
         :style="{
           listStyle: 'decimal',
           margin: '5px 20px'
         }">
          <li
            v-for="bar in barsActive"
            :key="bar.id">
            <input
              type="color"
              v-model="bar.color">
            <br>
          </li>
        </ol>
      </p>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    settings: Boolean
  },
  data: () => ({
    height: 150,
    bars: [
      { id: 1, color: '#f1c40f' },
      { id: 2, color: '#e67e22' },
      { id: 3, color: '#d35400' }
    ],
    barsCount: 3
  }),
  computed: {
    barsActive () {
      return this.bars.filter(el => el.id <= this.barsCount)
    }
  }
}
</script>

<style lang="sass" scoped>

.c-Loader
  position: relative
  width: 100px
  height: 100px
  &__rooling-bar
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    border: transparent solid 2px
    border-radius: 100%
    animation: rolling 2s linear infinite

@keyframes rolling
  0%
    transform: rotateZ(0deg)
  100%
    transform: rotateZ(360deg)

</style>
