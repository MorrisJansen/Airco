<template>



  <router-link to="/vraag1">
    <div class="button">
      <div class="controleer valign-text-bottom">{{ controleer }}</div>
    </div>
  </router-link>

</template>

<script>
export default {
  name: "XButton",
  props: ["controleer"],
};
</script>

<style lang="sass">
@import '../../variables'

.button
  align-items: center
  background-color: $primary-yellow
  border-radius: 60px
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  padding: 20px 50px
  position: relative

.controleer
  color: $primary-dark-blue
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
