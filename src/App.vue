<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <home-page></home-page>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import homePage from './components/homePage.vue'
export default {
  name: 'App',
  components: {
    homePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>