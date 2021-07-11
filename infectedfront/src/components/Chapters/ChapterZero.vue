<template>
  <div class="black">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Button </v-btn>
      </template>
      <GenericToolTip title="Titre" content="Content" />
    </v-tooltip>
  </div>
  <!-- animate__animated animate__fadeOut -->
  <!-- <v-row
    class="black fill-height fill-width white--text text-h1"
    justify="center"
    align="center"
  > -->
  <!-- <transition name="fade">  -->
  <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">Chapter 0 : LABO</span>
      </template>
      <GenericToolTip title="Titre" content="Content" />
    </v-tooltip> -->
  <!-- </transition> -->
  <!-- </v-row> -->
  <!-- <v-col class="text-center fill-height" cols="12" v-else>
    <canvas fluid ref="greyCircle"></canvas>
  </v-col> -->
</template>
<script>
import GenericToolTip from "@/components/GenericToolTip.vue";
export default {
  name: "ChapterZero",
  components: {
    GenericToolTip,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    let canvas = this.$refs["greyCircle"].getContext("2d");

    canvas.beginPath();
    canvas.arc(180, 70, 50, 0, 0.1, true);
    canvas.fillStyle = "grey";

    canvas.fill();
  },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
