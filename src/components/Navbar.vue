<template>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </router-link>
            </div>
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/bubble-sort" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Bubble Sort</router-link>
              <router-link to="/merge-sort" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Merge Sort</router-link>
              <router-link to="/gnome-sort" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Gnome Sort</router-link>
              <router-link to="/radix-sort" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Radix Sort</router-link>
              <router-link to="/sort-speed" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sort Speed</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  