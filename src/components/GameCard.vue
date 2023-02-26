<script setup lang="ts">
import { type Game, GameTagType } from "@/types";
import { computed, type PropType } from "vue";
import GameTag from "./GameTag.vue";
import LikeIcon from "@/icons/LikeIcon.vue";
import GameIcon from "@/icons/GameIcon.vue";

const props = defineProps({
  game: { type: Object as PropType<Game>, required: true },
});

// TODO: do this when mapping API results to Game
// const resolveTag = (tag: string): [string, string] | null => {
//   const match = tag.match(/^(.+): (.+)$/);

//   if (!match) {
//     return null;
//   }

//   return [match[1], match[2]];
// };

const getTagsOfType = (type: GameTagType) =>
  props.game.tags.filter((tag) => tag.type === type);

const genreTags = computed(() => getTagsOfType(GameTagType.Genre));

const paymentTags = computed(() => getTagsOfType(GameTagType.Payment));

const featureTags = computed(() => getTagsOfType(GameTagType.Feature));
</script>

<template>
  <div class="relative flex h-32 justify-center rounded-sm border shadow-sm">
    <!-- TODO: "detach" it from the card (no background + margin right) -->
    <!-- Make the default GameIcon a squircle -->
    <div
      class="flex w-32 min-w-fit flex-shrink-0 items-center justify-center bg-gray-100"
    >
      <div
        v-if="game.iconUrl"
        class="h-full w-full bg-contain bg-center bg-no-repeat"
        :style="{
          backgroundImage: `url(${game.iconUrl})`,
        }"
      />

      <GameIcon v-else class="h-14 w-14 text-gray-400" />
    </div>

    <div class="flex flex-grow flex-col overflow-hidden p-4 text-gray-500">
      <h3
        class="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold"
      >
        {{ game.name }} (1 line)
      </h3>

      <p
        class="mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-400"
      >
        Genre:

        <GameTag v-for="tag in genreTags" :key="tag.value" :tag="tag" />
      </p>

      <p
        class="mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-400"
      >
        Payment:

        <GameTag v-for="tag in paymentTags" :key="tag.value" :tag="tag" />
      </p>

      <p
        class="mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-400"
      >
        Features:

        <GameTag v-for="tag in featureTags" :key="tag.value" :tag="tag" />
      </p>
    </div>

    <div class="self-start py-4 pr-4">
      <span
        class="flex rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-800"
      >
        <LikeIcon class="mr-1" /> {{ game.likes }}
      </span>
    </div>
  </div>
</template>
