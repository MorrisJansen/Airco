<template>
  <router-link to="/vraag1">
    <div class="button-onder">
      <div class="controleer valign-text-bottom">{{ controleer }}</div>
    </div>
  </router-link>

</template>

<script>
export default {
  name: "XButton2",
  props: ["controleer"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-1
  align-items: center
  background-color: $black
  border-radius: 60px
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  padding: 17px 65px
  position: relative

.controleer-1
  color: $white
  font-family: $font-family-catamaran
  font-size: 21.9px
  font-weight: 800
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content
</style>
