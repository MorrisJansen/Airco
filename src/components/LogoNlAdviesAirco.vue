<template>
  <div class="logo-nl-advies-airco">
    <img
      class="logo-icon"
      src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/logo-icon.svg"
      alt="Logo icon"
    />
    <div class="overlap-group1">
      <div class="nederlandsadviesnl-1 valign-text-middle large-title">{{ nederlandsadviesNl }}</div>
      <div class="airconditioning valign-text-bottom">{{ airconditioning }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoNlAdviesAirco",
  props: ["nederlandsadviesNl", "airconditioning"],
};
</script>

<style lang="sass">
@import '../../variables'

.logo-nl-advies-airco
  align-items: flex-start
  display: flex
  gap: 8px
  min-width: 364px

.logo-icon
  height: 27px
  margin-top: 3px
  width: 28px

.overlap-group1
  height: 58px
  margin-top: -1px
  position: relative
  width: 328px

.nederlandsadviesnl-1
  color: $white
  font-weight: 800
  height: 40px
  left: 0
  line-height: normal
  position: absolute
  top: 0
  white-space: nowrap
  width: 328px

.airconditioning
  color: $white
  font-family: $font-family-catamaran
  font-size: $font-size-xs
  font-weight: 600
  height: 26px
  left: 221px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 32px
</style>
