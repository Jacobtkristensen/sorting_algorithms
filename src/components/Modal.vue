<template>
    <div v-if="show" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="text-center">
          <p>{{ message }}</p>
          <button @click="close" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    show: Boolean,
    message: String
  })
  
  const emit = defineEmits(['close'])
  
  const close = () => {
    emit('close')
  }
  </script>
  
  <style scoped>
  </style>
  