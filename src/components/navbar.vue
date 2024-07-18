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
              <span class="tekst-zwart-navbar">Besparen op Airconditioning was</span>
              <span class="tekst-geel-navbar">nog nooit zo makkelijk!</span>
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



.container-rechts
  width: 50%
  display: inline
  max-height: 100%

.container-advies-logo
  display: flex
  justify-content: center
  align-items: center
  height: 100%



.container-tekst-rechts  
  max-height: 100%

.tekst-geel-navbar, .tekst-zwart-navbar
  display: flex
  justify-content: center
  align-items: center
  font-family: Catamaran
  font-size: 1.375rem
  font-style: normal
  font-weight: 700
  line-height: normal




  

.tekst-zwart-navbar
  color: black
  padding-top: 2.5% 


.tekst-geel-navbar
  color: #FFCD02
  margin-left: 10%



@media (max-width: 1100px)
  .container-tekst-rechts
    margin-top: 2%
  
@media (max-width: 1000px)
  .container-advies-logo, .container-tekst-rechts
    zoom: 90%



  // hier moet de sectie 1 komen met een zoom attribuut kijken of ik het zo responsive kan maken.


@media (max-width: 850px)
  .container-advies-logo, .container-tekst-rechts
    zoom: 80%

  .container-tekst-rechts
    margin-top: 4%


@media (max-width: 700px)
  .container-advies-logo, .container-tekst-rechts
    zoom: 70%

  .container-tekst-rechts
    margin-top: 7%


@media (max-width: 550px)
  .container-advies-logo, .container-tekst-rechts
    zoom: 60%

  .container-tekst-rechts
    margin-top: 11%

@media (max-width: 500px)
  .container-advies-logo, .container-tekst-rechts
    zoom: 40%

  .container-tekst-rechts
    margin-top: 20%!important



</style>