<template>
    <v-container class="mt-8">
        <v-row justify="space-between">
            <h2>Animals of the Kingdom</h2>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <create></create>
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