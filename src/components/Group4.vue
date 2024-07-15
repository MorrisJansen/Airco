<template>
  <div :class="[`group-4`, className || ``]">
    <img
      class="file"
      src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/file--text--check.svg"
      alt="File, text, check"
    />
  </div>
</template>

<script>
export default {
  name: "Group4",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.group-4
  align-items: flex-end
  background-color: $primary-dark-blue
  border-radius: 59.5px
  display: flex
  height: 119px
  justify-content: flex-end
  left: 122px
  min-width: 119px
  padding: 23.5px 23.5px
  position: absolute
  top: 0

.file
  height: 71px
  width: 71px

.group-4.group-5
  padding: 23.5px
</style>
