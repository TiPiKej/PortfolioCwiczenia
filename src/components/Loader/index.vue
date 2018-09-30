<template>
  <div>
    <div
      class="c-Loader"
      v-if="dataHeight > 0"
      :style="{
        height: `${dataHeight}px`,
        width: `${dataHeight}px`
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
            animationDuration: `${bar.duration}s`,
            width: `calc(100% - ${bar.id * 8}px)`,
            height: `calc(100% - ${bar.id * 8}px)`,
            top: `${4 * bar.id}px`,
            left: `${4 * bar.id}px`
          }"></div>
        </div>
    </div>

    <div
      v-if="settings">

      <p>
        Wysokość loadingu:
        <input
          type="range"
          v-model="dataHeight"
          max="300">
      </p>

      <p>
        Liczba krążków:
        <input
          type="range"
          max="5"
          v-model="barsCount">
      </p>

      <p v-if="barsActive.length > 0">
        Krążki - kolor:
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

      <p v-if="barsActive.length > 0">
        Krążki - czas trwania obrotu:
        <ol
         :style="{
           listStyle: 'decimal',
           margin: '5px 20px'
         }">
          <li
            v-for="bar in barsActive"
            :key="bar.id">
            <input
              type="range"
              step="0.1"
              min="0"
              max="5"
              v-model="bar.duration">
            {{ bar.duration }}sec
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
    settings: Boolean,
    height: String,
    barsTypes: Object
  },
  data () {
    return ({
      dataHeight: this.height ? this.height : 150,
      bars: [
        {
          id: 1,
          color: this.barsTypes.colors ? (
            this.barsTypes.colors[0] ? this.barsTypes.colors[0] : '#000000'
          ) : '#000000',
          duration: this.barsTypes.duration ? (
            this.barsTypes.duration[0] ? this.barsTypes.duration[0] : 2
          ) : 1
        },
        {
          id: 2,
          color: this.barsTypes.colors ? (
            this.barsTypes.colors[1] ? this.barsTypes.colors[1] : '#000000'
          ) : '#000000',
          duration: this.barsTypes.duration ? (
            this.barsTypes.duration[1] ? this.barsTypes.duration[1] : 3
          ) : 2
        },
        {
          id: 3,
          color: this.barsTypes.colors ? (
            this.barsTypes.colors[2] ? this.barsTypes.colors[2] : '#000000'
          ) : '#000000',
          duration: this.barsTypes.duration ? (
            this.barsTypes.duration[2] ? this.barsTypes.duration[2] : 4
          ) : 3
        },
        {
          id: 4,
          color: this.barsTypes.colors ? (
            this.barsTypes.colors[3] ? this.barsTypes.colors[3] : '#000000'
          ) : '#000000',
          duration: this.barsTypes.duration ? (
            this.barsTypes.duration[3] ? this.barsTypes.duration[3] : 5
          ) : 4
        },
        {
          id: 5,
          color: this.barsTypes.colors ? (
            this.barsTypes.colors[4] ? this.barsTypes.colors[4] : '#000000'
          ) : '#000000',
          duration: this.barsTypes.duration ? (
            this.barsTypes.duration[4] ? this.barsTypes.duration[4] : 6
          ) : 5
        }
      ],
      barsCount: this.barsTypes.nrOfBars ? this.barsTypes.nrOfBars : 3
    })
  },
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
