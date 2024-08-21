<script>
export default {
  name: "GoogleMap",
  props: ["address"], // De 'address' prop wordt meegeleverd om de locatie te bepalen
  data() {
    return {
      map: null,
      marker: null,
      geocoder: null,
      responseDiv: null,
      response: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // Initializeer de kaart
      this.map = new google.maps.Map(this.$refs.map, {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 }, // Standaard locatie (bijv. Sydney)
        mapTypeControl: false,
      });

      // Initialiseer de Geocoder
      this.geocoder = new google.maps.Geocoder();

      // Maak een marker aan
      this.marker = new google.maps.Marker({
        map: this.map,
      });

      // Als er een adres is meegegeven, geocode het dan
      if (this.address) {
        this.geocode({ address: this.address });
      }
    },
    geocode(request) {
      this.clear(); // Verwijder bestaande markers

      this.geocoder
        .geocode(request)
        .then((result) => {
          const { results } = result;

          // Stel de kaart in op de locatie van het resultaat
          this.map.setCenter(results[0].geometry.location);

          // Plaats de marker op de locatie
          this.marker.setPosition(results[0].geometry.location);
          this.marker.setMap(this.map);

          // Toon de JSON-resultaten in de console (voor debugging)
          console.log(JSON.stringify(result, null, 2));
        })
        .catch((e) => {
          alert("Geocode was not successful for the following reason: " + e);
        });
    },
    clear() {
      // Verwijder de marker van de kaart
      this.marker.setMap(null);
    },
  },
};
</script>

<template>
  <div>
    <!-- Kaart container -->
    <div ref="map" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<style scoped>
/* Voeg eventueel extra styling toe */
</style>