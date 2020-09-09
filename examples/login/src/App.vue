<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
         <h2>Test Cypress</h2>
      </div>
    </v-app-bar>

    <v-main>
      <transition name="fade" mode="out-in">
        <!-- Load the component defined in the router for the current route -->
        <RouterView />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Form from '@/components/Login.vue'

@Component({
  components: {
    Form
  }
})
export default class App extends Vue {}
</script>
