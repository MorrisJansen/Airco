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

            br
            <p class="controleer-nu-of-wij valign-text-bottom">Controleer nu of wij actief zijn in jouw regio:</p>
          </div>



          <div class="frame-14">
            <div class="frame-20">
              <label class="postcode-label" for="postcode-input1"></label>
                <input id="postcode-input postcode-input1" type="text" class="postcode-input" placeholder="Postcode" />
                
              <!-- controleer knop en klaar binnen 1 minuut tekst -->
              <x-button :controleer="xButtonProps.controleer" class="postcode-button" />
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
    
</template>


<style lang="sass">
@import '../../variables'





.container-sectie1
  width: 100vw



.overlap-group6
  align-items: center
  background-position: 50% 50%
  background-size: cover
  display: flex
  height: 794px
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
  // width: 265px!important
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







@media (max-width: 1150px)
  .overlap-group
    position: relative
    right: 10%



@media (max-width: 1050px)
  .frame-13
    width: 100vw
    zoom: 90%

  .overlap-group6
    min-width: 100%!important
    zoom: 95%


  .overlap-group
    zoom: 90%


@media (max-width: 900px)
  .frame-13
    zoom: 90%

  .overlap-group
    zoom: 70%

  .overlap-group6
    zoom: 90%

@media (max-width: 800px)
  .frame-13
    zoom: 85%
    
  .overlap-group6
    zoom: 85%

  .overlap-group
    zoom: 60%




@media (max-width: 700px)
  .frame-13
    margin: 0 auto
    zoom: 90%

  .overlap-group
    zoom: 60%
    position: relative
    bottom: 50px

  .hou-je-huis-koel-met-airconditioning
    zoom: 80%

@media (max-width: 640px)
  .frame-13
    zoom: 85%

  .overlap-group
    zoom: 50%
    position: relative
    right: 200px


@media (max-width: 550px)
  .overlap-group
    position: relative
    right: 200px
    top: 150px

  .overlap-group6
    padding: 0
  
  .frame-13
    zoom: 78%


@media (max-width: 500px)
  .frame-13
    zoom: 60%
    position: relative
    top: -80px
    margin-left:  20px
    padding: 0 20px

  .frame-20
    margin-left: 20px

  .layer_1
    position: relative
    top: -90px
    right: -750px
    padding-left: 0px
    zoom: 50%
    transform: scaleX(-1)
    display: none


  .frame-11
    zoom: 120%

  .button
    width: 109%
    position: relative
    right: 10px


  .overlap-group
    position: relative
    top: 82%
    right: 38%
    zoom: 100%

  
  .overlap-group6
    height: 650px



  .container-rechts
    display: none

  .container-links
    width: 100vw

  .container-advies-logo
    zoom: 90%


  .frame-20, .frame-19
    display: block!important
    width: 150vw!important
    height: 200px

  .postcode-input
    width: 110%!important
    height: 5rem!important
    margin-bottom: 40px!important
    display: block!important
    font-size: 30px!important

  .postcode-input::placeholder
    padding-top: 18px!important
    font-size: 30px!important
    line-height: 55px!important
    position: relative!important
    top: 3px!important

  .bespaar-tot-40-op-de-aanschafprijs
    position: relative
    top: 8px

</style>