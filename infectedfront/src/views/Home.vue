<template>
  <div>
    Bienvenue dans l'univers de Infected <br />
    Nombres de personnes infectés : {{ infectedCount }}
  </div>

  
    <div v-if="infectedCount > 10 && infectedCount < 30">
      Les gens commence à agir bizzarement..
    </div>
    <div v-else-if="infectedCount >= 30">
      Voulez-vous envoyer vos infectés dans le quartier voisin ?
      <button @click="spendInfected('Invade')">Envoyer les infectés</button>
    </div>

    <div v-if="invadeQuartier" class="block">Nombre d'infecté dans le quartier : {{ invadeQuartierCount }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      infectedCount: 0,
      invadeQuartier: false,
      invadeQuartierCount:0,
    };
  },
  mounted() {
    this.increaseInfected();
  },
  methods: {
    increaseInfected() {
      setInterval(() => {
        this.infectedCount ++;
      }, 1000);
    },
    spendInfected(whichStep: string){
      console.info("Hello ", whichStep);
      switch (whichStep) {
        case "Invade":
          this.infectedCount = this.infectedCount - 30;
          this.invadeQuartier = true;
          this.invadeQuartierCount += 30;
          break;
        default:
          break;
      }
    },
  },
});
</script>
<style lang="css">
  .block{
    border: 1px dotted black;
    margin: 50px;
  }
</style>
