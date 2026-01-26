<template>
  <li
    class="bg-background_li lg:max-w-4xl md:max-w-3xl sm:max-w-2xl"
    :class="props.isDone ? 'bg-green-500' : ''"
  >
    {{ props.title }}

    <input
      class="ml-4"
      type="checkbox"
      :checked="isDone"
      @change="toggleDone"
    />

    <button
      class="bg-background_delete_button hover:bg-background_delete_button_hover border-2 border-black rounded-lg ml-2 px-3"
      @click="deleteTask()"
    >
      Delete Task
    </button>
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
