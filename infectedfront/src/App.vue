<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid class="fill-height ma-0 pa-0">
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
