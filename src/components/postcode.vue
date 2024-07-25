<template>
    <div class="postcode-container">
      <h1>Postcode naar Straatnaam</h1>
      <div class="input-group">
        <label for="postcode-input">Postcode:</label>
        <input id="postcode-input" type="text" v-model="postcode" @change="fetchStreetNames" placeholder="Voer postcode in" />
      </div>
      
      <div class="input-group" v-if="streets.length > 0">
        <label for="street-select">Straat:</label>
        <select id="street-select" v-model="selectedStreet">
          <option value="" disabled>Selecteer een straatnaam</option>
          <option v-for="street in streets" :key="street" :value="street">{{ street }}</option>
        </select>
      </div>
  
      <button @click="submit">Submit</button>
      
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "Postcode",
    data() {
      return {
        postcode: '',
        streets: [],
        selectedStreet: '',
        errorMessage: ''
      };
    },
    methods: {
      async fetchStreetNames() {
        const pattern = /^[1-9][0-9]{3}\s?[-]?[a-zA-Z]{2}$/;
        if (!pattern.test(this.postcode)) {
          this.errorMessage = 'Ongeldige postcode.';
          this.streets = [];
          return;
        }
  
        this.errorMessage = '';
        try {
          console.log(`Fetching street names for postcode: ${this.postcode}`);
          const response = await axios.get(`https://api.postcodeapi.nu/v3/lookup/${this.postcode}`, {
            headers: {
              'X-Api-Key': '0kwzCamtlw4aqtUAK60UTaKjc02VOBXH3MASy2TO' // Vervang 'YOUR_API_KEY' met je echte API sleutel
            }
          });
          console.log('API response:', response.data);
          this.streets = response.data.street ? [response.data.street] : [];
          this.selectedStreet = ''; // Reset the selected street when a new postcode is entered
          console.log('Streets:', this.streets);
        } catch (error) {
          console.error('Error fetching street names:', error);
          this.errorMessage = 'Kon de straatnaam niet ophalen. Controleer de postcode en probeer het opnieuw.';
          this.streets = [];
        }
      },
      submit() {
        if (!this.selectedStreet) {
          this.errorMessage = 'Selecteer een straatnaam.';
          return;
        }
  
        this.errorMessage = '';
        alert(`Postcode: ${this.postcode}, Straatnaam: ${this.selectedStreet}`);
        // Hier kun je verdere verwerking toevoegen, zoals het verzenden van gegevens naar een server
      }
    }
  };
  </script>
  
  <style scoped>
  .postcode-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  .error-message {
    color: red;
    margin-top: 20px;
  }
  </style>