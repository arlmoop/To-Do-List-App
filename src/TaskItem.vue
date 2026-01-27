<template>
  <li class="flex justify-between items-center px-6 py-2 rounded-lg mb-3 mx-4">
    <span class="flex-1 text-left wrap-break-word pr-2">
      {{ props.title }}
    </span>

    <span
      class="flex flex-row bg-white border-2 border-gray-300 rounded-full mr-10 px-4 py-1 select-none cursor-pointer items-center"
      @click="changePriority()"
      ><div
        class="w-3 h-3 rounded-full bg-red-400 mr-2"
        :class="bg_circle"
      ></div>
      {{ text_priority }} Priority</span
    >

    <div class="flex items-center space-x-2">
      <input
        type="checkbox"
        :checked="props.isDone"
        @change="toggleDone"
        class="w-5 h-5"
      />

      <button @click="deleteTask()" class="p-1">
        <img src="@/assets/trash-icon.ico" alt="Delete" class="w-6 h-6" />
      </button>
    </div>
  </li>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  id: Number,
  title: String,
  isDone: Boolean,
  priority: Number,
});

const emit = defineEmits(["toggle-task", "delete-task", "change-priority"]);

const toggleDone = (event) => {
  emit("toggle-task", event.target.checked);
};

const deleteTask = () => {
  emit("delete-task");
};

const changePriority = () => {
  emit("change-priority");
};

const text_priority = computed(() => {
  if (props.priority === 1) {
    return "Low";
  } else if (props.priority === 2) {
    return "Medium";
  } else {
    return "High";
  }
});

const bg_circle = computed(() => {
  if (props.priority === 1) {
    return "bg-blue-400";
  } else if (props.priority === 2) {
    return "bg-yellow-400";
  } else {
    return "bg-red-400";
  }
});
</script>
