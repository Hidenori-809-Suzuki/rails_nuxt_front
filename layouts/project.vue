<template>
  <v-app>
    <logged-in-app-bar
      clipped-left
    >
      <template
        v-slot:navigation-toggle-button
      >
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
        />
      </template>
    </logged-in-app-bar>
    <project-navigation-drawer
      :drawer.sync="drawer"
    />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBar from '../components/LoggedIn/LoggedInAppBar.vue'
export default {
  components: { LoggedInAppBar },
  middleware: 'get-project-current',
  data () {
    return {
      drawer: null
    }
  }
}
</script>
