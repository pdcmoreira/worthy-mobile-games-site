<script setup lang="ts">
import { type PropType, defineProps, ref } from "vue";

export interface SelectOption {
  id: Number | String;
  label: String;
}

const props = defineProps({
  options: {
    type: Array as PropType<Array<SelectOption>>,

    default: () => [],
  },

  value: {
    type: Object as PropType<SelectOption>,

    default: null,
  },
});

const emit = defineEmits(["update:value"]);

let isOpen = ref(false);

// ClickOutside (vue-click-outside)

const isSelected = (value: SelectOption) => {
  return props.value === value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const openDropdown = () => {
  isOpen.value = true;
};

const select = (value: SelectOption) => {
  isOpen.value = false;

  emit("update:value", value);
};
</script>

<template>
  <!-- v-click-outside="closeDropdown" -->
  <div class="relative">
    <span class="inline-block w-full rounded-md shadow-sm">
      <button
        type="button"
        @click="openDropdown"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="focus:shadow-outline-blue relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
      >
        <div class="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            class="h-6 w-6 flex-shrink-0 rounded-full"
          />
          <span class="block truncate">
            {{ value }}
          </span>
        </div>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M7 7l3-3 3 3m0 6l-3 3-3-3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </span>

    <!-- Select popover, show/hide based on select state. -->
    <div
      v-show="isOpen"
      class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
    >
      <ul
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-item-3"
        class="shadow-xs max-h-56 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
      >
        <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
          -->
        <li
          tabindex="0"
          role="option"
          v-for="option in options"
          :key="option[optionKey]"
          class="relative cursor-default cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white focus:outline-none"
          @click="select(option)"
        >
          <div class="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
              class="h-6 w-6 flex-shrink-0 rounded-full"
            />
            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span
              class="block truncate"
              v-bind:class="{
                'font-normal': !isSelected(option),
                'font-semibold': isSelected(option),
              }"
            >
              {{ option }}
            </span>
          </div>

          <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-indigo-600"
            -->
          <span
            v-show="isSelected(option)"
            class="absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>

        <!-- More options... -->
      </ul>
    </div>
  </div>
</template>
