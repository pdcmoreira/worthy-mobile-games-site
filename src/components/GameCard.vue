<script setup lang="ts">
import type { Game } from "@/types";
import { computed, type PropType } from "vue";
import LikeIcon from "@/icons/LikeIcon.vue";
import GameIcon from "@/icons/GameIcon.vue";

const props = defineProps({
  game: { type: Object as PropType<Game>, required: true },
});

const getTagType = (tag: string) => {
  const match = tag.match(/^(.+): (.+)$/);

  if (!match) {
    return null;
  }

  return {
    type: match[1],
    value: match[2],
  };
};

// (pseudo-thinking)
// TODO: think this through: data structure and typing
const resolvedTags = computed(() => {
  const result = {
    genres: [],
    payments: [],
    features: [],
  };

  props.game.tags.forEach((tag) => {
    const { type, value } = getTagType(tag);

    result[type].push(value);
  });

  return result;
});
</script>

<template>
  <div class="relative flex h-32 justify-center rounded-sm border shadow-sm">
    <!-- Maybe "detach" it from the card (no background + margin right) -->
    <div
      class="flex w-32 min-w-fit flex-shrink-0 items-center justify-center bg-gray-100"
    >
      <GameIcon class="h-14 w-14 text-gray-400" />
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
        (2 lines)
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
