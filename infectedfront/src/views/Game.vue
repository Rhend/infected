<template>
  <div>    
    <HeaderRessource/>
    <GeneratingRessource/>
  </div>
</template>

<script>
import HeaderRessource from "@/components/HeaderRessource.vue";
import GeneratingRessource from "@/components/GeneratingRessource.vue";

export default {
  name: "Game",
  components:{
    HeaderRessource,
    GeneratingRessource,
  },
};
</script>