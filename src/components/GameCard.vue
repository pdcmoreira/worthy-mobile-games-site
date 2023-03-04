<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { Platform } from "@/types/Platform";
import type { Game } from "@/types/Game";
import GameIcon from "@/components/GameIcon.vue";
import GameTagBox from "@/components/GameTagBox.vue";
import LikeIcon from "@/icons/LikeIcon.vue";
import getStoreUrl from "@/utilities/getStoreUrl";

const props = defineProps({
  platform: {
    type: String as PropType<Platform>,
    required: true,
  },

  game: {
    type: Object as PropType<Game>,
    required: true,
  },
});

const storeUrl = computed(() =>
  getStoreUrl(props.platform, props.game.storeId)
);

const getTagsOfType = (type: string) =>
  props.game.tags.filter((tag) => tag.type === type);

const genreTags = computed(() => getTagsOfType("genre"));

const paymentTags = computed(() => getTagsOfType("payment"));

const featureTags = computed(() => getTagsOfType("feature"));
</script>

<template>
  <div class="relative flex justify-center">
    <div
      class="mr-4 flex w-32 min-w-fit flex-shrink-0 items-center justify-center"
    >
      <GameIcon :game="game" />
    </div>

    <a
      :href="storeUrl"
      target="_blank"
      class="flex flex-grow rounded-lg border shadow-sm hover:shadow-md"
    >
      <div class="flex flex-grow flex-col overflow-hidden p-4 text-gray-500">
        <h3
          class="min-h-6 w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold"
        >
          {{ game.name }}
        </h3>

        <GameTagBox type="genre" :tags="genreTags" class="mt-2" />

        <GameTagBox type="payment" :tags="paymentTags" class="mt-2" />

        <GameTagBox type="feature" :tags="featureTags" class="mt-2" />
      </div>

      <div class="self-start py-4 pr-4">
        <span
          class="flex rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-800"
        >
          <LikeIcon class="mr-1" /> {{ game.likes }}
        </span>
      </div>
    </a>
  </div>
</template>
