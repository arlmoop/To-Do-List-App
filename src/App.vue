<template>
  <div
    class="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-400 to-blue-200 pb-20"
  >
    <h1 class="text-3xl font-bold text-center text-white py-10">
      TO-DO LIST APP
    </h1>

    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
      <div class="flex flex-row gap-10 mb-6">
        <div class="flex-1 flex justify-center">
          <p class="text-purple-700 bg-purple-200 px-4 py-1 rounded-full w-fit">
            Total : {{ tasks.length }}
          </p>
        </div>

        <div class="flex-1 flex justify-center">
          <p class="text-green-700 bg-green-200 px-4 py-1 rounded-full w-fit">
            Completed : {{ tasks.filter((task) => task.isDone).length }}
          </p>
        </div>

        <div class="flex-1 flex justify-center">
          <p class="text-orange-700 bg-orange-200 px-4 py-1 rounded-full w-fit">
            Pending : {{ tasks.filter((task) => !task.isDone).length }}
          </p>
        </div>
      </div>

      <div class="flex items-center w-full max-w-5xl mx-auto mb-5">
        <input
          v-model="newTask"
          placeholder="Add a new task"
          class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-0 focus:ring-blue-400 focus:border-blue-400 focus:border-gray-300"
        />

        <button
          @click="addMission"
          class="transition border border-gray-300 border-l-0 rounded-r-lg px-3 py-2 flex items-center justify-center"
        >
          <img src="@/assets/arrow-icon.ico" alt="Add" class="w-6 h-6" />
        </button>
      </div>

      <ul>
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TaskItem from "./TaskItem.vue";
import { useTasks } from "./composables/useTasks.js";

const { newTask, tasks, addMission, deleteTask } = useTasks();
</script>
