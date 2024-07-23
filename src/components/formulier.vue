<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";



export default {
  name: "formulier",
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
        this.$router.push('./einde');
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
                





                <div class="formulier-container">


                    <p class="titel-formulier">Bedankt, start nu ook met besparen!</p>


                    <p class="subtitel-formulier">Ontvang gratis en vrijblijvend 3<br>
                        airconditionging offertes met persoonlijk<br>
                        advies van de beste partners/bedrijven uit jouw regio</p>


                    <p class="mensen-gingen-voor">Al meer dan 1,2 miljoen mensen ging je voor.</p>





                    <div class="form-container">
                        <form>
                          <div class="input-group">
                            <div class="input-item">
                              <label for="input1"></label>
                              <input class="input-voornaam" type="text" id="input1" placeholder="Voornaam">
                            </div>
                            <div class="input-item">
                              <label for="input2"></label>
                              <input class="input-achternaam" type="text" id="input2" placeholder="Achternaam">
                            </div>
                          </div>
                         <div class="input-group">
                          <div class="input-item">
                            <label for="input3"></label>
                            <input class="input-telefoonnummer" type="text" id="input3" placeholder="Telefoonnummer">
                          </div>
                          <div class="input-item">
                            <label for="input4"></label>
                            <input class="input-email" type="text" id="input4" placeholder="E-mailadres">
                          </div>
                         </div>
                          
                        </form>
                      </div>





                      <div class="volgende">
                        <button class="volgende-button" @click="navigateToNextPage">aanvraag afronden</button>
                      </div>
                     

                  <p class="footer-formulier">Je gegevens worden uitsluitend gebruikt om jou te voorzien van gratis,<br>persoonlijk advies en offertes van onze partners.<br>Dit is is volledig vrijblijvend, je zit dus nergens aan vast.</p>


                   
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



.formulier-container
  width: 68rem
  height: auto
  border-radius: 1.875rem
  background: #FFF
  margin-top: 4rem


.titel-formulier
  display: block
  width: 100%
  color: #1C1829
  text-align: center
  font-family: Catamaran
  font-size: 2.8125rem
  font-style: normal
  font-weight: 800
  line-height: 130%
  text-align: center
  margin-top: 2rem

.subtitel-formulier
  display: block
  width: 100%
  font-size: 32px
  color: #1C1829
  text-align: center
  font-family: Catamaran
  font-style: normal
  font-weight: 800
  line-height: 130%
  text-align: center
  margin-top: 2rem


.mensen-gingen-voor
  color: #FFCD02
  text-align: center
  leading-trim: both
  text-edge: cap
  font-family: Catamaran
  font-size: 0.9375rem
  font-style: normal
  font-weight: 600
  line-height: normal
  margin-top: 1rem
  margin-bottom: 2rem
  


// dit is voor het form zelf

.form-container 
  max-width: 600px
  margin: 0 auto
  padding: 20px


.form-container form 
  display: flex
  flex-direction: column
  gap: 20px


.input-group 
  display: flex
  gap: 20px

.input-item 
  flex: 1
  display: flex
  flex-direction: column

.input-item label 
  margin-bottom: 8px
  font-weight: bold

.input-item input 
  padding: 10px
  border: 1px solid #ccc
  border-radius: 4px



.input-voornaam, .input-achternaam, .input-telefoonnummer, .input-email
  height: 3.4rem
  width: 15rem





  











.volgende
  display: flex
  justify-content: center
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
  width:  33.5rem
  position: relative
  left: 1.5rem

.footer-formulier
  color: #000
  text-align: center
  font-family: Catamaran
  font-size: 1rem
  font-style: normal
  font-weight: 400
  line-height: normal
  padding: 2.5rem 25%
  margin-right: 15px
  padding-bottom: 4rem!important

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
  .achtergrond-vraag1
    zoom: 100%

  .overkoepelende-container
    zoom: 41%


@media (max-width: 500px)
  .overkoepelende-container
    zoom: 30%

  .achtergrond-vraag1
    height: 26rem!important

  .formulier-container
    padding-bottom: 1px
    height: 1060px





  .vraag
    margin-left: 3rem!important
    zoom: 110%!important

  .container-inputs
    margin-left: 3rem!important
  



  .overkoepelende-input-container
    display: block!important
  
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