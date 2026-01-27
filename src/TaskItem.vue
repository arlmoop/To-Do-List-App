<template>
  <li class="flex justify-between items-center px-6 py-2 rounded-lg mb-3 mx-4">
    <span class="flex-1 text-left wrap-break-word pr-2">
      {{ props.title }}
    </span>

    <span
      class="flex flex-row bg-white border-2 border-gray-300 rounded-full mr-10 px-4 py-1 select-none cursor-pointer items-center"
      @click="changePriority()"
      ><div class="w-3 h-3 rounded-full mr-2" :class="bg_circle"></div>
      {{ text_priority }} Priority</span
    >

    <div class="mr-8">{{ props.dateString }}</div>

    <div class="flex items-center space-x-2">
      <img
        :src="'/images/' + icon_state_path"
        @click="changeState()"
        class="w-6 h-6 mr-4"
      />

      <button @click="show_delete_task = true" class="p-1">
        <img src="@/assets/trash-icon.ico" alt="Delete" class="w-6 h-6" />
      </button>

      <ConfirmDelete
        v-if="show_delete_task"
        @close="show_delete_task = false"
        @delete-task="deleteTask"
      />
    </div>
  </li>
</template>

<script setup>
import { ref, computed } from "vue";
import ConfirmDelete from "./ConfirmDelete.vue";

const show_delete_task = ref(false);

const props = defineProps({
  id: Number,
  title: String,
  isDone: Boolean,
  state: String,
  priority: Number,
  dateString: String,
});

const emit = defineEmits([
  "toggle-task",
  "delete-task",
  "change-priority",
  "change-state",
]);

const toggleDone = (event) => {
  emit("toggle-task", event.target.checked);
};

const deleteTask = () => {
  emit("delete-task");
};

const changePriority = () => {
  emit("change-priority");
};

const changeState = () => {
  emit("change-state");
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

const status_text = computed(() => {
  if (props.state === "to-do") {
    return "To-Do";
  } else if (props.state === "in-progress") {
    return "In Progress";
  } else {
    return "Done";
  }
});

const icon_state_path = computed(() => {
  console.log(props.state);
  if (props.state === "to-do") {
    return "task-to-do.png";
  } else if (props.state === "in-progress") {
    return "task-in-progress.png";
  } else if (props.state === "done") {
    return "task-done.png";
  } else {
    return "task-to-do.png";
  }
});
</script>
