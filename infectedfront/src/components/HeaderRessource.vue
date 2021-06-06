<template>  
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/fleshy-mass.svg"
          transition="scale-transition"
          width="40"
        />
        Infected
      </div>
      <v-spacer></v-spacer>
      Nombre d'infecté : {{ infectedCount }}
    </v-app-bar>
</template>

<script>
export default {
  name: "HeaderRessource",
    data() {
        return {
            infectedCount: 0,
        }
    },
};
</script>
