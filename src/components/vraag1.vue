<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";



export default {
  name: "vraag1",
  components: {
    LogoNlAdviesAirco,

  },
  props: [
    "spanText1",
    "spanText2",
    "logoNLAdviesAircoProps",  
],
  methods: {
    navigateToNextPage() {
        this.$router.push('./vraag2');
    }
  }
};
</script>



<template>
    <div>

    <!-- navbar -->
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
            <span class="tekst-zwart-navbar">{{ spanText1 }}</span>
            <span class="tekst-geel-navbar">{{ spanText2 }}</span>
          </div>
        </div>
    </div>



        <div class="achtergrond-vraag1">
            <div class="overkoepelende-container">
                <div class="laadbalk">
                    <div class="geladen-gedeelte">
                        <div class="procent">33%</div>
                    </div>
                </div>


                <div class="vraag1-container">
                    <div class="container-voor-gegevens">


                    <div class="afbeelding-van-pijl">
                        <svg class="pijl-vraag1" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Arrows">
                                <path id="Vector" d="M0.570872 11.1186L11.0923 0.571695L13.8454 0.571695L13.8454 3.33452L6.65089 10.5469L30.0508 10.5469L32 12.4999L30.0508 14.4531L6.65089 14.4531L13.8454 21.6654L13.8454 24.4284L12.47 25L11.0923 24.4284L0.570872 13.8816L0.570872 11.1186Z" fill="#FFCD02"/>
                            </g>
                        </svg>
                    </div>
                    <div class="vraag-hoeveel">
                        <p>Vraag 1 van 3</p>
                    </div>


                     <p class="vraag">Wat is jouw adres?</p>


                     <div class="container-inputs">
                        <div class="overkoepelende-input-container">

                            
                          <div class="input-container full-width-mobiel">
                            <label class="postcode-label " for="postcode-input"></label>
                            <input id="postcode-input" type="text" class="huisnr-input full-width-mobiel-vraag1" placeholder="Postcode">
                          </div>
                  
                          <div class="input-container full-width-mobiel">
                            <label class="huisnr-label" for="huisnr-input"></label>
                            <input id="huisnr-input" type="text" class="huisnr-input full-width-mobiel-vraag1" placeholder="Huisnr.">
                          </div>
                  
                          <div class="input-container full-width">
                            <label class="option-label" for="option-select"></label>
                            <select id="option-select" class="option-select">
                              <option value="" disabled selected>Straatnaam</option>
                              <option value="option1">Optie 1</option>
                              <option value="option2">Optie 2</option>
                              <option value="option3">Optie 3</option>
                            </select>
                          </div>


                        </div>
                      </div>



                      <div class="volgende">
                        <button class="volgende-button" @click="navigateToNextPage">Volgende</button>
                      </div>
                     
                  

                    </div>

                    <div class="container-afbeelding-desktop">
                      <img id="afbeelding-border-desktop" class="afbeelding-border-desktop" src="./vraag1-afbeelding.png" alt="">
                    </div>

                    <div class="container-afbeelding-mobiel">
                      <img id="afbeelding-mobiel" class="afbeelding-mobiel" src="./firstQuestion.png" alt="afbeelding mobiel">
                    </div>
                   
                </div>


           </div>
        </div>


        <p class="footer">© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy</p>






</div>



  </template>
  

  
  <style lang="sass">
  @import '../../variables'













.achtergrond-vraag1
  background-color: #FFE758
  max-height: 60rem
  width: 120rem
  max-width: 100vw


.overkoepelende-container
  display: flex
  flex-direction: column
  align-items: center
  gap: 6rem

.laadbalk
  margin: 0 auto
  width: 68rem
  height: 1.5rem
  position: relative
  top: 4rem
  border-radius: 2.5rem
  background: #FFF

.geladen-gedeelte
  width: 22.6rem
  height: 1.5rem
  border-radius: 2.5rem
  background-color: #5DBA01

.procent
  color: #FFF
  leading-trim: both
  text-edge: cap
  font-family: Catamaran
  font-size: 0.9375rem
  font-style: normal
  font-weight: 600
  line-height: normal
  display: flex
  justify-content: center









.vraag1-container
  width: 68rem
  height: auto
  border-radius: 1.875rem
  background: #FFF
  gap: 2rem
  display: flex

.container-voor-gegevens
  width: 65%
  height: 100%


.afbeelding-van-pijl
  height: 2rem
  width: 1.5625rem
  display: block
  margin-top: 7.5rem
  margin-left: 5rem

.vraag-hoeveel
  color: #FFCD02
  leading-trim: both
  text-edge: cap
  font-family: Catamaran
  font-size: 1.375rem
  font-style: normal
  font-weight: 700
  line-height: normal
  margin-left: 5rem


.vraag
  color: #000
  font-family: Catamaran
  font-size: 2.8125rem
  font-style: normal
  font-weight: 800
  line-height: 130%
  display: block!important
  margin-left: 5rem
  width: 100%!important

  






.container-inputs
  margin-left: 5rem
  max-width: 36rem

.overkoepelende-input-container
  display: flex
  flex-wrap: wrap
  max-width: 36rem
  gap: 1rem

.input-container
  display: flex
  flex-direction: column
  width: 15.5rem

.postcode-input-vraag, .huisnr-input
  width: 100%
  height: 3.4rem
  padding: 0.5rem
  border: 1px solid $bon-jour
  border-radius: 0.25rem
  font-family: $font-family-catamaran
  font-size: 1rem
  color: $primary-dark-blue

.option-select
  width: calc(15.5rem * 2 + 1rem)
  height: 3.4rem
  padding: 0.5rem
  border: 1px solid $bon-jour
  border-radius: 0.25rem
  font-family: $font-family-catamaran
  font-size: 1rem
  color: grey

.postcode-label, .huisnr-label, .option-label
  margin-bottom: 0.5rem
  font-family: $font-family-catamaran
  font-size: 1rem
  color: $primary-dark-blue




.volgende
  display: flex
  justify-content: end
  margin-right: 5rem
  margin-top: 1rem


.volgende-button
  display: flex
  padding: 0.5rem 2.8rem
  justify-content: center
  align-items: center
  gap: 0.625rem
  border-radius: 3.75rem
  background: #FFCD02
  color:  #1C1829
  font-family: Catamaran
  font-size: 1.36875rem
  font-style: normal
  font-weight: 800
  line-height: normal
  text-transform: uppercase
  border: none
  cursor: pointer













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




@media (max-width: 800px)
  .achtergrond-vraag1
    zoom: 100%

  .overkoepelende-container
    zoom: 41%

@media (min-width: 500px)
  .container-afbeelding-mobiel
    display: none


@media (max-width: 500px)
  .overkoepelende-container
    zoom: 30%

  .achtergrond-vraag1
    height: 30rem!important

  .vraag1-container
    padding-bottom: 1px


  .pijl-vraag1
    zoom: 300%


  .vraag-hoeveel
    margin-left: 3rem!important
    zoom: 210%
    display: block
    padding: 10px 0
    margin-top: 15px
    position: relative
    right:  10px

  .vraag
    margin-left: 3rem!important
    zoom: 150%

  .container-inputs
    margin-left: 3rem!important
  

  .input-container
    display: block
    margin-bottom: 30px

  .overkoepelende-input-container
    display: block!important
  
  .full-width-mobiel
    width: 170vw!important


  .huisnr-input, .option-select
    height: 150px!important

  .full-width-mobiel-vraag1, .option-select
    font-size: 42px!important
    padding-left: 20px
    background-color: white

  .option-select
    width: 246.5% !important


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
    top: 15px
    right: 25px


  .volgende
    margin-bottom: 50px


  </style>