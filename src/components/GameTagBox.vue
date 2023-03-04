<script setup lang="ts">
import type { PropType } from "vue";
import type { Tag } from "@/types/Tag";
import type { TagType } from "@/types/TagType";
import GameTag from "@/components/GameTag.vue";
import TagTypeIcon from "@/components/TagTypeIcon.vue";

defineProps({
  type: {
    type: String as PropType<TagType>,
    required: true,
  },

  tags: {
    type: Array as PropType<Tag[]>,
    default: () => [],
  },
});
</script>

<template>
  <div
    class="flex h-5 items-center overflow-ellipsis whitespace-nowrap text-sm text-gray-400"
  >
    <TagTypeIcon :type="type" class="mr-1" />

    <template v-if="tags.length">
      <GameTag v-for="tag in tags" :key="tag.value" :tag="tag" class="ml-1" />
    </template>

    <div v-else class="ml-1 w-16 border" />
  </div>
</template>
