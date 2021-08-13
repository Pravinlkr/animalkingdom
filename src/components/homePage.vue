<template>
    <v-container class="mt-8">
        <v-row class="text-center">
            <v-col cols="12" xs="12" sm="5" md="5" lg="4">
                <h2>Animals of the Kingdom</h2>
            </v-col>
            <v-col cols="12" xs="12" sm="7" md="7" lg="8">
                <create></create>
            </v-col>
        </v-row>
        <div class="mt-12">
            <category></category>
        </div> 
    </v-container>
</template>
<script>
import create from './create.vue'
import category from './category.vue'
export default {
    name:'homePage',
    components:{
        create,
        category
    }
}
</script>

<style scoped>
/*.topHeader{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
@media (max-width:500px){
    .topHeader{
        flex-direction: column;
        text-align: center;
    }
    .createButton{
        margin-top: 3%;
    }
}
@media (max-width:1023px){
    .topHeader{
        margin:auto 5%;
    }    
}*/
</style>