import { ref, computed } from "vue";

export const useTasks = () => {
  const MAX_PRIORITY = 3;

  const newTask = ref("");

  // INITIALISATION DE LA LISTE DE TACHES A 0
  // const tasks = ref([]);

  /* INIALISATION DE LA LISTE AVEC DES EXEMPLES */
  const makeTask = (title, daysAgo, taskState, priority) => {
    const now = Date.now();
    const taskId = now - daysAgo * 24 * 60 * 60 * 1000;

    return {
      title,
      state: taskState,
      id: taskId,
      priority,
      dateString: new Date(taskId).toLocaleDateString("fr-FR"),
    };
  };

  const tasks = ref([
    makeTask("Learn Vue 3", 0, "to-do", 1),
    makeTask("Build Todo UI", 1, "in-progress", 2),
    makeTask("Fix filtering logic", 2, "to-do", 3),
    makeTask("Add delete confirmation", 3, "done", 2),
    makeTask("Improve UX", 4, "done", 1),
    makeTask("Refactor composables", 5, "done", 3),
    makeTask("Style select component", 6, "in-progress", 2),
    makeTask("Add priorities", 7, "in-progress", 1),
    makeTask("Test edge cases", 8, "done", 3),
    makeTask("Polish animations", 9, "to-do", 2),
    makeTask(
      "dzeubduzd zhd zd zie dz dh zje dize dz djkze dihz dizd dzeubduzd zhd zd zie dz dh zje dize dz djkze dihz dizd",
      9,
      "to-do",
      2,
    ),
  ]);

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
    } else if (option_selected.value === "to_do") {
      return tasks.value.filter((task) => task.state === "to-do");
    } else if (option_selected.value === "in_progress") {
      return tasks.value.filter((task) => task.state === "in-progress");
    } else if (option_selected.value === "done") {
      return tasks.value.filter((task) => task.state === "done");
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

  const cleanAll = () => {
    tasks.value = [];
  };

  return {
    newTask,
    tasks,
    option_selected,
    filteredTasks,
    addMission,
    deleteTask,
    changePriority,
    changeState,
    cleanAll,
  };
};
