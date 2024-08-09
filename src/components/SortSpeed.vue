<template>
    <div class="min-h-full">
        <Navbar />
        <header class="bg-white shadow w-full">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">Sort Speed Comparison</h1>
            </div>
        </header>

        <main class="flex mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="w-2/3 pr-4">
                <p class="text-center text-gray-500 mb-4">Compare the speed of the 4 different sorting algorithms.</p>
                <div class="flex justify-center items-center mb-4">
                    <label for="arraySize" class="mr-2">Array Size:</label>
                    <input id="arraySize" type="range" v-model.number="arraySize" min="10" max="2000"
                        class="slider w-48 h-2 bg-gray-200 rounded-lg cursor-pointer" />
                    <span class="ml-2">{{ arraySize }}</span>
                    <button @click="generateArray"
                        class="ml-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Generate Array
                    </button>
                </div>
                <div class="flex justify-center items-center mb-4">
                    <label for="algorithm" class="mr-2">Select Algorithm:</label>
                    <select id="algorithm" v-model="selectedAlgorithm" class="border rounded p-1">
                        <option value="Bubble">Bubble Sort</option>
                        <option value="Gnome">Gnome Sort</option>
                        <option value="Merge">Merge Sort</option>
                        <option value="Radix">Radix Sort</option>
                    </select>
                </div>
                <div class="flex justify-center">
                    <button @click="startSort" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
                        Start Sorting
                    </button>
                </div>
                <div class="mt-4 text-center">
                    <p>Speed: {{ speed }} ms</p>
                    <p>Operations: {{ operations }}</p>
                </div>
                <Modal v-if="showModal" :show="showModal" :message="modalMessage" @close="showModal = false" />
            </div>
            <div class="w-1/3 bg-gray-100 p-4">
                <h2 class="text-2xl font-bold mb-4">Results</h2>
                <textarea v-model="results" class="w-full h-full border rounded p-2" readonly></textarea>
            </div>
        </main>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Modal from '../components/Modal.vue'
import { bubbleSortOG } from '../algorithms/BubbleSort.js'
import { gnomeSortOG } from '../algorithms/GnomeSort.js'
import { mergeSortOG } from '../algorithms/MergeSort.js'
import { radixSortOG } from '../algorithms/RadixSort.js'

const array = ref([])
const arraySize = ref(50)
const speed = ref(0)
const operations = ref(0)
const selectedAlgorithm = ref('Bubble')
const showModal = ref(false)
const modalMessage = ref('')
const results = ref('')

const generateArray = () => {
    array.value = []
    for (let i = 0; i < arraySize.value; i++) {
        array.value.push(Math.floor(Math.random() * 300) + 50)
    }
    speed.value = 0
    operations.value = 0
    showModal.value = true
    modalMessage.value = `Array generated with ${arraySize.value} elements`
}

const logResult = () => {
    const newResult = `Algorithm: ${selectedAlgorithm.value}\nArray Size: ${arraySize.value}\nSpeed: ${speed.value} ms\nOperations: ${operations.value}\n\n`
    results.value = newResult + results.value  // smid resultater øverst i textarea
}

const startSort = () => {
    const arrayCopy = [...array.value]  // sikrer at vi ikke endrer på originale array så det kan gentages flere gange 
    const startTime = performance.now()
    operations.value = 0

    switch (selectedAlgorithm.value) {
        case 'Bubble':
            operations.value = bubbleSortOG(arrayCopy)
            break
        case 'Gnome':
            operations.value = gnomeSortOG(arrayCopy)
            break
        case 'Merge':
            operations.value = mergeSortOG(arrayCopy)
            break
        case 'Radix':
            operations.value = radixSortOG(arrayCopy)
            break
    }

    const endTime = performance.now()
    speed.value = (endTime - startTime).toFixed(2)

    logResult()
}
</script>

<style scoped></style>