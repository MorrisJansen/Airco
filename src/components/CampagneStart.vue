<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";
import XButton from "./XButton";
import Frame6 from "./Frame6";
import Group4 from "./Group4";
import XLabel from "./XLabel";
import XButton2 from "./XButton2";
import Navbar from './navbar.vue';
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
              <span class="tekst-zwart-navbar">{{ spanText1 }}</span><br>
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
                <p class="de-juiste-specialist valign-text-middle catamaran-bold-white-22px">De juiste specialisten voor gratis & vrijblijvend advies;</p>
              </div>

            </div>


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
            <img
              class="file-edit"
              src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/file--edit.svg"
              alt="File, edit"
            />
          </div>
        </div>
        <div class="overlap-group3">
          <div class="rectangle"></div>
          <group4 />
          <frame6
            :stap1="frame62Props.stap1"
            :controleerOfWijAc="frame62Props.controleerOfWijAc"
            :className="frame62Props.className"
          />
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


            <!-- <div class="frame-16-1"> -->
              <label class="postcode-label" for="postcode-input"></label>
              <input id="postcode-input" type="text" class="postcode-input" placeholder="Postcode" />
            <!-- </div> -->



          </div>
          <x-button2 :controleer="xButton2Props.controleer" />
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
  height: 2927px
  width: 1920px

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

















  


.container-sectie1
  width: 100vw



.overlap-group6
  align-items: center
  background-position: 50% 50%
  background-size: cover
  display: flex
  height: 794px
  // min-width: 1920px
  width: 100vw
  padding: 79px 54px






.layer_1
  height: 107px
  margin-top: 258.99px
  width: 93px

.frame-13
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 40px
  margin-bottom: 15.0px
  margin-left: 13px
  position: relative

.hou-je-huis-koel-met-airconditioning
  color: transparent
  font-weight: 800
  line-height: 65px
  margin-top: -1.00px
  position: relative
  width: 721px

.span0-1
  color: $white

.span1-1
  color: $primary-yellow

.frame-11
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 23px
  position: relative

.doe-de-woningscan-en-check
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.frame
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 6px
  position: relative

.frame-1
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  gap: 12px
  position: relative

.small-icons
  height: 24px
  position: relative
  width: 24px

.hoeveel-jij-kan-besp,
.de-best-beschikbare,
.de-juiste-specialist,
.controleer-nu-of-wij,
.verbeterde-luchtkwaliteit,
.betere-slaapkwaliteit,
.geluidsstil-de-spli
  letter-spacing: 0
  line-height: normal
  position: relative
  white-space: nowrap
  width: fit-content

.frame-14
  align-items: flex-end
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 10px
  position: relative

.frame-20
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  gap: 20px
  justify-content: center
  position: relative

//  .frame-16
//    align-items: center
//    background-color: $white
//    border: 1px solid
//    border-color: $bon-jour
//    display: flex
//    gap: 10px
//    height: 56px
//    padding: 5px 26px
//    position: relative
//    width: 235px

.postcode
  letter-spacing: 0
  line-height: normal
  position: relative
  width: fit-content

.postcode-input
  align-items: center
  background-color: $white
  border: 1px solid
  border-color: $bon-jour
  gap: 10px
  height: 66px
  width: 265px!important
  padding: 5px 26px
  position: relative
  left: -20px
  font-size: 22px

.postcode-input:placeholder 
  font-size: 22px
  color: black


.klaar-binnen-1-minuut
  color: $white
  font-weight: 600
  line-height: normal
  position: relative
  white-space: nowrap
  width: fit-content

.overlap-group
  align-items: flex-end
  align-self: flex-start
  background-color: $black
  border-radius: 98.5px
  display: flex
  height: 197px
  justify-content: flex-end
  margin-left: 34px
  min-width: 197px
  padding: 54px 14.1px

.bespaar-tot-40-op-de-aanschafprijs
  height: 87px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 169px

.frame-26
  align-items: center
  display: inline-flex
  flex-direction: column
  gap: 20px
  margin-right: 15.0px
  margin-top: 77px
  position: relative

.nederlandsadviesnl
  color: $primary-dark-blue
  font-weight: 600
  line-height: normal
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.hoe-werkt-het
  color: $primary-dark-blue
  font-family: $font-family-catamaran
  font-size: $font-size-xl
  font-weight: 800
  letter-spacing: 0
  line-height: 58.5px
  position: relative
  white-space: nowrap
  width: fit-content

.overlap-group-container
  align-items: flex-start
  display: flex
  margin-right: 13.0px
  margin-top: 84px
  min-width: 1159px

.overlap-group7
  height: 351px
  position: relative
  width: 362px

.rectangle
  background-color: $light-yellow
  height: 294px
  left: 0
  position: absolute
  top: 57px
  width: 362px

.group-3
  align-items: flex-end
  background-color: $primary-dark-blue
  border-radius: 59.5px
  display: flex
  height: 119px
  justify-content: flex-end
  left: 122px
  min-width: 119px
  padding: 23.5px 17.8px
  position: absolute
  top: 0

.file-edit
  height: 71px
  width: 71px

.overlap-group3
  height: 351px
  margin-left: 40px
  position: relative
  width: 362px

.overlap-group5
  height: 351px
  margin-left: 33px
  position: relative
  width: 362px

.frame-28
  align-items: center
  display: inline-flex
  flex-direction: column
  gap: 40px
  left: 44px
  position: absolute
  top: 173px

.stap-3
  color: $primary-dark-blue
  font-weight: 800
  line-height: 52.3px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.onze-vakmensen-geven
  color: $primary-dark-blue
  font-weight: 400
  line-height: normal
  position: relative
  text-align: center
  width: 275px

.overlap-group4
  align-items: flex-start
  background-color: $primary-dark-blue
  display: flex
  gap: 129px
  height: 820px
  margin-top: 102px
  min-width: 1920px
  padding: 126px 165px

.frame-22
  align-items: flex-start
  align-self: center
  display: inline-flex
  flex-direction: column
  gap: 40px
  margin-bottom: 61.0px
  position: relative

.waarom-airconditioning
  color: $white
  font-family: $font-family-catamaran
  font-size: $font-size-xl
  font-weight: 800
  letter-spacing: 0
  line-height: 58.5px
  margin-top: -1.00px
  position: relative
  width: 531px

.frame-22-item
  letter-spacing: 0
  line-height: normal
  position: relative
  width: 733px

.frame-29
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 10px
  position: relative

.overlap-group9
  height: 567px
  position: relative
  width: 679px

.rectangle-5
  height: 490px
  left: 0
  object-fit: cover
  position: absolute
  top: 0
  width: 408px

.rectangle-6
  height: 300px
  left: 273px
  object-fit: cover
  position: absolute
  top: 267px
  width: 406px

.frame-24
  align-items: center
  background-color: $light-yellow
  display: flex
  flex-direction: column
  gap: 10px
  height: 396px
  justify-content: center
  padding: 127px 158px
  position: relative
  width: 1920px

.frame-15
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  gap: 19px
  position: relative

.arrows
  height: 53.82px
  position: relative
  width: 41.86px

.controleer-of-wij-ac
  color: $black
  font-family: $font-family-catamaran
  font-size: $font-size-xl
  font-weight: 800
  letter-spacing: 0
  line-height: 58.5px
  position: relative
  white-space: nowrap
  width: fit-content

.frame-19
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  gap: 23px
  position: relative

.frame-18
  align-items: flex-start
  display: flex
  gap: 19px
  // height: 55px
  position: relative

.frame-16-1
  align-items: center
  background-color: $white
  border: 1px solid
  border-color: $bon-jour
  display: flex
  gap: 10px
  height: 55px
  padding: 5px 26px
  position: relative
  width: 249px

.nederlandsadviesn
  color: $black
  font-family: $font-family-catamaran
  font-size: $font-size-xs
  font-weight: 400
  height: 26px
  letter-spacing: 0
  line-height: normal
  margin-left: 13.0px
  margin-top: 53px
  min-width: 419px
</style>
