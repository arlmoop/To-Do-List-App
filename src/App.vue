<template>
  <div
    class="font-poppins min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-400 to-blue-200 pb-20"
  >
    <h1 class="text-3xl font-bold text-center text-white py-10">
      TO-DO LIST APP
    </h1>

    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
      <div
        class="grid grid-cols-4 max-[810px]:grid-cols-2 gap-10 mb-6 max-[810px]:grid-cols-2"
      >
        <div class="flex-1 flex justify-center">
          <p class="text-purple-700 bg-purple-200 px-4 py-1 rounded-full w-fit">
            Total : {{ tasks.length }}
          </p>
        </div>

        <div class="flex-1 flex justify-center">
          <p class="text-blue-700 bg-sky-200 px-4 py-1 rounded-full w-fit">
            To Do :
            {{ tasks.filter((task) => task.state === "to-do").length }}
          </p>
        </div>

        <div class="flex-1 flex justify-center">
          <p class="text-orange-700 bg-orange-200 px-4 py-1 rounded-full w-fit">
            In Progress :
            {{ tasks.filter((task) => task.state === "in-progress").length }}
          </p>
        </div>

        <div class="flex-1 flex justify-center">
          <p class="text-green-700 bg-green-200 px-4 py-1 rounded-full w-fit">
            Completed :
            {{ tasks.filter((task) => task.state === "done").length }}
          </p>
        </div>
      </div>

      <div class="flex w-full max-w-5xl mx-auto mb-5">
        <input
          v-model="newTask"
          placeholder="Add a new task"
          class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-0 focus:ring-blue-400 focus:border-blue-400 focus:border-gray-300"
          @keyup.enter="addMission"
        />

        <button
          @click="addMission"
          class="transition border border-gray-300 border-l-0 rounded-r-lg px-3 py-2 flex items-center justify-center"
        >
          <img
            src="@/assets/arrow-icon.ico"
            alt="Add"
            class="w-6 h-6 select-none"
          />
        </button>
      </div>

      <select
        v-model="option_selected"
        class="bg-gray-200 focus:ring-0 border-none border-gray-700 px-4 py-1 rounded-full w-fit mb-1 ml-5 text-gray-700 text-center focus:outline-none shadow-sm"
      >
        <option value="all">All</option>
        <option value="done">Completed</option>
        <option value="in_progress">In Progress</option>
        <option value="to_do">To Do</option>
        <option value="high_priority">High Priority</option>
        <option value="medium_priority">Medium Priority</option>
        <option value="low_priority">Low Priority</option>
      </select>

      <ul>
        <TaskItem
          v-for="(task, index) in filteredTasks"
          :key="index"
          :title="task.title"
          :isDone="task.isDone"
          :state="task.state"
          :id="task.id"
          :priority="task.priority"
          :dateString="task.dateString"
          @toggle-task="task.isDone = $event"
          @delete-task="deleteTask(task.id)"
          @change-priority="changePriority(task)"
          @change-state="changeState(task)"
          class="mt-2 max-[810px]:text-xs"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TaskItem from "./TaskItem.vue";
import { useTasks } from "./composables/useTasks.js";

const {
  newTask,
  tasks,
  option_selected,
  filteredTasks,
  addMission,
  deleteTask,
  changePriority,
  changeState,
} = useTasks();
</script>
