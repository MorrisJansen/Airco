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
                  <input id="postcode-input" type="text" class="postcode-input-2" placeholder="Postcode" />
    
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
  gap: 23px
  // position: relative
  // width: 90vw
  left: 180px
  margin: 0
  padding: 0

.frame-18
  align-items: flex-start
  display: flex
  gap: 19px
  // height: 55px
  position: relative

.button-onder
  padding-left: 150px
  padding-right: 150px

.centreer
  font-size: 26px
  margin-top: 17px!important

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


.postcode-input-2
  border-radius: 5px


@media (min-width: 2000px)
  .frame-24
    zoom: 150%


@media (min-width: 1000px)
  .button-onder
    height: 60px
    width: 20%
    background-color: black
    border-radius: 35px

  .controleer-beneden
    align-items: center
    font-size: 20px
    color: $white
    margin: auto 0

  .centreer
    display: flex
    justify-content: center
    align-items: center
    margin-top: 20px
    font-family: $font-family-catamaran
    font-weight: bold

  .postcode-input-2
    align-items: center
    background-color: $white
    border: 1px solid
    border-color: $bon-jour
    gap: 10px
    height: 56px
    padding: 5px 26px
    font-size: 22px
    width: 80%!important
    margin-left: 100px




@media (max-width: 1000px)


  .frame-15, .frame-19
    zoom: 80%

  .controleer-of-wij-ac
    zoom: 80%



  .button-onder
    height: 60px
    width: 20%
    background-color: black
    border-radius: 35px

  .controleer-beneden
    align-items: center
    font-size: 20px
    color: $white
    margin: auto 0

  .centreer
    display: flex
    justify-content: center
    align-items: center
    margin-top: 20px
    font-family: $font-family-catamaran
    font-weight: bold

  .postcode-input-2
    align-items: center
    background-color: $white
    border: 1px solid
    border-color: $bon-jour
    gap: 10px
    height: 56px
    padding: 5px 26px
    font-size: 22px
    width: 80%!important
    margin-left: 100px

@media (max-width: 800px)
  .controleer-of-wij-ac
    zoom: 70%


@media (max-width: 600px)
  .frame-15, .frame-19
    zoom: 57%


@media (max-width: 500px)


  .postcode-input-2
    padding: 50px 10px
    margin-bottom: 30px
    width: 93%
    position: relative
    right: 24px
    font-size: 60px
    .controleer-of-wij-ac
    zoom: 52%


  .button-onder
    height: 100px
    width: 95%
    background-color: black
    border-radius: 60px

  
  .controleer-beneden
    align-items: center
    font-size: 40px
    color: $white
    margin: auto 0

  .centreer
    display: flex
    justify-content: center
    align-items: center
    margin-top: 35px!important
    font-size: 34px
    font-family: $font-family-catamaran
    font-weight: bold

  .frame-15
    zoom: 50%
  
  .frame-18
    width: 660px
    right: 50px

  .postcode-input-2
    zoom: 62%
    right: 41px
    width: 76%!important
  
  </style>