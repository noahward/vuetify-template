<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div class="d-flex flex-column justify-center align-center">
    <div class="my-5">
      <div>
        Count: {{ counterStore.count }}
      </div>
    </div>
    <div>
      <v-btn
        flat
        color="primary"
        @click="counterStore.increment"
      >
        Increment Count
      </v-btn>
    </div>
  </div>
</template>
