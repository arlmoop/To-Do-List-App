import { ref, computed } from "vue";

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

  const option_selected = ref("all");

  const filteredTasks = computed(() => {
    if (option_selected.value === "all") {
      return tasks.value;
    } else if (option_selected.value === "todo") {
      return tasks.value.filter((task) => !task.isDone);
    } else if (option_selected.value === "done") {
      return tasks.value.filter((task) => task.isDone);
    } else if (option_selected.value === "high_priority") {
      return tasks.value.filter((task) => task.priority === 3);
    } else if (option_selected.value === "medium_priority") {
      return tasks.value.filter((task) => task.priority === 2);
    } else if (option_selected.value === "low_priority") {
      return tasks.value.filter((task) => task.priority === 1);
    } else {
      return tasks.value;
    }
  });

  return {
    newTask,
    tasks,
    option_selected,
    filteredTasks,
    addMission,
    deleteTask,
    changePriority,
  };
};
