import { ref, computed } from "vue";

export const useTasks = () => {
  const MAX_PRIORITY = 3;

  const newTask = ref("");

  // INITIALISATION DE LA LISTE DE TACHES A 0
  const tasks = ref([]);

  /* INIALISATION DE LA LISTE AVEC DES EXEMPLES 
  const makeTask = (title, daysAgo, isDone, priority) => {
    const now = Date.now();
    const taskId = now - daysAgo * 24 * 60 * 60 * 1000;

    return {
      title,
      isDone,
      id: taskId,
      priority,
      dateString: new Date(taskId).toLocaleDateString("fr-FR"),
    };
  };

  const tasks = ref([
    makeTask("Learn Vue 3", 0, false, 1),
    makeTask("Build Todo UI", 1, true, 2),
    makeTask("Fix filtering logic", 2, false, 3),
    makeTask("Add delete confirmation", 3, true, 2),
    makeTask("Improve UX", 4, false, 1),
    makeTask("Refactor composables", 5, true, 3),
    makeTask("Style select component", 6, false, 2),
    makeTask("Add priorities", 7, true, 1),
    makeTask("Test edge cases", 8, false, 3),
    makeTask("Polish animations", 9, true, 2),
  ]); */

  const addMission = () => {
    if (newTask.value.length === 0 || newTask.value.trim() === "") return;

    const taskId = Date.now();

    const addTask = {
      title: newTask.value,
      isDone: false,
      id: taskId,
      state: "to-do",
      priority: 1,
      dateString: new Date(taskId).toLocaleDateString("fr-FR"),
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

  const changeState = (task) => {
    if (task.state === "to-do") {
      task.state = "in-progress";
    } else if (task.state === "in-progress") {
      task.state = "done";
    } else if (task.state === "done") {
      task.state = "to-do";
    } else {
      task.state = "to-do";
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
    changeState,
  };
};
