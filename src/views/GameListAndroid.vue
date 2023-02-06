<script setup lang="ts">
import type { Game } from "@/types";
import GameCard from "@/components/GameCard.vue";

// TODO: implement in store
const games: Game[] = [
  {
    issueId: 1,
    name: "AAA",
    totalReactions: 0,
  },
  {
    issueId: 2,
    name: "BBB",
    totalReactions: 3,
  },
];
</script>

<template>
  <GameCard v-for="game in games" :key="game.issueId" :game="game" />
</template>
