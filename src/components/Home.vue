<template>
    <div class="min-h-full">
      <Navbar />
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Algorithm Visualizer</h1>
        </div>
      </header>
  
      <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p class="text-center text-gray-500">Please interact with the menu at the top to select an algorithm.</p>
        </div>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-4">Project Description</h2>
            <p>This project was developed as part of an exam for the course "Data Structures and Algorithms" at KEA (Copenhagen School of Design and Technology). The primary objective of this project is to demonstrate the understanding and practical implementation of various sorting algorithms, including Merge Sort, Bubble Sort, Gnome Sort, and Radix Sort.</p>
            <h3 class="text-xl font-bold mt-4">The project includes:</h3>
            <ul class="list-disc list-inside ml-6">
              <li><strong>Visualization of Sorting Algorithms:</strong>
                <ul class="list-disc list-inside ml-6">
                  <li><strong>Merge Sort:</strong> A divide-and-conquer algorithm that recursively splits the array into halves and merges them in sorted order.</li>
                  <li><strong>Bubble Sort:</strong> A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</li>
                  <li><strong>Gnome Sort:</strong> A sorting algorithm similar to insertion sort except that moving an element to its proper place is accomplished by a series of swaps, similar to a gnome sorting garden.</li>
                  <li><strong>Radix Sort:</strong> A non-comparative sorting algorithm that sorts numbers by processing individual digits.</li>
                </ul>
              </li>
            </ul>
            <h3 class="text-xl font-bold mt-4">Key Features</h3>
            <ul class="list-disc list-inside ml-6">
              <li><strong>Interactive User Interface:</strong> Implemented using Vue.js, Tailwind CSS, and Vue Router, this project provides a way to interact with the sorting algorithms.</li>
              <li><strong>Algorithm Visualization:</strong> Each algorithm's sorting process is visualized with bars representing array elements, providing a clear and engaging way to understand how each algorithm operates.</li>
              <li><strong>Speed Adjustment:</strong> A slider allows users to adjust the speed of the sorting animations, making it easier to follow the steps of each algorithm.</li>
            </ul>
          </div>
        </div>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-center items-center space-x-8">
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
            <img src="/tailwind.svg" alt="Tailwind CSS Logo" class="h-12">
          </a>
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
            <img src="/vuejs.svg" alt="Vue.js Logo" class="h-12">
          </a>
        </div>
      </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import Navbar from '../components/Navbar.vue'
  </script>
  
  <style scoped>
  </style>
  