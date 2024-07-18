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
  },
  data() {
    return {
// dit is voor afbeelding van buitenaf inladen.
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
    "onzeVakmensenGeven",
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



        <div class="frame-13">



          <h1 class="hou-je-huis-koel-met-airconditioning valign-text-bottom large-title-capitals">
            <span>
              <span class="span0-1 large-title-capitals">Hou je huis koel met<br></span>
              <span class="span1-1 large-title-capitals">airconditioning</span>
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

            <br>
            <br>
            <p class="controleer-nu-of-wij valign-text-bottom">Controleer nu of wij actief zijn in jouw regio:</p>
          </div>



          <div class="frame-14">
            <div class="frame-20">
              <label class="postcode-label" for="postcode-input"></label>
                <input id="postcode-input" type="text" class="postcode-input" placeholder="Postcode" />
                
              <!-- controleer knop en klaar binnen 1 minuut tekst -->
              <x-button :controleer="xButtonProps.controleer" />
            </div>
            <div class="klaar-binnen-1-minuut valign-text-bottom label-text">Klaar binnen 1 minuut</div>
          </div>



        </div>




        <!-- het zwarte bespaar tot 40% rondje met gele tekst --> 
        <div class="overlap-group">
          <p class="bespaar-tot-40-op-de-aanschafprijs valign-text-bottom catamaran-bold-supernova-22px" v-html="bespaarTot40OpDeAanschafprijs"></p>
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
            <div class="stap-3 valign-text-bottom large-title">{{ stap3 }}</div>
            <p class="onze-vakmensen-geven valign-text-bottom body-text">{{ onzeVakmensenGeven }}</p>
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


              <label class="postcode-label" for="postcode-input"></label>
              <input id="postcode-input" type="text" class="postcode-input" placeholder="Postcode" />



          </div>
          <router-link to="/vraag1">
            <div class="button-onder">
              <div class="controleer-beneden valign-text-bottom">
                <span class="centreer">Controleer</span>
              </div>
            </div>
          </router-link>        
        </div>
      </div>

      
      <p class="nederlandsadviesn valign-text-bottom">{{ nederlandsadviesN }}</p>
    </div>
  </div>
</template>



<style lang="sass">
@import '../../variables'

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




@media (max-width: 500px)
  .nederlandsadviesn
    zoom: 60%
    padding-bottom: 25px














</style>
