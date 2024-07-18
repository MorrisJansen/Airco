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
  display: flex
  flex-direction: column
  justify-content: flex-end
  color: white
  align-items: center
  justify-content: center
  align-content: center
  margin: 0 auto
</style>
