<template>
  <div :class="[`frame-6`, className || ``]">
    <div class="stap valign-text-bottom large-title">{{ stap1 }}</div>
    <p class="controleer-of-wij-ac-1 valign-text-bottom body-text">{{ controleerOfWijAc }}</p>
  </div>
</template>

<script>
export default {
  name: "Frame6",
  props: ["stap1", "controleerOfWijAc", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.frame-6
  align-items: center
  display: inline-flex
  flex-direction: column
  gap: 40px
  left: 64px
  position: absolute
  top: 173px

.stap
  color: $primary-dark-blue
  font-weight: 800
  line-height: 52.3px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.controleer-of-wij-ac-1
  color: $primary-dark-blue
  font-weight: 400
  line-height: normal
  position: relative
  text-align: center
  width: 234px

.frame-6.frame-27
  left: 67px
</style>
