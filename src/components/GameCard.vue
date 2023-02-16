<script setup lang="ts">
import type { Game } from "@/types";
import { computed, type PropType } from "vue";

const props = defineProps({
  game: { type: Object as PropType<Game>, required: true },
});

const rating = computed(() => 5);
</script>

<template>
  <div
    class="w-full rounded-md border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800"
  >
    Game
  </div>
</template>
