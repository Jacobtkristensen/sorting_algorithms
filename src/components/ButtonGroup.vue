<template>
    <div class="flex flex-col space-y-4">
      <div class="flex space-x-4">
        <button @click="generateArray" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Generate Array
        </button>
        <button @click="sortArray" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          {{ algorithmName }} Sort
        </button>
      </div>
      <div class="flex items-center space-x-4">
        <label for="speedRange" class="text-gray-700">Sorting Speed:</label>
        <input
          id="speedRange"
          type="range"
          min="1"
          max="500"
          step="10"
          v-model="speed"
          @input="updateSpeed"
          class="slider"
        />
        <span class="text-gray-700">{{ speed }} ms</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    algorithmName: {
      type: String,
      required: true
    }
  })
  
  const emit = defineEmits(['generateArray', 'sortArray', 'updateSpeed'])
  
  const speed = ref(100)
  
  const generateArray = () => {
    emit('generateArray')
  }
  
  const sortArray = () => {
    emit('sortArray')
  }
  
  const updateSpeed = () => {
    emit('updateSpeed', speed.value)
  }
  </script>
  
  <style scoped>
  .slider {
    width: 200px;
  }
  </style>
  