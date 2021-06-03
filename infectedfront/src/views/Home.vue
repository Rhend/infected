<template>
<v-app>
  <div>
    Bienvenue dans l'univers de Infected <br />
    Nombres de personnes infectés : {{ infectedCount }}
  </div>
      <v-alert
        border="top"
        color="red lighten-2"
        dark
      >
        I'm an alert with a top border and red color
      </v-alert>
  
    <div v-if="infectedCount > 10 && infectedCount < 30">
      Les gens commence à agir bizzarement..
    </div>
    <div v-else-if="infectedCount >= 30">
      Voulez-vous envoyer vos infectés dans le quartier voisin ?
      <button @click="spendInfected('Invade')">Envoyer les infectés</button>
    </div>

    <div v-if="invadeQuartier" class="block">Nombre d'infecté dans le quartier : {{ invadeQuartierCount }}</div>
</v-app>
</template>

<script>
export default {
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
    spendInfected(whichStep){
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
}
</script>