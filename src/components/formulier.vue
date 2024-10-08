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
        gender: '', // Zorg ervoor dat dit correct wordt bijgehouden
        street: localStorage.getItem('selectedStreet') || '',
        house_number: localStorage.getItem('huisnummer') || '',
        city: localStorage.getItem('city') || '',
        zip: localStorage.getItem('postcode') || '',
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        gender: '', // Voeg een foutbericht toe voor gender indien nodig
      }
    };
  },
  props: [
    "spanText1",
    "spanText2",
    "logoNLAdviesAircoProps",
    "antwoorden",
  ],
  mounted() {
    const antwoordenData = getAntwoorden();
    if (antwoordenData && antwoordenData.vraag1) {
      this.formData.street = antwoordenData.vraag1.street || this.formData.street;
      this.formData.house_number = antwoordenData.vraag1.house_number || this.formData.house_number;
      this.formData.zip = antwoordenData.vraag1.zip || this.formData.zip;
    }
  },
  methods: {
    validateGender() {
      if (!this.formData.gender) {
        this.errors.gender = 'Selecteer een geslacht.';
        return false;
      }
      this.errors.gender = '';
      return true;
    },
    validateFirstname() {
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.firstname.match(regex)) {
        this.errors.firstname = 'Ongeldige voornaam. Gebruik alleen letters, spaties en leestekens.';
        return false;
      }
      this.errors.firstname = '';
      return true;
    },
    validateLastname() {
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.lastname.match(regex)) {
        this.errors.lastname = 'Ongeldige achternaam. Gebruik alleen letters, spaties en leestekens.';
        return false;
      }
      this.errors.lastname = '';
      return true;
    },
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const containsApostrophe = /'/;

      if (!this.formData.email.match(regex) || this.formData.email.match(containsApostrophe)) {
        this.errors.email = 'Ongeldig e-mailadres.';
        return false;
      }

      this.errors.email = '';
      return true;
    },
    validateAndFormatPhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9+]/g, '');

      const dutchRegex = /^(06[0-9]{8}|[+]{0,1}31[0]?[0-9]{9,10}|0031[0]?[0-9]{9,10})$/;
      
      if (!phoneNumber.match(dutchRegex)) {
        console.error('Ongeldig telefoonnummer');
        return null;
      }

      phoneNumber = phoneNumber.replace(/^0+/, '');

      if (phoneNumber.startsWith('0') && (phoneNumber.length === 10 || phoneNumber.length === 11)) {
        phoneNumber = '+31' + phoneNumber.substring(1);
      } else if (phoneNumber.startsWith('6') && phoneNumber.length === 9) {
        phoneNumber = '+31' + phoneNumber;
      } else if (phoneNumber.startsWith('31') && phoneNumber.length === 11) {
        phoneNumber = '+' + phoneNumber;
      } else if (phoneNumber.startsWith('+31')) {
      } else if (phoneNumber.startsWith('0031')) {
        phoneNumber = '+' + phoneNumber.substring(2);
      } else {
        console.error('Ongeldig telefoonnummer');
        return null;
      }

      if (phoneNumber.length !== 12) {
        console.error('Telefoonnummer moet in het formaat +31XXXXXXXXX zijn.');
        return null;
      }

      return phoneNumber;
    },
    validatePhoneNumber() {
      const phoneNumber = this.validateAndFormatPhoneNumber(this.formData.phone_number);

      if (!phoneNumber) {
        console.error('Ongeldig telefoonnummer.');
        this.errors.phone_number = 'Ongeldig telefoonnummer.';
        return false;
      }

      this.errors.phone_number = '';
      this.formData.phone_number = phoneNumber;
      return true;
    },
    validateForm() {
      const isGenderValid = this.validateGender();
      const isFirstnameValid = this.validateFirstname();
      const isLastnameValid = this.validateLastname();
      const isEmailValid = this.validateEmail();
      const isPhoneNumberValid = this.validatePhoneNumber();

      return isGenderValid && isFirstnameValid && isLastnameValid && isEmailValid && isPhoneNumberValid;
    },
    afronden() {
  // Debugging: Log de waarde van gender
  console.log('Geselecteerd geslacht:', this.formData.gender);
  
  // Valideer het formulier
  if (!this.validateForm()) {
    console.error('Formulier bevat ongeldige waarden.');
    return;
  }

  // Voorbereiden van gegevens om te versturen
  const username = '185';
  const password = 'ab8221d4a3170d89542880459abf79817ae367c2';
  const authHeader = 'Basic ' + btoa(username + ':' + password);
  const apiUrl = 'https://leadgen.republish.nl/api/sponsors/2394/leads';

  const antwoordenData = getAntwoorden();
  const answers = [
    5109,
    antwoordenData.vraag2 ? antwoordenData.vraag2.id : null,
    antwoordenData.vraag3 ? antwoordenData.vraag3.id : null
  ].filter(id => id !== null);

  const leadData = {
    language: 'nl_NL',
    publisher_id: 'Morris de publisher :)',
    site_subid: 'id=5',
    site_custom_url: 'http://nederlansadvies.nl',
    site_custom_name: 'airco',
    ip: 'userIPAddress',
    optin_timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    firstname: this.formData.firstname,
    lastname: this.formData.lastname,
    email: this.formData.email,
    gender: this.formData.gender,
    house_number: this.formData.house_number,
    street: this.formData.street,
    city: this.formData.city,
    zip: this.formData.zip,
    phone_number: this.formData.phone_number,
    answers: answers
  };

  console.log('Te versturen data:', leadData); // Debugging

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(leadData)
  })
  .then(response => {
    if (response.status === 201) {
      this.$router.push('/bedankt');
    } else {
      return response.json();
    }
  })
  .then(responseData => {
    console.log('API response:', responseData); // Debugging
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
  },
  mounted() {
    window.addEventListener('keydown', this.handleEnterform);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleEnterform);
  }
};
</script>

<template>
  <div>
    <div class="navbar">
      <div class="container-links">
        <a href="/airco">
          <div class="container-advies-logo">
            <logo-nl-advies-airco
              :nederlandsadviesNl="logoNLAdviesAircoProps.nederlandsadviesNl"
              :airconditioning="logoNLAdviesAircoProps.airconditioning" />
          </div>
        </a>
      </div>

      <div class="container-rechts">
        <div class="container-tekst-rechts">
          <span class="tekst-zwart-navbar">{{ spanText1 }}</span>
          <span class="tekst-geel-navbar">{{ spanText2 }}</span>
        </div>
      </div>
    </div>

    <div class="formulier-achtergrond-vraag1">
      <div class="formulier-overkoepelende-container">
        <div class="formulier-formulier-container">
          <p class="titel-formulier">Bedankt!</p>
          <p class="subtitel-formulier">
            Ontvang gratis en vrijblijvend 4<br>
            superscherpe offertes met persoonlijk<br>
            advies van de beste lokale vakmensen
          </p>
          <p class="mensen-gingen-voor">Al meer dan 1,2 miljoen mensen ging je voor.</p>

          <div class="radio-group" style="display: flex; justify-content: center; font-size: 22px; font-family: catamaran;">
            <input
              class="input-geslacht-man"
              v-model="formData.gender"
              type="radio"
              id="input-geslacht-man"
              value="male" />
            <label for="input-geslacht-man">Man</label>

            <input
              class="input-geslacht-vrouw"
              v-model="formData.gender"
              type="radio"
              id="input-geslacht-vrouw"
              value="female" />
            <label for="input-geslacht-vrouw">Vrouw</label>
          </div>

          <span v-if="errors.gender" class="error-message">{{ errors.gender }}</span>

          <div class="formulier-form-container">
            <form @submit.prevent="afronden">
              <div class="formulier-input-group">
                <div class="formulier-input-item">
                  <label for="input-voornaam"></label>
                  <input
                    class="input-voornaam"
                    v-model="formData.firstname"
                    type="text"
                    id="input-voornaam"
                    placeholder="Voornaam" />
                  <span v-if="errors.firstname" class="error-message">{{ errors.firstname }}</span>
                </div>
                <div class="formulier-input-item">
                  <label for="input-achternaam"></label>
                  <input
                    class="input-achternaam"
                    v-model="formData.lastname"
                    type="text"
                    id="input-achternaam"
                    placeholder="Achternaam" />
                  <span v-if="errors.lastname" class="error-message">{{ errors.lastname }}</span>
                </div>
              </div>

              <div class="formulier-input-group">
                <div class="formulier-input-item">
                  <label for="input-telefoon"></label>
                  <input
                    class="input-telefoon"
                    v-model="formData.phone_number"
                    type="text"
                    id="input-telefoon"
                    placeholder="Telefoonnummer" />
                  <span v-if="errors.phone_number" class="error-message">{{ errors.phone_number }}</span>
                </div>
                <div class="formulier-input-item">
                  <label for="input-email"></label>
                  <input
                    class="input-email"
                    v-model="formData.email"
                    type="text"
                    id="input-email"
                    placeholder="E-mailadres" />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
              </div>

              <div class="formulier-volgende-formulier">
                <button class="formulier-volgende-button-formulier" type="submit">Aanvraag afronden</button>
              </div>
            </form>
          </div>

          <p class="formulier-footer-formulier">Je gegevens worden uitsluitend gebruikt om jou te voorzien van gratis,<br>persoonlijk advies en offertes van onze partners.<br>Dit is volledig vrijblijvend, je zit dus nergens aan vast.</p>
        </div>
      </div>
    </div>

    <p class="formulier-footer">© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy</p>
  </div>
</template>








  

  
  <style lang="sass">
  @import '../../variables'



  .error-message 
    color: red
    font-size: 0.875rem
    margin-bottom: 5%
    padding-bottom: 10px
    margin-top: -10px
    width: 99%
    margin-left: 115%
  

  .formulier-achtergrond-vraag1 
    background-color: #FFE758
    height: auto
    padding-bottom: 2rem
    width: 120rem
    max-width: 100vw
  

  .formulier-overkoepelende-container 
    display: flex
    flex-direction: column
    align-items: center
    gap: 6rem
  

  .formulier-formulier-container 
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
    margin-top: 4rem
  

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
    margin-bottom: 1rem
    
  #input-geslacht-man + label
    position: relative
    right: 180px

  .input-geslacht-vrouw + label
    position: relative
    left: 30px

  .input-geslacht-man[type="radio"] 
    position: relative
    right: 200px
    accent-color: #ffcd02
    scale: 1.5

  .input-geslacht-vrouw[type="radio"]
    position: relative
    left: 20px
    accent-color: #ffcd02
    scale: 1.5





  .formulier-form-container 
    max-width: 600px
    margin: 0 auto
    padding: 20px
  

  .formulier-form-container form 
    display: flex
    flex-direction: column
    gap: 20px
  

  .formulier-input-group 
    display: flex
    gap: 20px
  

  .formulier-input-item 
    flex: 1
    display: flex
    flex-direction: column
  

  .formulier-input-item label 
    margin-bottom: 8px
    font-weight: bold
  

  .formulier-input-item input 
    padding: 20px
    border: 1px solid #ccc
    border-radius: 4px
    font-size: 18px
    font-family: catamaran
  

  .input-voornaam, .input-achternaam, .input-telefoon, .input-email
    height: 3.4rem
    width: 15rem
  

  .formulier-volgende-formulier 
    display: flex
    justify-content: center
    margin-right: 5rem
    margin-top: 1rem
  

  .formulier-volgende-button-formulier
    display: flex
    padding: 0.5rem 2.8rem
    justify-content: center
    align-items: center
    gap: 0.625rem
    border-radius: 3.75rem
    background: #FFCD02
    color:  #1C1829
    font-family: Catamaran
    font-size: 1.36875rem !important
    font-style: normal
    font-weight: 800
    line-height: normal
    text-transform: uppercase
    border: none
    cursor: pointer
    width:  33.5rem
    position: relative
    left: 2.5rem
  

  .formulier-footer-formulier 
    color: #000
    text-align: center
    font-family: Catamaran
    font-size: 1rem
    font-style: normal
    font-weight: 400
    line-height: normal
    padding: 0.5rem 25% 2.5rem
    margin-right: 15px
    padding-bottom: 4rem !important
  

  .formulier-footer 
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
    .formulier-achtergrond-vraag1 
      zoom: 100%
    
  

  @media (max-width: 680px) 
    .formulier-achtergrond-vraag1 
      height: 61rem !important
      padding-bottom: 2rem
      width: 100%
    

    .formulier-formulier-container 
      width: 90%
      padding-bottom: 1px
      height: auto
    

    .formulier-form-container form 
      flex-direction: column
      gap: 20px

    .titel-formulier
      font-size: 2rem
    

    .formulier-input-group 
      flex-direction: column
      gap: 20px
    

    .formulier-input-item 
      width: 100%
    

    .formulier-input-item input 
      width: 100%
    

    .formulier-volgende-button-formulier 
      width: 100%
      font-size: 1.25rem
    

    .formulier-footer-formulier 
      padding: 0.5rem 5% 2.5rem!important
      font-size: 0.875rem
    

    .formulier-footer 
      text-align: center
      font-size: 0.875rem



    .subtitel-formulier
      font-size: 16px

    .titel-formulier
      font-size: 22px!important

    .mensen-gingen-voor
      font-size: 13px
      margin-bottom: 0


    
    .formulier-volgende-button-formulier
      left: 0
      
    .formulier-volgende-formulier
      display: block
      margin: 0

    .formulier-volgende-button-formulier
      font-size: 1rem!important



  



 @media (max-width: 1150px)
  .formulier-overkoepelende-container
    zoom: 80%

@media (max-width: 900px)
  .formulier-overkoepelende-container
    zoom: 70%




@media (max-width: 800px)
  .formulier-overkoepelende-container
    zoom: 65%

@media (max-width: 720px)
  .formulier-overkoepelende-container
    zoom: 60%





@media (min-width: 500px)
  .formulier-container-afbeelding-mobiel
    display: none

@media (max-width: 680px)
  .formulier-overkoepelende-container
    zoom: 100%


@media (max-width: 500px)
  .formulier-overkoepelende-container
    zoom: 100%


  </style>