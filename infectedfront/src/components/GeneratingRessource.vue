<template>
    <div class="Main">
        Temps d'infectation : {{ infectedTime }}
        <!-- <v-progress-circular
            color="deep-purple darken-1"
            :rotate="-90"
            :size="50"
            :value="infectedTime"  
            :width="8"        
        /> -->
        <v-progress-linear
            color="deep-purple darken-1"
            v-model="infectedTime"    
            :height="25"        
        >
            <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
            </template>
        </v-progress-linear>
    </div>
</template>
<script>
export default {
    name:"GeneratingRessource",
    data() {
        return {
            infectedTime:0,
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
            // setInterval(() => {
            //     if (this.infectedTime === 100){
            //         this.infectedTime = 0;
            //         this.infectedCount ++;                
            //     }else{
            //         this.infectedTime += 10;
            //     }
            // }, 1000);
            setInterval(() => {
                if (this.infectedTime === 100){
                    this.infectedTime = 0;
                    this.infectedCount ++;                
                }else{
                    this.infectedTime += 1;
                }
            }, 100);
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
<style lang="css">
    .Main{
        margin:2rem;
    }
    .v-progress-circular {
        margin: 1rem;
        transition: none;
    }
</style>