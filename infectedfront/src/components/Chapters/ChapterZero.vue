<template>    

      <v-row
        class="fill-height white--text text-h1 animate__animated animate__fadeOut"
        v-if="loading"
        justify="center"
        align="center"
      >
        Chapter 0 : LABO
      </v-row>
      <v-col
        class="text-center fill-height"
        cols="12"
        v-else
      >
        <canvas fluid ref="greyCircle" ></canvas>
      </v-col>
</template>
<script>
export default {
    name:"ChapterZero",
    data() {
        return {
            loading:true,
        }
    },
    mounted() {
        let canvas = this.$refs['greyCircle'].getContext('2d');

        canvas.beginPath();
        canvas.arc(180,70,50,0,0.1, true);
        canvas.fillStyle = 'grey';

        canvas.fill();
    },
}
</script>