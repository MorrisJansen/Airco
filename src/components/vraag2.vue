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
        this.$router.push('./vraag3');
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
                    <div class="geladen-gedeelte-vraag2">
                        <div class="procent">66%</div>
                    </div>
                </div>


                <div class="vraag1-container">
                    <div class="container-voor-gegevens">


                    <div class="afbeelding-van-pijl">
                      <router-link to="./vraag1">
                        <svg class="pijl-vraag1" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Arrows">
                                <path id="Vector" d="M0.570872 11.1186L11.0923 0.571695L13.8454 0.571695L13.8454 3.33452L6.65089 10.5469L30.0508 10.5469L32 12.4999L30.0508 14.4531L6.65089 14.4531L13.8454 21.6654L13.8454 24.4284L12.47 25L11.0923 24.4284L0.570872 13.8816L0.570872 11.1186Z" fill="#FFCD02"/>
                            </g>
                        </svg>
                      </router-link>
                    </div>
                    <div class="vraag-hoeveel">
                        <p>Vraag 2 van 3</p>
                    </div>


                     <p class="vraag2">Welk type airco ben je in geïnteresseerd?</p>


                     <div class="container-inputs">
                        <div class="overkoepelende-input-container">


                          <form>

                            <router-link class="links-naar-vraag3" to="./vraag3">
                            <label class="radio-input">
                                <input type="radio" name="options" value="Option 1" v-model="selectedOption">
                                <svg class="gele-rondje" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle id="Ellipse 5" cx="9" cy="9.5" r="9" fill="#FFCD02"/>
                                </svg>
                                <span class="text-input">
                                  Vaste airco met buitenunit (split airco)
                                </span>
                            </label>
                          </router-link>


                            <router-link class="links-naar-vraag3" to="./vraag3">
                            <label class="radio-input">
                                <input type="radio" name="options" value="Option 2" v-model="selectedOption">
                                <svg class="gele-rondje" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle id="Ellipse 5" cx="9" cy="9.5" r="9" fill="#FFCD02"/>
                                </svg>
                                <span class="text-input">
                                  Vaste airco zonder buitenunit (monoblock)
                                </span>
                            </label>
                          </router-link>


                            <router-link class="links-naar-vraag3" to="./vraag3">
                            <label class="radio-input">
                                <input type="radio" name="options" value="Option 3" v-model="selectedOption">
                                <svg class="gele-rondje" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle id="Ellipse 5" cx="9" cy="9.5" r="9" fill="#FFCD02"/>
                                </svg>
                                <span class="text-input">
                                  Ik wil graag advies
                                </span>

                            </label>
                          </router-link>
                          </form>
                            


                        </div>
                      </div>




                      <!-- <div class="volgende">
                        <button class="volgende-button" @click="navigateToNextPage">Volgende</button>
                      </div> -->
                     
                  

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
  // max-height: 60rem
  height: auto
  padding-bottom: 2rem
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

.geladen-gedeelte-vraag2
  width: 45.2rem
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





.radio-input
  display: flex
  width: 32rem
  height: 4.6rem
  padding: 0.3125rem 1.625rem
  align-items: center
  gap: 1.25rem
  border: 1px solid #E2E2E2
  background: #FFF
  margin-bottom: 1rem

.radio-input:hover
  cursor: pointer

.links-naar-vraag3
  text-decoration: none

.radio-input:first-child
  margin-top: 1rem


.radio-input input[type="radio"] 
    display: none






.text-input
  color: #000
  font-family: Catamaran, sans-serif
  font-size: 1.125rem
  font-style: normal
  font-weight: 400
  line-height: normal
  



.vraag1-container
  width: 68rem
  height: 592px
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
  margin-top: 3rem!important
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
    background: #FFF
    zoom: 290%

  .geladen-gedeelte-vraag2
    max-width: 70%


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
    padding: .3125rem 1.1rem

  .text-input
    font-size: 22px



//  .volgende
//    margin-bottom: 50px

//  .volgende-button
//    width: 100%
//    position: relative
//    left: 50px
//    padding-top: 30px!important
//    padding-bottom: 30px!important
//    font-size: 38px!important


  .footer
    text-align: center


  </style>