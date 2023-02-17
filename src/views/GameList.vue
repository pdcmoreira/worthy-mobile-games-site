<script setup lang="ts">
import AndroidIcon from "@/icons/AndroidIcon.vue";
import IosIcon from "@/icons/IosIcon.vue";
import type { Game } from "@/types";
import GameCard from "@/components/GameCard.vue";

defineProps({
  platform: {
    type: String,
    required: true,
  },
});

const tabs = [
  {
    name: "Android",
    route: "/android",
    icon: AndroidIcon,
  },
  {
    name: "iOS",
    route: "/ios",
    icon: IosIcon,
  },
];

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
  <div>
    <div class="tabs my-4">
      <RouterLink
        v-for="{ name, route, icon } in tabs"
        :key="route"
        :to="route"
        class="tab tab-bordered"
        exact-active-class="tab-active"
      >
        <component :is="icon" class="mr-2" />

        {{ name }}
      </RouterLink>
    </div>

    <GameCard
      v-for="game in games"
      :key="game.issueId"
      :game="game"
      class="mb-4"
    />
  </div>
</template>
