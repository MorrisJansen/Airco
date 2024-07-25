<template>
    <div class="progress-bar">
      <div class="progress-background">
        <div
          ref="progressBar"
          class="progress"
          :class="progressClass"
        ></div>
      </div>
      <div
        class="percentage"
        :class="percentageClass"
      >{{ progressPercentage }}%</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      }
    },
    computed: {
      progressPercentage() {
        // Berekent de doelvoortgang op basis van de huidige pagina
        if (this.currentPage === 1) return 33;
        if (this.currentPage === 2) return 66;
        if (this.currentPage === 3) return 100;
        return 0; // Fallback
      },
      progressClass() {
        // Retourneert de CSS-klasse gebaseerd op de huidige pagina
        if (this.currentPage === 1) return 'progress-page-1';
        if (this.currentPage === 2) return 'progress-page-2';
        if (this.currentPage === 3) return 'progress-page-3';
        if (this.currentPage === 4) return 'progress-page-4';
        return '';
      },
      percentageClass() {
        // Retourneert de CSS-klasse voor percentage-tekst gebaseerd op de huidige pagina
        if (this.currentPage === 1) return 'percentage-page-1';
        if (this.currentPage === 2) return 'percentage-page-2';
        if (this.currentPage === 3) return 'percentage-page-3';
        if (this.currentPage === 4) return 'percentage-page-4';
        return '';
      }
    },
    watch: {
      currentPage(newPage, oldPage) {
        // Start animatie bij wijziging van de pagina
        this.animateProgressBar();
      }
    },
    methods: {
      animateProgressBar() {
        const element = this.$refs.progressBar;
        const targetWidth = this.progressPercentage;
        
        // Start animatie door de juiste CSS-klasse te gebruiken
        element.style.width = `${targetWidth}%`;
      }
    },
    mounted() {
      // Initialisatie bij het laden van de component
      this.animateProgressBar();
    }
  }
  </script>

  
  <style scoped>
  .progress-bar {
    width: 66rem;
    background-color: #f4f4f4;
    border-radius: 2.5rem;
    margin: 20px 0 0 0;
    height: 1.5rem;
    position: relative;
  }
  
  .progress-background {
    height: 100%;
    width: 100%;
    background-color: #f4f4f4;
    border-radius: 2.5rem;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: #5dba01;
    border-radius: 2.5rem;
    transition: width 1s ease;
  }
  
  .progress-page-1 {
    width: 0%;
  }
  
  .progress-page-2 {
    width: 33%;
  }
  
  .progress-page-3 {
    width: 66%;
  }
  

  /* Algemene CSS voor percentage-tekst */
/* Algemene CSS voor percentage-tekst */
.percentage {
    color: #fff;
    font-family: Catamaran, sans-serif;
    font-weight: 600;
    opacity: 0; /* Start met een opacity van 0 zodat de animatie zichtbaar is */
    transition: opacity 2s ease-in-out; /* Zorgt voor een soepele overgang */
  }
  
  /* CSS voor percentage op pagina 1 */
  .percentage-page-1 {
    position: absolute;
    top: 50%;
    left: 16.5%;
    transform: translate(-50%, -50%);
    animation: fadeIn 2s ease-in-out forwards; /* Voeg animatie toe */
  }
  
  /* CSS voor percentage op pagina 2 */
  .percentage-page-2 {
    position: absolute;
    top: 50%;
    left: 33%;
    transform: translate(-50%, -50%);
    animation: fadeIn 2s ease-in-out forwards; /* Voeg animatie toe */
  }
  
  /* CSS voor percentage op pagina 3 */
  .percentage-page-3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fadeIn 2s ease-in-out forwards; /* Voeg animatie toe */
  }
  
  /* Keyframes voor de fade-in animatie */
  @keyframes fadeIn {
    from {
      opacity: 0; /* Start met een opacity van 0 */
    }
    to {
      opacity: 1; /* Eindig met een opacity van 1 */
    }
  }
  

  </style>