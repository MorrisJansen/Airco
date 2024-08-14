<template>
  <div>
    <form @submit.prevent="validateAddress">
      <div>Call</div>
      <div>
        <label for="postcode">Postcode:</label>
        <input v-model="postcode" id="postcode" placeholder="1012BZ" required />
        <label for="streetNumberAndPremise"
          >Street number and/without premise:</label
        >
        <input
          v-model="streetNumberAndPremise"
          id="streetNumberAndPremise"
          placeholder="7A"
          required
        />
      </div>
      <div>
        <span style="color: red">{{ message }}</span>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <br />
      <div v-if="showResponse">
        <div>Response</div>
        <div>
          <label for="streetNumber">Street number:</label>
          <input
            v-model="streetNumber"
            id="streetNumber"
            class="streetnumber"
            readonly
            disabled
          />

          <label for="premise">Premise:</label>
          <input v-model="premise" id="premise" class="premise" readonly disabled />

          <label for="street">Street:</label>
          <input v-model="street" id="street" class="street" readonly disabled />

          <label for="settlement">Settlement:</label>
          <input
            v-model="settlement"
            id="settlement"
            class="settlement"
            readonly
            disabled
          />

          <label for="municipality">Municipality:</label>
          <input
            v-model="municipality"
            id="municipality"
            class="municipality"
            readonly
            disabled
          />

          <label for="province">Province:</label>
          <input
            v-model="province"
            id="province"
            class="province"
            readonly
            disabled
          />
        </div>

        <br />
        <div>Full Response</div>
        <pre>{{ jsonResponse }}</pre>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postcode: "",
      streetNumberAndPremise: "",
      streetNumber: "",
      premise: "",
      street: "",
      settlement: "",
      municipality: "",
      province: "",
      jsonResponse: "",
      message: "",
      showResponse: false,
    };
  },
  methods: {
    async validateAddress() {
      const pro6ppAuthKey = "P6JTU52clKYjZca8"; // Replace with your actual authorization key
      const BASE_URL = "https://api.pro6pp.nl/v2";

      const url = `${BASE_URL}/suggest/nl/streetNumber?postalCode=${encodeURIComponent(
        this.postcode
      )}&settlement=${encodeURIComponent(
        this.settlement || "ROTTERDAM"
      )}&streetNumber=${encodeURIComponent(
        this.streetNumberAndPremise
      )}&authKey=${pro6ppAuthKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response:", data);

        if (data && Array.isArray(data) && data.length > 0) {
          const validNumbers = data.map((item) => item.streetNumber.toString());

          if (validNumbers.includes(this.streetNumberAndPremise.toString())) {
            this.streetNumber = data[0].streetNumber || "";
            this.premise = data[0].premise || "";
            this.street = data[0].street || "";
            this.settlement = data[0].settlement || "";
            this.municipality = data[0].municipality || "";
            this.province = data[0].province || "";
            this.jsonResponse = JSON.stringify(data, null, 2);
            this.message = "";
            this.showResponse = true;
          } else {
            this.message =
              "Huisnummer is niet geldig voor de opgegeven straat en postcode.";
            this.showResponse = false;
          }
        } else {
          this.message = "Geen resultaten gevonden voor het opgegeven adres.";
          this.showResponse = false;
        }
      } catch (error) {
        console.error("Fout bij het ophalen van adresgegevens:", error);
        this.message = "Er is een fout opgetreden bij het ophalen van gegevens.";
        this.showResponse = false;
      }
    },
  },
};
</script>

<style scoped>
/* Voeg hier je eigen stijlen toe als dat nodig is */
</style>