import { ref } from "vue";

export const useTasks = () => {
  const newTask = ref("");

  const tasks = ref([]);

  const addMission = () => {
    if (newTask.value.length === 0 || newTask.value.trim() === "") return;

    const addTask = {
      title: newTask.value,
      isDone: false,
      id: Date.now(),
    };

    tasks.value.push(addTask);
    newTask.value = "";
  };

  const deleteTask = (id) => {
    const indexToDelete = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(indexToDelete, 1);
  };

  return {
    newTask,
    tasks,
    addMission,
    deleteTask,
  };
};
