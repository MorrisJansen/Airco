<script>
import LogoNlAdviesAirco from "./LogoNlAdviesAirco";

export default {
  name: "analyse",
  components: {
    LogoNlAdviesAirco,
  },
  props: {
    spanText1: String,
    spanText2: String,
    logoNLAdviesAircoProps: Object,
  },
  data() {
    return {
      progress: 0,
      visibleItems: [false, false, false, false, false],
    };
  },
  mounted() {
    this.startLoading();
    setTimeout(() => {
      this.navigateToNextPage();
    }, 6500); 
  },
  methods: {
    startLoading() {
      const duration = 5000;
      const intervalTime = 50;
      const increment = (100 / (duration / intervalTime));

      const interval = setInterval(() => {
        this.progress += increment;
        
        if (this.progress >= 20 && !this.visibleItems[0]) this.visibleItems[0] = true;
        if (this.progress >= 40 && !this.visibleItems[1]) this.visibleItems[1] = true;
        if (this.progress >= 60 && !this.visibleItems[2]) this.visibleItems[2] = true;
        if (this.progress >= 80 && !this.visibleItems[3]) this.visibleItems[3] = true;
        if (this.progress >= 100 && !this.visibleItems[4]) this.visibleItems[4] = true;



        if (this.progress >= 100) {
          clearInterval(interval);
        }
      }, intervalTime);
    },
    navigateToNextPage() {
      this.$router.push('/formulier');
    },
  },
};
</script>

<template>
  <div>
    <!-- navbar -->
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

    <div class="achtergrond-vraag1">
      <div class="overkoepelende-container">
        <div class="witte-container">
          <p class="domeinnaam">Nederlandsadvies.nl</p>
          <p class="analyseert-gegevens">analyseert nu je gegevens...</p>

          <!-- Laadbalk -->
          <div class="laadbalk-analyse">
            <div class="geladen-gedeelte-vraag-analyse" :style="{ width: progress + '%' }">
              <div class="procent">{{ Math.round(progress) }}%</div>
            </div>
          </div>

          <ul class="lijst-analyse">
            <li
              v-for="(visible, index) in visibleItems.slice(0, 4)"
              :key="index"
              class="lijst-items-analyse"
              :class="{ visible }"
            >
              <div class="lijst-item-content">
                <img class="lijst-item-icoon" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg" alt="">
                <span v-if="index === 0">Jouw woning komt <span class="groen">in aanmerking</span></span>
                <span v-if="index === 1">Met airco bespaar je tot <span class="groen"> 65% op je gasrekening</span></span>
                <span v-if="index === 2">Wij hebben <span class="groen">beschikbare vakmensen</span></span>
                <span v-if="index === 3">Jij bespaart tot<span class="groen"> 40% op de aanschaf</span></span>
              </div>
            </li>
          </ul>

          <!-- Losse paragraaf buiten de lijst -->
          <p v-if="visibleItems[4]" class="woningscan">We sturen je nu door om de woningscan af te ronden...</p>

        </div>
      </div>
    </div>

    <p class="footer">© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy</p>
  </div>
</template>


<style lang="sass">
@import '../../variables'

.groen
  color: #5DBA01

.lijst-item-icoon
  filter: invert(1)

.lijst-item-content
  display: flex
  align-items: center
  gap: 10px

.lijst-item-icoon
  width: 24px 
  height: 24px

.lijst-items-analyse
  font-size: 20px
  margin: 10px 0
  opacity: 0
  transition: opacity 0.5s ease-in-out
  color: black

.lijst-items-analyse.visible
  opacity: 1

img .lijst-item-icoon
  position: relative
  top: 4%

.lijst-items-analyse img.lijst-item-icoon 
  position: relative
  top: 5%

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
  color: #5DBA01
  text-align: center
  font-family: Catamaran
  font-weight: 800

.analyseert-gegevens
  font-size: 45px
  color: #000
  text-align: center
  font-family: Catamaran
  font-weight: 800

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
  display: flex
  align-items: center
  justify-content: center

.procent
  color: #FFF
  font-family: Catamaran
  font-size: 0.9375rem
  font-weight: 600

.lijst-analyse
  display: block
  padding-top: 3rem
  list-style: inside
  font-family: Catamaran, sans-serif
  font-weight: 700
  margin-left: 30%


.lijst-analyse
  list-style: none
  padding-left: 0





  
.lijst-items-analyse
  font-size: 20px
  margin: 10px 0
  opacity: 0
  transition: opacity 0.5s ease-in-out
  color: black

.lijst-items-analyse.visible
  opacity: 1

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
  font-weight: 400
  text-align: center

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


  .witte-container
    height: 80rem
    width: 92rem

  .domeinnaam
    font-size: 115px

  .analyseert-gegevens
    font-size: 70px

  .laadbalk-analyse
    zoom: 180%

  .lijst-analyse
    margin-left: 7%
    zoom: 250%

  .woningscan
    margin-top: 7rem
    font-size: 50px

  .geladen-gedeelte
    max-width: 40%

  .footer
    text-align: center
</style>