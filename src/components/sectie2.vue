<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";





export default {
  name: "Sectie2",
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

    <div>
    
    <div class="frame-26">
        <div class="nederlandsadviesnl valign-text-bottom label-text">{{ nederlandsadviesNl }}</div>
        <div class="hoe-werkt-het valign-text-bottom">{{ hoeWerktHet }}</div>
      </div>





                    
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
                              <p class="onze-vakmensen-geven valign-text-bottom body-text tekst-sectie2">Onze vakmensen geven gratis en vrijblijvend, persoonlijk advies</p>
                            </div>
                        </div>
                    



         


      </div>
    
</template>


<style lang="sass">
@import '../../variables'


.titel-sectie2
  position: relative
  top: -25px



.tekst-sectie2
  position: relative!important
  top: -40px!important

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
  // min-width: 1159px
  max-width: 100vw

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



@media (min-width: 2000px)
  .frame-26, .overlap-group-container
    zoom: 150%!important



@media (max-width: 1200px)
    .overlap-group7, .overlap-group3
        margin-left: 16%
        
    .overlap-group5
        position: relative
        top: 425px
        right: 43%

@media (max-width: 1000px)
  .overlap-group-container
    flex-direction: column
    align-items: center
      
  .overlap-group7, .overlap-group3, .overlap-group5
    position: relative
    left: 50%
    transform: translateX(-50%)
    top: 0
    margin-top: 20px

  .overlap-group5
    position: relative
    left: 53%
    transform: translate(-50%)


@media (max-width: 500px)
  .overlap-group-container
    flex-direction: column
    align-items: center
    margin: 0!important
    gap: 20px

  .overlap-group7, .overlap-group3, .overlap-group5
    margin-top: 20px
    margin: 0 auto
    zoom: 70%

  .hoe-werkt-het
    zoom: 80%


  .overlap-group5
    position: absolute
    top: 2025px
    left: 50%

  .frame-26
    margin-top: 120px




  

</style>