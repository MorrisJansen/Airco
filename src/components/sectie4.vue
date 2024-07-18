<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";





export default {
  name: "Sectie4",
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

    <div class="container-sectie4">
    
        <div class="frame-24">
            <div class="frame-15">
              <img class="arrows" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/arrows.svg" alt="Arrows"/>
              <p class="controleer-of-wij-ac valign-text-bottom">Controleer of wij actief zijn in jouw regio!</p>
            </div>
            <div class="frame-19">
              <div class="frame-18">
    
                  <label class="postcode-label" for="postcode-input"></label>
                  <input id="postcode-input" type="text" class="postcode-input" placeholder="Postcode" />
    
              </div>
              <router-link to="/vraag1">
                <div class="button-onder">
                  <div class="controleer valign-text-bottom">Controleer</div>
                </div>
              </router-link>           
            </div>
          </div>
                    


    </div> 

         
    
</template>


<style lang="sass">
@import '../../variables'


.container-sectie4
    max-width: 100vw

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
  //width: 1920px
  width: 100vw

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


@media (max-width: 1000px)
  .controleer-of-wij-ac
    zoom: 80%

@media (max-width: 800px)
  .controleer-of-wij-ac
    zoom: 70%


@media (max-width: 600px)
  .frame-15, .frame-19
    zoom: 60%


@media (max-width: 500px)
  .controleer-of-wij-ac
    zoom: 55%


  .button-onder
    height: 70px
    width: 80%
    background-color: black
    border-radius: 35px

  
  .controleer-beneden
    display: flex
    justify-content: center
    align-items: center
    vertical-align: center
    font-size: 30px
    color: $white
    margin-top: 1%!important
  
  
  
  </style>