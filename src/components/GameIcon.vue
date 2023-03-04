<script setup lang="ts">
import type { PropType } from "vue";
import GamepadIcon from "@/icons/GamepadIcon.vue";
import type { Game } from "@/types/Game";

defineProps({
  game: {
    type: Object as PropType<Game>,
    required: true,
  },
});
</script>

<template>
  <div
    v-if="game.iconUrl"
    class="h-32 w-32 bg-contain bg-center bg-no-repeat"
    :style="{
      backgroundImage: `url(${game.iconUrl})`,
    }"
  />

  <div
    v-else
    class="flex h-32 w-32 items-center justify-center rounded-3xl bg-gray-200"
  >
    <GamepadIcon class="h-14 w-14 text-gray-400" />
  </div>
</template>
