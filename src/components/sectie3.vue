<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";





export default {
  name: "Sectie3",
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

    <div class="container-sectie3">
    
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
              <img class="rectangle-5" :src="rectangle5" alt="Rectangle 5"/>
              <img class="rectangle-6" :src="rectangle6" alt="Rectangle 6"/>
              <x-label :text1="xLabelProps.text1" :mensenGingenJeVoor="xLabelProps.mensenGingenJeVoor" />
            </div>


          </div>



         


    </div>
    
</template>


<style lang="sass">
@import '../../variables'


.container-sectie3
    max-width: 100vw

.overlap-group4
  align-items: flex-start
  background-color: $primary-dark-blue
  display: flex
  gap: 129px
  height: 820px
  margin-top: 102px
  // min-width: 1920px
  padding: 0 200px
  max-width: 100vw
  min-width: 100vw

// dit is de media die ervoor zorgt dat er ruimte is voor stap 3 in sectie 2




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
  // width: 531px

.frame-22-item
  letter-spacing: 0
  line-height: normal
  position: relative
  //width: 733px

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
  right: 70px

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

@media (max-width: 1700px)
  .overlap-group9
    display: none

  .overlap-group4
    width: 100vw


@media (max-width: 1200px)
  .overlap-group4
    margin-top: 450px

@media (max-width: 1000px)
  .overlap-group4
    margin-top: 100px
  
@media (max-width: 825px)
  .overlap-group4
    margin-top: 100px
    padding-left: 40px
    padding-right: 40px
    
  .frame-22
    zoom: 100%
    padding: 0

@media (max-width: 600px)
  .frame-22
    zoom: 60%
    margin-left: 30px

  .overlap-group4
    padding: 0
    height: 500px
    margin-top: 100px

</style>