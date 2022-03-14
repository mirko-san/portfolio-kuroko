<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app bottom temporary>
      <v-list nav>
        <v-list-item>
          <router-link :to="{ name: 'home' }">home</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'works' }">works</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'fanarts' }">fanarts</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'profile' }">profile</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      drawer: false,
    };
  },
});
</script>
