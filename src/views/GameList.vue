<script setup lang="ts">
import AndroidIcon from "@/icons/AndroidIcon.vue";
import IosIcon from "@/icons/IosIcon.vue";
import { type Game, GameTagType } from "@/types";
import GameCard from "@/components/GameCard.vue";
import InputSelect from "@/components/InputSelect.vue";

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
    storeId: "com.fake.aaa",
    name: "AAA",
    iconUrl:
      "https://play-lh.googleusercontent.com/C2GovacOYduxU7dbXRNdNi4NZhNNoox9ALojoTFHTm-D8BO1foe4VaOZFidr7ioO-DE=w240-h480-rw",
    likes: 0,
    tags: [
      {
        type: GameTagType.Genre,
        value: "Action RPG",
      },
    ],
  },
  {
    issueId: 2,
    storeId: "com.fake.bbb",
    name: "BBB",
    iconUrl: "",
    likes: 341,
    tags: [],
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

    <InputSelect class="mb-4" />

    <GameCard
      v-for="game in games"
      :key="game.issueId"
      :game="game"
      class="mb-4"
    />
  </div>
</template>
