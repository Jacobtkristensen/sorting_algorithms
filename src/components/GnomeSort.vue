<template>
    <div class="min-h-full">
      <Navbar />
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Gnome Sort</h1>
        </div>
      </header>
  
      <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p class="text-center text-gray-500">This is the Gnome Sort algorithm page. Use the buttons and slider to start visualizing.</p>
          <ButtonGroup
            algorithmName="Gnome"
            @generateArray="generateArray"
            @sortArray="startGnomeSort"
            @updateSpeed="updateSpeed"
          />
          <div class="array-container mt-8 flex justify-center items-end" ref="arrayContainer">
            <div
              v-for="(value, index) in array"
              :key="index"
              class="bar"
              :class="{ highlighted: highlightedBars.includes(index) }"
              :style="{ height: value + 'px', width: barWidth + 'px' }"
            ></div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Navbar from '../components/Navbar.vue'
  import ButtonGroup from '../components/ButtonGroup.vue'
  import { gnomeSort } from '../algorithms/GnomeSort.js'
  
  const array = ref([])
  const barWidth = 20
  const highlightedBars = ref([])
  const speed = ref(100)
  
  const generateArray = () => {
    array.value = []
    for (let i = 0; i < 50; i++) {
      array.value.push(Math.floor(Math.random() * 300) + 50)
    }
    highlightedBars.value = []
  }
  
  const highlightBars = (barsToHighlight, highlight) => {
    highlightedBars.value = highlight ? barsToHighlight : []
  }
  
  const startGnomeSort = () => {
    gnomeSort(array.value, (updatedArray) => {
      array.value = updatedArray
    }, highlightBars, speed.value)
  }
  
  const updateSpeed = (newSpeed) => {
    speed.value = newSpeed
  }
  </script>
  
  <style scoped>
  .array-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 400px;
    margin-top: 20px;
    border: 1px solid #ccc;
  }
  
  .bar {
    background-color: #3490dc;
    margin: 0 2px;
    transition: height 0.2s ease, background-color 0.2s ease;
  }
  
  .bar.highlighted {
    background-color: green; 
  }
  </style>
  