<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div
      class="bg-white rounded-lg p-6 w-96 relative flex flex-col items-center"
    >
      <img
        src="@/assets/cross-close-window.png"
        class="absolute h-5 w-5 top-3 right-3 cursor-pointer"
        @click="emit('close')"
      />
      <img
        src="@/assets/image-delete-task.png"
        class="w-20 object-contain mt-7"
      />
      <h1 class="text-4xl mt-8">Are you sure ?</h1>
      <p class="text-center text-sm mt-6">
        Do you really want to delete this task? It will be permanently removed.
      </p>
      <div class="mt-5">
        <button
          class="bg-gray-200 text-gray-700 px-4 py-1 rounded-full w-fit mr-3"
          @click="emit('close')"
        >
          Cancel
        </button>
        <button
          class="bg-red-200 text-red-700 px-4 py-1 rounded-full w-fit ml-3"
          @click="confirmDelete()"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close", "delete-task"]);

const confirmDelete = () => {
  emit("delete-task");
  emit("close");
};
</script>
