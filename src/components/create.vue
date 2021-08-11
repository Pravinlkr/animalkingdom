<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Create
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Animal</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>               
              <v-col cols="12">
                <label for="image">Image* </label>
                <input type="file" id="image" accept="image/*" @change=uploadImage>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Name*"
                  v-model="name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="saveAnimal()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapActions} from 'vuex';
  export default {    
    data(){
        return{
           dialog: false,
           image: null,
           name:'' 
        }
    },
    methods:{
      ...mapActions('animal',['addAnimal']),
       uploadImage(event){
         console.log('called')
          event.preventDefault();
          const file = event.target.files[0];
          this.image = URL.createObjectURL(file);
          console.log(this.image);
       },
      saveAnimal(){
        this.addAnimal({name:this.name, imgSrc: this.image})
        this.dialog = false;
        this.image = null;
      }
    }
  }
</script>