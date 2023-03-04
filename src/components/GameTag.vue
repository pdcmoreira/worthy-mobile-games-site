<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { Tag } from "@/types/Tag";

const props = defineProps({
  tag: {
    type: Object as PropType<Tag>,
    required: true,
  },
});

const badgeClass = computed((): string | null => {
  switch (props.tag.type) {
    case "genre":
      return "badge-primary";
    case "payment":
      return "badge-accent";
    case "feature":
      return "badge-secondary";
    default:
      return null;
  }
});
</script>

<template>
  <div class="badge rounded-md" :class="badgeClass">
    {{ $t(`tags.${tag.value}`) }}
  </div>
</template>
