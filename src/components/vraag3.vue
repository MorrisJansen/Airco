<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";
import progressiebalk from "./progressiebalk.vue";
import { addAntwoord } from "../antwoorden.js";

export default {
  name: "vraag3",
  components: {
    LogoNlAdviesAirco,
    progressiebalk,
  },
  props: [
    "spanText1",
    "spanText2",
    "logoNLAdviesAircoProps",
  ],
  data() {
    return {
      currentPage: 3,
      totalPages: 3,
      selectedOption: '',
      weetIkNiet: false,
      opties: [
        { id: 5121, label: '1' },
        { id: 5124, label: '2' },
        { id: 5127, label: '3+' },
        { id: 5130, label: 'Weet ik niet' },
      ],
    };
  },
  methods: {
    navigateToNextPage() {
      let antwoordId;

      if (this.weetIkNiet) {
        antwoordId = 5130;
      } else if (this.selectedOption) {
        const numberValue = parseInt(this.selectedOption, 10);

        if (numberValue === 1) {
          antwoordId = 5121;
        } else if (numberValue === 2) {
          antwoordId = 5124;
        } else if (numberValue >= 3) {
          antwoordId = 5127;
        }
      }

      if (antwoordId) {
        addAntwoord('vraag3', { id: antwoordId });
        console.log(`Selected option for vraag3: ${antwoordId}`);
        this.$router.push('./formulier');
      } else {
        alert("Selecteer een optie of vink 'Weet ik niet' aan voordat je doorgaat.");
      }
    },
    handleEnter3(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.navigateToNextPage();
      }
  }  
},
 mounted() {
    window.addEventListener('keydown', this.handleEnter3);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleEnter3);
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
            :airconditioning="logoNLAdviesAircoProps.airconditioning"
          />
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
        <progressiebalk :currentPage="currentPage" :totalPages="totalPages" />

        <div class="vraag1-container">
          <div class="container-voor-gegevens">
            <div class="afbeelding-van-pijl">
              <router-link to="./vraag2">
                <svg class="pijl-vraag1" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Arrows">
                    <path id="Vector" d="M0.570872 11.1186L11.0923 0.571695L13.8454 0.571695L13.8454 3.33452L6.65089 10.5469L30.0508 10.5469L32 12.4999L30.0508 14.4531L6.65089 14.4531L13.8454 21.6654L13.8454 24.4284L12.47 25L11.0923 24.4284L0.570872 13.8816L0.570872 11.1186Z" fill="#FFCD02"/>
                  </g>
                </svg>
              </router-link>
            </div>
            <div class="vraag-hoeveel">
              <p>Vraag 3 van 3</p>
            </div>

            <p class="vraag3">
              In hoeveel ruimtes wil je
              <br class="mobiel"> de airconditioning
              <br class="mobiel"> installeren?
            </p>





            <div class="container-inputs">
              <div class="overkoepelende-input-container">
                <form>
                  <!-- Toegevoegd input veld voor cijfers 1 t/m 30 -->
                  <input
                    v-if="!weetIkNiet"
                    type="number"
                    min="1"
                    max="30"
                    class="input-vraag3"
                    v-model="selectedOption"
                    placeholder="Vul een getal in"
                  />
                </form>
              </div>
            </div>

            <!-- Checkbox voor 'Weet ik niet' -->
            <div class="checkbox-container">
              <input
                type="checkbox"
                id="weet-ik-niet"
                v-model="weetIkNiet"
              />
              <label class="weet-ik-niet" for="weet-ik-niet">Weet ik niet</label>
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



.weet-ik-niet
  position: relative
  bottom: 15px
  margin-left: 30px



.checkbox-container
  width: 100%
  font-size: 22px
  margin-left: 5rem
  font-family: catamaran



  input[type="checkbox"] 
    width: 3em
    height: 3rem
    accent-color: #FFCD02
  
  






  
.select-vraag3
  display: flex
  width: 32rem
  height: 3.4375rem
  padding: 0.3125rem 1.125rem
  align-items: center
  gap: 1.25rem
  border: 1px solid #E2E2E2
  background: #FFF
  font-size: 22px
  margin: 1rem 0
  border-radius: 4px
  color: grey

option
  color: grey




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

.geladen-gedeelte-vraag3
  width: 68rem!important
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





.input-vraag3
  display: flex
  width: 32rem
  height: 3.4375rem
  padding: 0.3125rem 1.125rem
  align-items: center
  gap: 1.25rem
  border: 1px solid #E2E2E2
  background: #FFF
  font-size: 22px
  margin: 1rem 0



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


.vraag3
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
  font-size: 1.36875rem!important
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
    max-width: 100vw!important
    height: 1.5rem
    position: relative
    top: 1rem!important
    border-radius: 2.5rem
    background: #FFF
    zoom: 290%

  .geladen-gedeelte-vraag3
    max-width: 100%


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

  .vraag3
    margin-left: 3rem!important
    zoom: 110%
    width: 70%

  .container-inputs
    margin-left: 3rem!important
  

  .input-container
    display: block
    margin-bottom: 30px


  .input-vraag3
    zoom: 220%
    max-width: 105%
    margin: 30px 0
    font-size: 22px

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


  .volgende
    margin-bottom: 50px

  .volgende-button
    width: 100%
    position: relative
    left: 50px
    padding-top: 30px!important
    padding-bottom: 30px!important
    font-size: 38px!important


  .footer
    text-align: center


  .mobiel
    display: none




  
  .weet-ik-niet
    position: relative
    bottom: 45px
    margin-left: 40px




  .checkbox-container
    width: 100%
    font-size: 42px
    margin-left: 5rem
    font-family: catamaran
    padding-bottom: 3rem



    input[type="checkbox"]  
      width: 7.5rem
      height: 7.5rem
      accent-color: #FFCD02
  </style>