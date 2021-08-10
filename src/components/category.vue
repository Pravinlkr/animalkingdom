<template>
<div>
    <v-row class="d-flex">
        <v-col v-for="animal in category" v-bind:key="animal">
            <v-card
                class="mx-auto"
                width="250"
                text-center
            >
                
                <v-img
                :src='animal.imgSrc'
                height="200px"
                ><v-btn text class="float-right">x</v-btn></v-img>

                <v-card-title class="text-center">
                {{animal.name}}
                </v-card-title>      

            </v-card>
        </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    data: () => ({
      category:[
          {name:'Cat', imgSrc:'https://i.pinimg.com/originals/7d/1d/81/7d1d8104d1460bb020561f06a6522bad.png'},
          {name:'Dog', imgSrc:'https://www.mcicon.com/wp-content/uploads/2021/06/Dog-37.jpg'},
          {name:'Fish', imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/1024px-Fish_icon_%28The_Noun_Project_27052%29.svg.png'},
          {name:'Cow', imgSrc:'https://i.pinimg.com/736x/2b/1e/3b/2b1e3be0893520d45d64a14d520c0868.jpg'},
          {name:'Lion', imgSrc:'https://cdn5.vectorstock.com/i/thumb-large/11/34/wild-lion-icon-logo-template-vector-23921134.jpg'}
      ]
    }),
  }
</script>