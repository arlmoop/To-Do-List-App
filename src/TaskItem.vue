<template>
  <li
    class="flex justify-between items-center bg-blue-100 px-6 py-2 rounded-lg mb-3 mx-4"
  >
    <span class="flex-1 text-left">
      {{ props.title }}
    </span>

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
const props = defineProps({
  title: String,
  isDone: Boolean,
  id: Number,
});

const emit = defineEmits(["toggle-task", "delete-task"]);

const toggleDone = (event) => {
  emit("toggle-task", event.target.checked);
};

const deleteTask = () => {
  emit("delete-task");
};
</script>
