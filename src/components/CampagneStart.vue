<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";
import XButton from "./XButton";
import Frame6 from "./Frame6";
import Group4 from "./Group4";
import XLabel from "./XLabel";
import XButton2 from "./XButton2";
import Navbar from './navbar.vue';
import Sectie1 from './sectie1.vue';
import sectie2 from "./sectie2.vue";
import sectie3 from "./sectie3.vue";
import sectie4 from "./sectie4.vue";

export default {
  name: "CampagneStart",
  components: {
    LogoNlAdviesAirco,
    XButton,
    Frame6,
    Group4,
    XLabel,
    XButton2,
    Navbar,
    Sectie1,
    sectie2,
    sectie3,
    sectie4,

  },
  data() {
    return {
      postcode: '',
      errorMessage: '',
      isModalVisible: false, 
      modalContent: '',
      isLoading: false,
    };
  },
  props: [
    "spanText1",
    "spanText2",
    "overlapGroup6",
    "spanText3",
    "spanText4",
    "doeDeWoningscanEnCheck",
    "hoeveelJijKanBesp",
    "deBestBeschikbare",
    "deJuisteSpecialist",
    "controleerNuOfWij",
    "klaarBinnen1Minuut",
    "bespaarTot40OpDeAanschafprijs",
    "nederlandsadviesNl",
    "hoeWerktHet",
    "stap3",
    "waaromAirconditioning",
    "airconditioningHee",
    "verbeterdeLuchtkwaliteit",
    "betereSlaapkwaliteit",
    "geluidsstilDeSpli",
    "bovendienIsEenAir",
    "rectangle5",
    "rectangle6",
    "controleerOfWijAc",
    "postcode2",
    "nederlandsadviesN",
    "logoNLAdviesAircoProps",
    "xButtonProps",
    "frame61Props",
    "frame62Props",
    "group4Props",
    "xLabelProps",
    "xButton2Props",
  ],
  methods: {
    checkPostcode() {
      const pattern = /^[1-9][0-9]{3}\s?[-]?[a-zA-Z]{2}$/;
      if (!pattern.test(this.postcode)) {
        this.errorMessage = 'Ongeldige postcode.';
        return false;
      }
      this.errorMessage = '';
      return true;
    },
    async fetchStreetByPostcode(postcode) {
      const authKey = 'P6JTU52clKYjZca8'; 
      const baseUrl = 'https://api.pro6pp.nl';
      const url = `${baseUrl}/v2/suggest/nl/street?postalCode=${postcode}&authKey=${authKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Authentication failed or no results found');
        }
        const data = await response.json();
        if (data.length > 0) {
          const streetNames = data.map(item => item.street);
          const city = data[0].settlement;
          localStorage.setItem('city', city); 
          return streetNames;
        } else {
          this.errorMessage = 'No results found';
          return [];
        }
      } catch (error) {
        this.errorMessage = error.message;
        return [];
      }
    },
    async handlePostcode() {
    const isValid = this.checkPostcode();
    if (isValid) {
      const streets = await this.fetchStreetByPostcode(this.postcode);
      if (streets.length > 0) {
        localStorage.setItem('postcode', this.postcode);
        localStorage.setItem('straatnaam', JSON.stringify(streets));
        if (streets.length === 1) {
          localStorage.setItem('selectedStreet', streets[0]);
        } else {
          localStorage.removeItem('selectedStreet');
        }

        this.city = localStorage.getItem('city');
        this.isLoading = true;

        setTimeout(() => {
          this.isLoading = false; 
          this.showCongratsModal = true;
          
          setTimeout(() => {
            this.showCongratsModal = false; 
            this.$router.push('/vraag1'); 
          }, 3000); 
        }, 3000); 
      }
    } else {
      console.error('Postcode niet geldig:', this.errorMessage);
    }
  },
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.handlePostcode();
      }
    },
    async openModal(url) {
      try {
        const response = await fetch(url);
        const content = await response.text();
        this.modalContent = content;
        this.isModalVisible = true;
      } catch (error) {
        console.error('Error fetching content:', error);
        this.modalContent = 'Sorry, de inhoud kon niet worden geladen.';
        this.isModalVisible = true;
      }
    },

    closeModal() {
      this.isModalVisible = false;
      this.modalContent = '';
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
};
</script>




<template>
  <div class="container-center-horizontal">
    <div class="campagne-start screen">




<!-- dit is de navbar -->
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





      


    <!-- sectie 1 (hou je huis koel met airconditioning) -->
    <!-- achtergrond afbeelding -->

    <div class="container-sectie1">



      <div class="overlap-group6" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">

        <!-- dit is de afbeelding van de pijl aan de linkerkant -->
        <img class="layer_1" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/layer-1.svg" alt="Layer_1"/>





        <div v-if="isLoading" class="loading-overlay">
          <div class="loading-modal">
            <p class="laadscherm-tekst">Even geduld aub...</p>
            <div class="spinner"></div>
          </div>
        </div>
  

        <div v-if="showCongratsModal" class="loading-overlay">
          <div class="loading-modal">
            <p class="laadscherm-tekst">Gefeliciteerd, wij zijn beschikbaar in <span class="groen">{{ city }}</span>!</p> <br>
            <p class="laadscherm-tekst" >We sturen je nu door...</p>
          </div>
        </div>
  
  


        <div class="frame-13">



          <h1 class="hou-je-huis-koel-met-airconditioning valign-text-bottom large-title-capitals">
            <span>
              <span class="span0-1 large-title-capitals">HOU JE HUIS KOEL MET<br></span>
              <span class="span1-1 large-title-capitals">AIRCONDITIONING</span>
            </span>
          </h1>




          <div class="frame-11 catamaran-bold-white-22px">
            <p class="doe-de-woningscan-en-check valign-text-bottom">Doe de woningscan en check:</p>
            <div class="frame">

              <div class="frame-1">
                <img class="small-icons" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg" alt="Small icons"/>
                <p class="hoeveel-jij-kan-besp valign-text-middle catamaran-bold-white-22px"> Hoeveel jij kan besparen op airconditioning;</p>
              </div>

              <div class="frame-1">
                <img class="small-icons" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg" alt="Small icons"/>
                <p class="de-best-beschikbare valign-text-middle catamaran-bold-white-22px">De best beschikbare offertes voor jouw woning;</p>
              </div>

              <div class="frame-1">
                <img class="small-icons" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg" alt="Small icons"/>
                <p class="de-juiste-specialist valign-text-middle catamaran-bold-white-22px">De juiste specialisten voor gratis & vrijblijvend<br class="desktop"> advies;</p>
              </div>

            </div>

            <p class="controleer-nu-of-wij valign-text-bottom">Controleer nu of wij actief zijn in jouw regio.</p>
          </div>



          <div class="frame-14">
            <div class="frame-20">
              <label class="postcode-label" for="postcode-input"></label>
              <input id="postcode-input" type="text" class="postcode-input" placeholder="Postcode" v-model="postcode" />
                

              <!-- controleer knop en klaar binnen 1 minuut tekst -->
              <x-button :controleer="controleer" @button-click="handlePostcode"></x-button>
            </div>
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
            <div class="klaar-binnen-1-minuut valign-text-bottom label-text">Klaar binnen 1 minuut</div>
          </div>



        </div>




        <!-- het zwarte bespaar tot 40% rondje met gele tekst --> 
        <div class="overlap-group">
          <p class="bespaar-tot-40-op-de-aanschafprijs valign-text-bottom catamaran-bold-supernova-22px text-in-zwart-bol" v-html="bespaarTot40OpDeAanschafprijs"></p>
        </div>



      </div>



    </div>

    







      <!-- dit is sectie 2  (hoe werkt het) -->


      <div class="frame-26">
        <div class="nederlandsadviesnl valign-text-bottom label-text">{{ nederlandsadviesNl }}</div>
        <div class="hoe-werkt-het valign-text-bottom">{{ hoeWerktHet }}</div>
      </div>




      <div class="overlap-group-container">
        <div class="overlap-group7">



          <div class="rectangle"></div>
          <frame6 :stap1="frame61Props.stap1" :controleerOfWijAc="frame61Props.controleerOfWijAc" />
          <div class="group-3">
            <img class="file-edit" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/file--edit.svg" alt="File, edit"/>
          </div>
        </div>



        <div class="overlap-group3">
          <div class="rectangle"></div>
          <group4 />
          <frame6 :stap1="frame62Props.stap1" :controleerOfWijAc="frame62Props.controleerOfWijAc" :className="frame62Props.className"/>
        </div>


        <div class="overlap-group5">
          <div class="rectangle"></div>
          <group4 :className="group4Props.className" />
          <div class="frame-28">
            <div class="stap-3 valign-text-bottom large-title titel-sectie2">{{ stap3 }}</div>
            <p class="onze-vakmensen-geven valign-text-bottom body-text tekst-sectie2">Onze vakmensen geven gratis  en vrijblijvend, persoonlijk advies</p>
          </div>
        </div>


      </div>








      
      <!-- dit is sectie 3 -->
      <div class="overlap-group4">
        <div class="frame-22">
          <div class="frame">
            <div class="waarom-airconditioning valign-text-bottom">{{ waaromAirconditioning }}</div>
          </div>
          <div class="frame-22-item valign-text-bottom catamaran-bold-white-22px">{{ airconditioningHee }}</div>
          <div class="frame-29">
            <div class="frame-1">
              <img
                class="small-icons"
                src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg"
                alt="Small icons"
              />
              <div class="verbeterde-luchtkwaliteit valign-text-middle catamaran-bold-white-22px">
                {{ verbeterdeLuchtkwaliteit }}
              </div>
            </div>
            <div class="frame-1">
              <img
                class="small-icons"
                src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg"
                alt="Small icons"
              />
              <div class="betere-slaapkwaliteit valign-text-middle catamaran-bold-white-22px">
                {{ betereSlaapkwaliteit }}
              </div>
            </div>
            <div class="frame-1">
              <img
                class="small-icons"
                src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg"
                alt="Small icons"
              />
              <p class="geluidsstil-de-spli valign-text-middle catamaran-bold-white-22px">{{ geluidsstilDeSpli }}</p>
            </div>
          </div>
          <p class="frame-22-item valign-text-bottom catamaran-bold-white-22px">{{ bovendienIsEenAir }}</p>
        </div>
        <div class="overlap-group9">
          <img class="rectangle-5" :src="rectangle5" alt="Rectangle 5" /><img
            class="rectangle-6"
            :src="rectangle6"
            alt="Rectangle 6"
          /><x-label :text1="xLabelProps.text1" :mensenGingenJeVoor="xLabelProps.mensenGingenJeVoor" />
        </div>
      </div>


      
      <div class="frame-24">
        <div class="frame-15">
          <img
            class="arrows"
            src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/arrows.svg"
            alt="Arrows"
          />
          <p class="controleer-of-wij-ac valign-text-bottom">{{ controleerOfWijAc }}</p>
        </div>


      <div class="frame-19">
    <div class="frame-18">
      <label class="postcode-label" for="postcode-input-2"></label>
      <input id="postcode-input-2" type="text" class="postcode-input-2" placeholder="Postcode" v-model="postcode" />
    </div>
        <button @click="handlePostcode" class="button donkere-button">
          <div class="controleer valign-text-bottom controleer-benenden" id="beneden-controleren">CONTROLEER</div>
        </button>

    <div v-if="errorMessage" class="error-message beneden-foutmelding">
      {{ errorMessage }}
    </div>
  </div>
  </div>

  
      
  <p class="nederlandsadviesn valign-text-bottom">
    <a href="https://nederlandsadvies.nl" target="_blank" class="footer-linkjes">
      © Nederlandsadvies.nl
    </a>
    <a @click.prevent="openModal('https://leadgen.republish.nl/api/content/solvari-voorwaarden')" class="footer-linkjes">
      | Algemene voorwaarden
    </a>
    <a @click.prevent="openModal('https://leadgen.republish.nl/api/content/solvari-privacy')" class="footer-linkjes">
      | Privacy policy
    </a>
  </p>

  <!-- Modal component -->
  <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">X</button>
      <div v-html="modalContent"></div>
    </div>
  </div>    </div>
  </div>
</template>



<style lang="sass">
@import '../../variables'


// dit is voor het laadscherm

.laadscherm-tekst
  font-size: 3.5rem
  font-family: Catamaran
  margin-bottom: 2rem
  font-weight: 700

.loading-overlay
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background-color: rgba(0, 0, 0, 0.5)
  display: flex
  align-items: center
  justify-content: center
  z-index: 10000

.loading-modal
  background-color: #fff
  padding: 7rem
  border-radius: 10px
  text-align: center
  width: 50%
  height: 50%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.spinner
  width: 50px
  height: 50px
  border: 5px solid black
  border-top: 5px solid white
  border-radius: 50%
  animation: spin 1s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)


// dit is voor de footer
.modal-overlay
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(0, 0, 0, 0.5)
  display: flex
  align-items: center
  justify-content: center
  z-index: 1000
  
.modal-content
  background: #fff
  padding: 1rem
  border-radius: 8px
  position: relative
  max-width: 90vw
  max-height: 80vh
  overflow: auto
  
.close-btn
  position: absolute
  top: 0.5rem
  right: 0.5rem
  border: none
  background: transparent
  font-size: 1.5rem
  cursor: pointer

.footer-linkjes
  text-decoration: none
  color: black



.beneden-foutmelding
  position: relative
  right: 60%!important
  top: 100%!important


.error-message-benenden
  font-family: catamaran!important
  font-size: 22px!important
  color: red!important


.campagne-start


  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  width: 100vw!important
  max-width: 100vw
  min-width: 100vw
  // height: 2927px
  // width: 1920px

.flex-row
  align-items: center
  align-self: flex-start
  display: flex
  min-width: 1761px

.overlap-group8
  align-items: flex-end
  background-color: $primary-dark-blue
  display: flex
  height: 118px
  min-width: 960px
  padding: 26px 159px
  position: relative

.besparen-op-aircondi
  color: transparent
  font-family: $font-family-catamaran
  font-size: $font-size-m
  font-weight: 700
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-top: 9.0px
  min-width: 316px
  text-align: right

.span0
  color: $black

.nederlandsadviesn
  padding-bottom: 1.5rem


.text-in-zwart-bol
  position: relative
  top: 11px



.error-message 
  position: relative
  right: 310px
  top: 33px
  color: red
  font-size: 22px
  font-weight: bold
  font-family: 'Catamaran'
@media (min-width: 2000px)
  .nederlandsadviesn
    zoom: 150%

@media (max-width: 500px)
  .nederlandsadviesn
    zoom: 60%
    padding-bottom: 25px














</style>
