<template>
  <div>
    <div
      class="c-Loader"
      v-if="dataHeight > 0"
      :style="{
        height: `${dataHeight}px`,
        width: `${dataHeight}px`,
        backgroundColor: `rgba(${backgroundColorRGB.join(', ')}, ${background.opacity})`
      }">
      <div
        class="c-Loader__rolling-wrapper"
        v-if="Number(barsCount) !== 0">
        <div
          class="c-Loader__rooling-bar"
          v-for="(bar, nr) in barsActive"
          :key="nr"
          :class="{back: bar.durations < 0}"
          :style="{
            borderTop: `${bar.color} solid 2px`,
            animationDuration: `${Math.abs(bar.durations)}s`,
            width: `calc(100% - ${(nr + 1) * 8}px)`,
            height: `calc(100% - ${(nr + 1) * 8}px)`,
            top: `${4 * (nr + 1)}px`,
            left: `${4 * (nr + 1)}px`
          }"></div>
        </div>
    </div>

    <div
      v-if="settings">

      <div>
        <p class="title">Loading:</p>

        <p>Wysokość:</p>
        <input
          type="range"
          v-model="dataHeight"
          max="300">
      </div>

      <div>
        <p class="title">Obręcze:</p>
        <p>Liczba:</p>
        <input
          type="range"
          max="5"
          v-model="barsCount">

        <div v-if="barsActive.length > 0">
          <p>Kolor:</p>
          <ol>
            <li
              v-for="bar in barsActive"
              :key="bar.id">
              <input
                type="color"
                v-model="bar.color">
            </li>
          </ol>

          <p>Czas trwania obrotu:</p>
          <ol>
            <li
              v-for="bar in barsActive"
              :key="bar.id">
              <input
                type="range"
                step="0.1"
                min="-5"
                max="5"
                v-model="bar.durations">
                {{ bar.durations }}sec
            </li>
          </ol>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    settings: Boolean,
    height: String,
    barsTypes: Object,
    background: Object
  },
  data () {
    return ({
      dataHeight: this.height ? this.height : 150,
      barsContent: null,
      barsCount: this.barsTypes.nrOfBars ? this.barsTypes.nrOfBars : 3
    })
  },
  computed: {
    barsActive () {
      return this.bars.filter((el, nr) => nr < this.barsCount)
    },
    bars () {
      if (this.barsContent) return this.barsContent
      else {
        let barArr = []

        for (let i = 1; i <= this.barsCount; i++) {
          let color, durations

          color = this.barsTypes.colors ? (
            this.barsTypes.colors[i - 1] ? this.barsTypes.colors[i - 1] : '#000000'
          ) : '#000000'

          durations = this.barsTypes.durations ? (
            this.barsTypes.durations[i - 1] ? this.barsTypes.durations[i - 1] : (
              this.barsTypes.durations[i - 1] === 0 ? this.barsTypes.durations[i - 1] : i
            )
          ) : i

          barArr.push(
            {
              color,
              durations
            }
          )
        }
        // eslint-disable-next-line
        this.barsContent = barArr

        return barArr
      }
    },
    backgroundColorRGB () {
      let a, b, c

      const color = this.background.color

      if (color.length === 7) {
        a = String(color[1]) + String(color[2])
        b = String(color[3]) + String(color[4])
        c = String(color[5]) + String(color[6])
      } else if (color.length === 4) {
        a = color[1]
        b = color[2]
        c = color[3]
      }

      a = parseInt(a, 16)
      b = parseInt(b, 16)
      c = parseInt(c, 16)

      return [].concat(a).concat(b).concat(c)
    }
  },
  watch: {
    barsCount () {
      this.barsContent = null
    }
  }
}
</script>

<style lang="sass" scoped>

.c-Loader
  position: relative
  width: 100px
  height: 100px
  border-radius: 100%
  &__rooling-bar
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    border: transparent solid 4px
    border-radius: 100%
    animation: rolling 2s linear infinite
    &.back
      animation-name: bRolling

@keyframes rolling
  0%
    transform: rotateZ(0deg)
  100%
    transform: rotateZ(360deg)

@keyframes bRolling
  0%
    transform: rotateZ(0deg)
  100%
    transform: rotateZ(-360deg)

</style>
