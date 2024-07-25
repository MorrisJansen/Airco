<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";



export default {
  name: "analyse",
  components: {
    LogoNlAdviesAirco,

  },
  props: [
    "spanText1",
    "spanText2",
    "logoNLAdviesAircoProps",  
],
  methods: {
    navigateToNextPage() {
        this.$router.push('./analyse');
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


              <div class="witte-container">
                <p class="domeinnaam">Nederlandsadvies.nl</p>
                <p class="analyseert-gegevens">analyseert nu je gegevens...</p>




                <div class="laadbalk-analyse">
                  <div class="geladen-gedeelte-vraag-analyse">
                      <div class="procent">43%</div>
                  </div>
              </div>





              <ul class="lijst-analyse">
                <li class="lijst-items-analyse">Jouw woning komt in aanmerking voor airconditioning</li>
                <li class="lijst-items-analyse">Jij kunt besparen op je gasrekening met airconditioning</li>
                <li class="lijst-items-analyse">Wij hebben de juiste vakmannen beschikbaar voor jou</li>
                <li class="lijst-items-analyse">Bespaar tot 40% op de aanschaf</li>
              </ul>





              <p class='woningscan'>We sturen je nu door om de woningscan af te ronden...</p>



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
  gap: 6rem


.witte-container
  width: 68.125rem
  height: 37rem
  flex-shrink: 0
  border-radius: 1.875rem
  background: #FFF
  margin-top: 4rem
  


.domeinnaam
  font-size: 45px
  margin-top: 4rem
  color: #000
  text-align: center
  leading-trim: both
  text-edge: cap
  font-family: Catamaran
  font-size: 2.8125rem
  font-style: normal
  font-weight: 800
  line-height: 130%

.analyseert-gegevens
  font-size: 45px
  color: #000
  text-align: center
  font-family: Catamaran
  font-size: 2.8125rem
  font-style: normal
  font-weight: 800
  line-height: 130%  




.laadbalk-analyse
  margin: 0 auto
  width: 44rem
  height: 1.5rem
  border-radius: 2.5rem
  background: #f4f4f4
  margin-top: 2rem

.geladen-gedeelte-vraag-analyse
  height: 1.5rem
  border-radius: 2.5rem
  background-color: #5DBA01
  width: 20rem

.procent
  color: #FFF
  font-family: Catamaran
  font-size: 0.9375rem
  font-style: normal
  font-weight: 600
  line-height: normal
  display: flex
  justify-content: center



.lijst-analyse
  display: block
  padding-top: 3rem
  //position: relative
  //left: 30%
  list-style: inside
  font-family: Catamaran, sans-serif
  font-weight: 700
  margin-left: 30%


.lijst-items-analyse
  font-size: 20px
  margin: 10px 0


.woningscan
  margin-top: 4rem
  font-size: 35px
  font-family: Catamaran
  font-weight: 700
  text-align: center


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




@media (max-width: 800px)
  .overkoepelende-container
    zoom: 41%

@media (min-width: 500px)



@media (max-width: 500px)
  .overkoepelende-container
    zoom: 30%

  .achtergrond-vraag1
    height: 26rem!important

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

  .footer
    text-align: center


  </style>