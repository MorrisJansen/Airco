<template>
  <div>
    <button @click="handleClick" class="button">
      <div class="controleer valign-text-bottom">CONTROLEER</div>
    </button>
  </div>
</template>

<script>
export default {
  name: "XButton",
  props: ["controleer"],
  methods: {
    handleClick() {
      this.$emit('button-click');
    }
  }
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
  padding: 12px 50px
  position: relative
  border: none


.button:hover
  cursor: pointer


.controleer
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
