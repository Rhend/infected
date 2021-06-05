<template>
  <v-app>
    <HeaderRessource/>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderRessource from "@/components/HeaderRessource.vue";

export default {
  name: "App",
  components:{
    HeaderRessource,
  },

  data: () => ({
    //
  }),
};
</script>
