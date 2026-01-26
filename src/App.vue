<template>
  <html class="h-full font-sans min-h-screen bg-background pt-7">
    <h1 class="text-5xl font-extrabold text-center mb-8 text-gray-800 mb-10">
      📝 TO-DO LIST APP
    </h1>

    <div class="task-builder ml-20 mb-10">
      <input
        class="px-3 rounded-lg border-2 border-black focus:border-black focus:outline-none"
        v-model="newTask"
        placeholder="Add a new task"
      />
      <button
        class="px-3 bg-background_builder hover:bg-background_builder_hover"
        @click="addMission"
      >
        Add task
      </button>
    </div>

    <ul class="list-disc pl-10">
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :title="task.title"
        :isDone="task.isDone"
        :id="task.id"
        @toggle-task="task.isDone = $event"
        @delete-task="deleteTask(task.id)"
      />
    </ul>
  </html>
</template>

<script setup>
import { ref } from "vue";
import { useTasks } from "./composables/useTasks.js";

const { newTask, tasks, addMission, deleteTask } = useTasks();
</script>
