<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";
import progressiebalk from "./progressiebalk.vue";
import { addAntwoord, getAntwoorden } from "../antwoorden.js";

export default {
  name: "vraag1",
  components: {
    LogoNlAdviesAirco,
    progressiebalk,
  },
  props: {
    spanText1: String,
    spanText2: String,
    logoNLAdviesAircoProps: Object,  
  },
  data() {
    return {
      formData: {
        zip: localStorage.getItem('postcode') || '',
        house_number: '',
        street: '',
      },
      streets: JSON.parse(localStorage.getItem('straatnaam')) || [],
      currentPage: 1,
      error: '',
    };
  },
  methods: {
    navigateToNextPage() {
      // Validatie van house_number en street
      if (!this.formData.house_number || isNaN(this.formData.house_number)) {
        alert('Voer een geldig huisnummer in.');
        return;
      }
      if (!this.formData.street) {
        alert('Selecteer een straatnaam.');
        return;
      }

      // Voeg de antwoorden toe aan de antwoorden object
      addAntwoord({
        zip: this.formData.zip,
        house_number: this.formData.house_number,
        street: this.formData.street,
      });

      // Sla postcode, straatnaam en huisnummer op in localStorage
      localStorage.setItem('postcode', this.formData.zip);
      localStorage.setItem('straatnaam', JSON.stringify(this.streets));
      localStorage.setItem('huisnummer', this.formData.house_number);
      localStorage.setItem('selectedStreet', this.formData.street);

      // Voor debuggen, log de antwoorden naar de console
      console.log('Antwoorden na toevoegen:', getAntwoorden());

      // Navigeer naar de volgende vraag
      this.$router.push('/vraag2');
    }
  },
  mounted() {
    // Haal de straatnaam op bij het laden van de pagina als er een postcode is opgeslagen
    if (this.formData.zip) {
      this.fetchStreets();
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
        <progressiebalk :currentPage="currentPage" />
        <div class="vraag1-container">
          <div class="container-voor-gegevens">
            <div class="afbeelding-van-pijl">
              <router-link to="./CampagneStart.vue">
                <svg class="pijl-vraag1" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Arrows">
                    <path id="Vector" d="M0.570872 11.1186L11.0923 0.571695L13.8454 0.571695L13.8454 3.33452L6.65089 10.5469L30.0508 10.5469L32 12.4999L30.0508 14.4531L6.65089 14.4531L13.8454 21.6654L13.8454 24.4284L12.47 25L11.0923 24.4284L0.570872 13.8816L0.570872 11.1186Z" fill="#FFCD02"/>
                  </g>
                </svg>
              </router-link>
            </div>
            <div class="vraag-hoeveel">
              <p>Vraag 1 van 3</p>
            </div>
            <p class="vraag">Wat is jouw adres?</p>



            <div class="container-inputs">
              <div class="overkoepelende-input-container">
                <div class="input-container full-width-mobiel">
                  <label class="postcode-label" for="postcode-input"></label>
                  <input id="postcode-input" type="text" class="huisnr-input full-width-mobiel-vraag1" placeholder="Postcode" v-model="formData.zip" readonly>
                </div>
                <div class="input-container full-width-mobiel">
                  <label class="huisnr-label" for="huisnr-input"></label>
                  <input id="huisnr-input" type="text" class="huisnr-input full-width-mobiel-vraag1" placeholder="Huisnr." v-model="formData.house_number">
                </div>
                <div class="input-container full-width">
                  <label class="option-label" for="option-select"></label>
                  <select id="option-select" class="option-select" v-model="formData.street">
                    <option value="" disabled selected>Straatnaam</option>
                    <option v-for="street in streets" :key="street" :value="street">
                      {{ street }}
                    </option>
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
  // max-height: 60rem
  height: auto
  padding-bottom: 2rem
  width: 120rem
  max-width: 100vw


.overkoepelende-container
  display: flex
  flex-direction: column
  align-items: center
  gap: 1rem

.laadbalk
  margin: 0 auto
  width: 68rem
  height: 1.5rem
  position: relative
  top: 4rem
  border-radius: 2.5rem
  background: #F4F4F4!important

.geladen-gedeelte
  width: 22.6rem
  height: 1.5rem
  border-radius: 2.5rem
  background-color: #5DBA01
  animation: fadeIn 5s ease
  scroll-behavior: smooth

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


@media (max-width: 1150px)
  .overkoepelende-container
    zoom: 80%

@media (max-width: 900px)
  .overkoepelende-container
    zoom: 70%




@media (max-width: 800px)
  .overkoepelende-container
    zoom: 65%

@media (max-width: 720px)
  .overkoepelende-container
    zoom: 60%

@media (max-width: 680px)
  .overkoepelende-container
    zoom: 55%

@media (max-width: 630px)
  .overkoepelende-container
    zoom: 50%

@media (max-width: 560px)
  .overkoepelende-container
    zoom: 45%



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

  .geladen-gedeelte
    max-width: 40%


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
    margin-left: 3rem!important
    zoom: 110%!important

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
    font-size: 45px!important
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


  </style>