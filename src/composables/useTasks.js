import { ref } from "vue";

export const useTasks = () => {
  const MAX_PRIORITY = 3;

  const newTask = ref("");

  const tasks = ref([]);

  const addMission = () => {
    if (newTask.value.length === 0 || newTask.value.trim() === "") return;

    const addTask = {
      title: newTask.value,
      isDone: false,
      id: Date.now(),
      priority: 1,
    };

    tasks.value.push(addTask);
    newTask.value = "";
  };

  const deleteTask = (id) => {
    const indexToDelete = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(indexToDelete, 1);
  };

  const changePriority = (task) => {
    if (task.priority === MAX_PRIORITY) {
      task.priority = 1;
    } else {
      task.priority++;
    }
  };

  return {
    newTask,
    tasks,
    addMission,
    deleteTask,
    changePriority,
  };
};
