<template>
  <html class="h-full font-sans">
    <body class="min-h-screen bg-background pt-7">
      <h1 class="text-5xl font-extrabold text-center mb-8 text-gray-800 mb-10">📝 TO-DO LIST APP</h1>

      <div class="task-builder ml-20 mb-10">
        <input class="flex-1 px-4 py-2 rounded-lg border border-gray-300 
           focus:outline-none focus:ring-2 focus:ring-blue-500" v-model="newTask" placeholder="Add a new task"/>
        <button class="px-3 bg-background_builder hover:bg-background_builder_hover" @click="addMission">Add task</button>
      </div>

      <ul class="list-disc pl-10">
        <TaskItem
          v-for="task in tasks" :key="task"
          :mission=task.mission 
          :done=task.done
          @toggle-task="task.done = $event"
          @delete-task="deleteTask(task.mission)" />
      </ul>
    </body>
  </html>
</template>

<script setup>
  import { ref } from 'vue'
  import TaskItem from './TaskItem.vue'

  const newTask = ref("")

  const task = ref({
    mission: "",
    done: false
  })
  const tasks = ref([])

  const addMission = () => {
    if (newTask.value.length == 0) return

    const addTask = {
      mission: newTask.value,
      done: false
    }

    tasks.value.push(addTask)
    newTask.value = ""
  }

  const deleteTask = (mission) => {
    const indexToDelete = tasks.value.findIndex(task => task.mission == mission)
    tasks.value.splice(indexToDelete, 1)
  }
</script>

<style scoped>
  div.task-builder input {
    height: 30px;
    border-radius: 10px;
    border: 2px solid black;
    margin-right: 10px;
  }

  div.task-builder button {
    height: 30px;
    border-radius: 10px;
    border: 2px solid black;
  }
</style>