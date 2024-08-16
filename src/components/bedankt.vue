<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";
import progressiebalk from "./progressiebalk.vue";
import { addAntwoord } from "../antwoorden.js";

export default {
  name: "vraag2",
  components: {
    LogoNlAdviesAirco,
    progressiebalk,
  },
  props: [
    "spanText1",
    "spanText2",
    "logoNLAdviesAircoProps",
  ],
};
</script>















<template>
  <div>
    <!-- navbar -->
    <div class="navbar">
      <div class="container-links">
        <a href="/airco">
        <div class="container-advies-logo">
          <logo-nl-advies-airco
            :nederlandsadviesNl="logoNLAdviesAircoProps.nederlandsadviesNl"
            :airconditioning="logoNLAdviesAircoProps.airconditioning" />
        </div>
        </a>
      </div>
      <div class="container-rechts">
        <div class="container-tekst-rechts">
          <span class="tekst-zwart-navbar">{{ spanText1 }}</span>
          <span class="tekst-geel-navbar">{{ spanText2 }}</span>
        </div>
      </div>
    </div>
    <div class="achtergrond-vraag1">
      <div class="overkoepelende-container">

        <div class="vraag1-container-bedankt">
          <div class="container-voor-gegevens-bedankt">
            

            <p class="bedankt-tekst">Onze adviseurs nemen zo snel mogelijk contact met je op. We sturen een sms waarmee je je nummer kunt bevestigen.</p>
      </div>
    </div>
    </div>
    <p class="footer">© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy</p>
  </div>
</div>
</template>







  

  
  <style lang="sass">
  @import '../../variables'








.bedankt-tekst
  font-family: catamaran
  font-size:  26px
  font-weight: 600
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  text-align: center


.achtergrond-vraag1
  background-color: #FFE758
  height: auto
  padding-bottom: 2rem
  width: 120rem
  max-width: 100vw


.overkoepelende-container
  display: flex
  flex-direction: column
  align-items: center
  gap: 6rem









.vraag1-container-bedankt
  width: 68rem
  height: 200px
  border-radius: 1.875rem
  background: #FFF
  gap: 2rem
  display: flex
  margin-top: 2rem

.container-voor-gegevens-bedankt
  width: 100%
  height: 100%



.vraag2
  color: #000
  font-family: Catamaran
  font-size: 2.8125rem
  font-style: normal
  font-weight: 800
  line-height: 130%
  display: block!important
  margin-left: 5rem
  width: 70%!important

  






.container-inputs
  margin-left: 5rem
  max-width: 36rem

.overkoepelende-input-container
  display: flex
  flex-wrap: wrap
  max-width: 36rem
  gap: 1rem




// .volgende
//   display: flex
//   justify-content: end
//   margin-right: 5rem
//   margin-top: 1rem


// .volgende-button
//   display: flex
//   padding: 0.5rem 2.8rem
//   justify-content: center
//   align-items: center
//   gap: 0.625rem
//   border-radius: 3.75rem
//   background: #FFCD02
//   color:  #1C1829
//   font-family: Catamaran
//   font-size: 1.36875rem!important
//   font-style: normal
//   font-weight: 800
//   line-height: normal
//   text-transform: uppercase
//   border: none
//   cursor: pointer













.footer
  display: flex
  justify-content: center
  padding-top: 3rem
  padding-bottom: 3rem
  color: #000
  font-family: Catamaran
  font-size: 1rem
  font-style: normal
  font-weight: 400
  line-height: normal






@media (min-width: 500px)
  .container-afbeelding-mobiel
    display: none


@media (max-width: 500px)
  .overkoepelende-container
    zoom: 30%

  .achtergrond-vraag1
    height: 26rem!important

  .vraag1-container
    padding-bottom: 1px
    height: 1060px


  .laadbalk
    margin: 0 auto
    max-width: 100vw
    height: 1.5rem
    position: relative
    top: 1rem!important
    border-radius: 2.5rem
    background: #F4F4F4!important
    zoom: 290%

  .geladen-gedeelte-vraag2
    max-width: 70%
    // transition: width 5s ease

  .afbeelding-van-pijl
    margin-top: 4rem!important

  .pijl-vraag1
    zoom: 300%


  .vraag-hoeveel
    margin-left: 2rem!important
    zoom: 210%
    display: block
    padding: 10px 0
    margin-top: 15px
    position: relative
    right:  10px

  .vraag
    margin-left: 2rem!important
    zoom: 150%

  .container-inputs
    margin-left: 3rem!important
  

  .overkoepelende-input-container
    display: block!important
  

  .container-afbeelding
    height: 100%!important 
    

  .container-afbeelding-desktop
    display: none

  .afbeelding-mobiel
    zoom: 85%
    border-radius: 1.875rem
    width: 105%!important
    margin-right: 40px
    position: relative
    top: 12px
    right: 25px

  .gele-rondje
    min-width: 13px!important
    min-height: 13px!important
    max-width: 13px!important
    min-width: 13px!important


  .vraag2
    margin-left: 3rem!important
    zoom: 110%

  .radio-input
    zoom: 220%!important
    max-width: 100%
    padding: .3125rem 0.6rem
    height: 120%

  .text-input
    font-size: 22px

  .footer
    text-align: center


  </style>