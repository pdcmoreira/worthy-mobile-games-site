<script setup lang="ts">
import IosIcon from "@/icons/IosIcon.vue";
import AndroidIcon from "@/icons/AndroidIcon.vue";
</script>

<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      class="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400"
    >
      <li class="mr-2">
        <a
          href="#"
          class="active group inline-flex rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
          aria-current="page"
        >
          <AndroidIcon class="mr-3" /> Android
        </a>
      </li>

      <li class="mr-2">
        <a
          href="#"
          class="group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <IosIcon class="mr-3" /> iOS
        </a>
      </li>
    </ul>
  </div>

  <RouterView />
</template>
