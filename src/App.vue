<template>
  <v-app>
    <div id="app">
        <NavBar></NavBar>        
        <router-view />
    </div>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
