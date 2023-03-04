<script setup lang="ts">
import AndroidIcon from "@/icons/AndroidIcon.vue";
import IosIcon from "@/icons/IosIcon.vue";
import type { Game } from "@/types/Game";
import { tagFromString } from "@/types/Tag";
import GameCard from "@/components/GameCard.vue";
import InputSelect from "@/components/InputSelect.vue";
import type { Platform } from "@/types/Platform";
import type { PropType } from "vue";

defineProps({
  platform: {
    type: String as PropType<Platform>,
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

// TODO: do the mapping right here
const responseData = [
  {
    issueId: 1,
    storeId: "com.fake.aaa",
    name: "AAA",
    iconUrl:
      "https://play-lh.googleusercontent.com/C2GovacOYduxU7dbXRNdNi4NZhNNoox9ALojoTFHTm-D8BO1foe4VaOZFidr7ioO-DE=w240-h480-rw",
    likes: 0,
    tags: [
      "genre: role-playing",
      "genre: action",
      "payment: premium",
      "payment: in-game-dlc",
      "feature: gamepad-support",
    ],
  },
  {
    issueId: 2,
    storeId: "com.fake.bbb",
    name: "BBB",
    iconUrl: "",
    likes: 341,
    tags: ["genre: role-playing", "genre: turn-based"],
  },
];

const games: Game[] = responseData.map((item) => ({
  ...item,

  tags: item.tags.map((tag) => tagFromString(tag)),
}));
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
      :platform="platform"
      class="mb-4"
    />
  </div>
</template>
