<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { GameTag } from "@/types";
import { GameTagType } from "@/types";

const props = defineProps({
  tag: { type: Object as PropType<GameTag>, required: true },
});

const badgeClass = computed(
  (): "badge-primary" | "badge-accent" | "badge-secondary" | null => {
    switch (props.tag.type) {
      case GameTagType.Genre:
        return "badge-primary";
      case GameTagType.Payment:
        return "badge-accent";
      case GameTagType.Feature:
        return "badge-secondary";
      default:
        return null;
    }
  }
);
</script>

<template>
  <div class="badge" :class="badgeClass">
    {{ props.tag.value }}
  </div>
  <!-- <div class="badge badge-primary">primary</div>
<div class="badge badge-secondary">secondary</div>
<div class="badge badge-accent">accent</div>
<div class="badge badge-ghost">ghost</div> -->
</template>
