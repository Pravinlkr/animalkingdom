<template>
    <v-container class="mt-8">
        <v-row class="topHeader">
            <h2>Animals of the Kingdom</h2>
            <div class="createButton">
            <create></create>
            </div>
        </v-row>
        <div class="mt-12 text-center">
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
.topHeader{
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
}
</style>