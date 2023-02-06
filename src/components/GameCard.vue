<script setup lang="ts">
import type { Game } from "@/types";
import type { PropType } from "vue";

const props = defineProps({
  game: { type: Object as PropType<Game>, required: true },
});
</script>

<template>
  <div>Game</div>
</template>
