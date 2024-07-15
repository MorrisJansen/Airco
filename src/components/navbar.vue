<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";



export default {
  name: "Navbar",
  components: {
    LogoNlAdviesAirco,

  },
  props: [
    "spanText1",
    "spanText2",
    "logoNLAdviesAircoProps",  
],
};
</script>

<template>
    
    <div class="navbar">
        <div class="container-links">
          <div class="container-advies-logo">
            <logo-nl-advies-airco
            :nederlandsadviesNl="logoNLAdviesAircoProps.nederlandsadviesNl"
            :airconditioning="logoNLAdviesAircoProps.airconditioning" />
          </div>
        </div>
          <div class="container-rechts">
            <div class="container-tekst-rechts">
              <span class="tekst-zwart-navbar">{{ spanText1 }}</span><br>
              <span class="tekst-geel-navbar">{{ spanText2 }}</span>
            </div>
          </div>
    </div>
    
</template>


<style lang="sass">
@import '../../variables'

.navbar
  width: 100vw
  height: 7.3rem
  display: inline-flex

.container-links
  width: 50vw
  background-color: black
  max-height: 100%

.container-advies-logo
  margin-left: 20%
  margin-top: 3%

.container-tekst-rechts
  margin-left: 50%
  margin-top: 2%

.container-rechts
  width: 50%
  display: inline
  max-height: 100%

  

.tekst-zwart-navbar
  color: black
  font-family: Catamaran
  font-size: 1.375rem
  font-style: normal
  font-weight: 700
  line-height: normal

.tekst-geel-navbar
  color: #FFCD02
  font-family: Catamaran
  font-size: 1.375rem
  font-style: normal
  font-weight: 700
  line-height: normal

  
@media (max-width: 920px)





</style>