import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import BubbleSort from './components/BubbleSort.vue'
import MergeSort from './components/MergeSort.vue'
import GnomeSort from './components/GnomeSort.vue'
import RadixSort from './components/RadixSort.vue'
import SortSpeed from './components/SortSpeed.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/bubble-sort', name: 'BubbleSort', component: BubbleSort },
  { path: '/merge-sort', name: 'MergeSort', component: MergeSort },
  { path: '/gnome-sort', name: 'GnomeSort', component: GnomeSort },
  { path: '/radix-sort', name: 'RadixSort', component: RadixSort },
  { path: '/sort-speed', name: 'SortSpeed', component: SortSpeed },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
