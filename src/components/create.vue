<template>
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
        <v-card-text>
          <v-card-title>
              <span class="text-h5">Add New Animal</span>
            </v-card-title>
          <v-container>
            <v-alert type="warning" outlined v-if="message">
              {{message}}
            </v-alert>
            <v-row>               
              <v-col cols="12">
                <label for="image">Image* </label>
                <input type="file" id="image" accept="image/*" :key="fileInputKey" @change=uploadImage>
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
            @click="closeDialog()"
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
</template>

<script>
import {mapActions} from 'vuex';
  export default {    
    data(){
        return{
           dialog: false,
           image: null,
           name:'' ,
           fileInputKey:0,
           message:''
        }
    },
    watch:{
      name(val){
        val = val.trim('');
        if(val){
          this.message='';
        }
      }
    },
    methods:{
      ...mapActions('animal',['addAnimal']),
      clearInput(){
        this.name = '';
        this.message = '';
        this.fileInputKey++;
      },
       uploadImage(event){
          event.preventDefault();
          const file = event.target.files[0];
          this.image = URL.createObjectURL(file);
          this.message ='';
       },
      saveAnimal(){
        this.name = this.name.trim('');
        if(this.name.length>0 && this.image != null){
          this.addAnimal({name:this.name, imgSrc: this.image})
          this.dialog = false;
          this.clearInput();
        }
        else{
          this.message = 'Both Fields are required***'
        }
      },
      closeDialog(){
        this.clearInput();
        this.dialog = false;
      }
    }
  }
</script>