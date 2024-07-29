<template>
  <div>
    <!-- navbar -->
    <div class="navbar">
      <div class="container-links">
        <div class="container-advies-logo">
          <logo-nl-advies-airco
            :nederlandsadviesNl="logoNLAdviesAircoProps.nederlandsadviesNl"
            :airconditioning="logoNLAdviesAircoProps.airconditioning"
          />
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
          <p class="subtitel-formulier">
            Ontvang gratis en vrijblijvend 3<br>
            airconditioning offertes met persoonlijk<br>
            advies van de beste partners/bedrijven uit jouw regio
          </p>
          <p class="mensen-gingen-voor">Al meer dan 1,2 miljoen mensen ging je voor.</p>
          <div class="form-container">
            <form>
              <div class="input-group">
                <div class="input-item">
                  <label for="input-voornaam"></label>
                  <input class="input-voornaam" v-model="formData.firstname" type="text" id="input-voornaam" placeholder="Voornaam">
                </div>
                <div class="input-item">
                  <label for="input-achternaam"></label>
                  <input class="input-achternaam" v-model="formData.lastname" type="text" id="input-achternaam" placeholder="Achternaam">
                </div>
              </div>
              <div class="input-group">
                <div class="input-item">
                  <label for="input-telefoon"></label>
                  <input class="input-telefoon" v-model="formData.phone_number" type="text" id="input-telefoon" placeholder="Telefoonnummer">
                </div>
                <div class="input-item">
                  <label for="input-email"></label>
                  <input class="input-email" v-model="formData.email" type="text" id="input-email" placeholder="E-mailadres">
                </div>
              </div>
            </form>
          </div>
          <div class="volgende-formulier">
            <button class="volgende-button-formulier" @click="afronden">Aanvraag afronden</button>
          </div>
          <p class="footer-formulier">Je gegevens worden uitsluitend gebruikt om jou te voorzien van gratis,<br>persoonlijk advies en offertes van onze partners.<br>Dit is volledig vrijblijvend, je zit dus nergens aan vast.</p>
        </div>
      </div>
    </div>
    <p class="footer">© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy</p>
  </div>
</template>

<script>
import { getAntwoorden } from "../antwoorden";
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";

export default {
  name: "formulier",
  components: {
    LogoNlAdviesAirco,
  },
  data() {
    return {
      formData: {
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        street: sessionStorage.getItem('street') || '',
        house_number: sessionStorage.getItem('house_number') || '',
        city: 'Rotterdam',
        zip: sessionStorage.getItem('zip') || '',
        answers: [5109,]
      }
    };
  },
  props: [
    "spanText1",
    "spanText2",
    "logoNLAdviesAircoProps",
  ],
  mounted() {
    const antwoordenData = getAntwoorden();
    antwoordenData.forEach(answer => {
      if (answer.question === 'vraag1') {
        this.formData.street = answer.street || this.formData.street;
        this.formData.house_number = answer.house_number || this.formData.house_number;
        this.formData.zip = answer.zip || this.formData.zip;
      }
      if (answer.question === 'vraag2' || answer.question === 'vraag3') {
        this.formData.answers.push(answer.id);
      }
    });

    console.log("Antwoorden:", this.formData.answers);
  },
  methods: {
    afronden() {
      const username = '185';
      const password = 'ab8221d4a3170d89542880459abf79817ae367c2';
      const authHeader = 'Basic ' + btoa(username + ':' + password);
      const apiUrl = 'https://leadgen.republish.nl/api/sponsors/2394/leads';

      const answers = [
        ...this.formData.answers,
      ];

      const now = new Date();

      now.setHours(now.getHours() + 2);

      const optinTimestamp = now.toISOString().slice(0, 19).replace('T', ' ');

      const leadData = {
        language: 'nl_NL',
        publisher_id: 'Morris de publisher :)',
        site_subid: 'id=5',
        site_custom_url: 'http://yourwebsite.com',
        site_custom_name: 'Airco',
        ip: 'userIPAddress',
        optin_timestamp: optinTimestamp,
        firstname: this.formData.firstname,
        lastname: this.formData.lastname,
        email: this.formData.email,
        gender: 'male',
        house_number: this.formData.house_number,
        street: this.formData.street,
        city: this.formData.city,
        zip: this.formData.zip,
        phone_number: this.formData.phone_number,
        answers: answers
      };

      console.log('Preparing to send the following data to the API:');
      console.log('API URL:', apiUrl);
      console.log('Authorization Header:', authHeader);
      console.log('Lead Data:', leadData);

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      })
      .then(response => {
        console.log('Response Status:', response.status);
        return response.json();
      })
      .then(responseData => {
        console.log('API Response Data:', responseData);

        if (responseData.status === 201) {
          console.log('Lead successfully created.');
          this.$router.push('./einde');
        } else if (responseData.status === 400) {
          console.log('Bad request. Please check the parameters.');
        } else if (responseData.status === 401) {
          console.log('Unauthorized. Please check your credentials.');
        } else {
          console.log('Unexpected error:', responseData.status);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
};
</script>



  

  
  <style lang="sass">
  @import '../../variables'













.achtergrond-vraag1
  background-color: #FFE758
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



.input-voornaam, .input-achternaam, .input-telefoon, .input-email
  height: 3.4rem
  width: 15rem





  











.volgende-formulier
  display: flex
  justify-content: center
  margin-right: 5rem
  margin-top: 1rem


.volgende-button-formulier
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