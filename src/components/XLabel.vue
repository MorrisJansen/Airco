<template>
  <div class="label">
    <div class="overlap-group2">
      <div class="overlap-group-1">
        <div class="rectangle-4"></div>
        <img
          class="polygon-1"
          src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/polygon-1.svg"
          alt="Polygon 1"
        />
      </div>
      <div class="text-1 valign-text-bottom">{{ text1 }}</div>
      <div class="mensen-gingen-je-voor valign-text-bottom">{{ mensenGingenJeVoor }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XLabel",
  props: ["text1", "mensenGingenJeVoor"],
};
</script>

<style lang="sass">
@import '../../variables'

.label
  align-items: flex-end
  display: flex
  height: 101px
  justify-content: flex-end
  left: 361px
  min-width: 265px
  position: absolute
  top: 141px

.overlap-group2
  height: 101px
  margin-bottom: 0
  position: relative
  width: 265px

.overlap-group-1
  height: 101px
  left: 0
  position: absolute
  top: 0
  width: 265px

.rectangle-4
  background-color: $primary-yellow
  height: 101px
  left: 22px
  position: absolute
  top: 0
  width: 243px

.polygon-1
  height: 26px
  left: 0
  position: absolute
  top: 58px
  width: 22px

.text-1
  color: $primary-dark-blue
  font-family: $font-family-catamaran
  font-size: $font-size-l
  font-weight: 900
  height: 59px
  left: 63px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 7px

.mensen-gingen-je-voor
  color: $primary-dark-blue
  font-family: $font-family-catamaran
  font-size: 15.9px
  font-weight: 500
  height: 26px
  left: 63px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 58px
</style>
