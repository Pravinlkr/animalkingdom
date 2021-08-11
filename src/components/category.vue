<template>
<div>
    <v-row class="d-flex">
        <v-col v-for="(animal,index) in getAllAnimals" v-bind:key="index">
            <v-card
                class="mx-auto"
                width="250"
                text-center
            >
                
                <v-img
                :src='animal.imgSrc'
                height="200px"
                ><v-btn text class="float-right" v-on:click="deleteAnimal(index)">x</v-btn></v-img>

                <v-card-title>
                {{animal.name}}
                </v-card-title>      

            </v-card>
        </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import {mapActions} from 'vuex';

  export default {
    computed:{
          ...mapGetters('animal',['getAllAnimals'])
    },
    methods:{
      ...mapActions('animal',['deleteAnimal'])
    }
  }
</script>