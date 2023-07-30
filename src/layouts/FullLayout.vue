<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        class="page-wrapper"
      >
        <div class="max-width-override">
          <RouterView />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
