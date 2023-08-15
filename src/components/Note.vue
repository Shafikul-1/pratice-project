<script setup>
import { ref, reactive } from 'vue'
const NoteHeading = ref('')
const NoteDescription = ref('')
const NoteImg = ref('')
const noteContent = reactive([])

const openOrclose = ref(false)
function noteView(){
    openOrclose.value = !openOrclose.value
}

function addNote(){
    noteContent.push({
        id: Math.floor(Math.random()* 10000),
        image: NoteImg.value,
        heading: NoteHeading.value,
        description: NoteDescription.value,
        bgColor : `rgb(${Math.floor(Math.random()*900)} ${Math.floor(Math.random()*300)} ${Math.floor(Math.random()*80)})`,
        date: new Date()
    })
    openOrclose.value = false
    NoteHeading.value = ''
    NoteDescription.value = ''
    NoteImg.value = ''
}

// Style  Convert to Vue
const btn = 'font-bold text-md bg-indigo-300 border-2 py-2 px-10 rounded border-green-600 hover:bg-indigo-600 hover:text-white'
const areaText = 'focus:outline-none py-3 px-5 shadow-lg shadow-indigo-300 my-6  border-2 rounded'
const headInp = 'border-2 px-5 py-2 rounded border-indigo-300'

</script>

<template>
    <!-- Add Icon And Toggle -->
   <div class="relative">
    <div class="">
        <img @click="noteView" src="https://www.svgrepo.com/show/2825/add-symbol.svg" class="absolute w-[2rem] h-[2rem] right-10 cursor-pointer" alt="">
    </div>
   </div>

   <!-- Design Section Write -->
   <h1 class="font-bold text-3xl my-5">Note Your</h1>
  <div class="flex flex-wrap">
    <div class="" v-for="noteText in noteContent" :key="noteText.id">
        <div class="w-[20rem] mt-10 border-2 shadow-md shadow-gray-300 px-4 py-5 rounded mx-3" :style="{ backgroundColor: noteText.bgColor}">
            <img :src="noteText.image" alt="">
            <h2 class="font-bold text-2xl my-2">{{ noteText.heading }}</h2>
            <p >{{ noteText.description }}</p>
            <hr class="my-4">
            <code>Date : {{ noteText.date.toLocaleDateString("en-US") }}</code><br>
            <code>Time : {{ noteText.date.toLocaleTimeString("en-US") }}</code><br>
        </div>
   </div>
  </div>

   <!-- Prompt Section -->
   <div class="note  " v-show="openOrclose"> 
    <div class="bg-indigo-200 absolute p-4 rounded-md shadow-md shadow-zinc-600 top-[5rem] left-[20rem]">
        <div class="flex">
           <input v-model="NoteHeading" type="text" :class="headInp" placeholder="Enter Your Note Heading">
           <img @click="openOrclose = false" src="https://www.svgrepo.com/download/178323/cross-close.svg" alt="" class="w-[1rem] h-[1rem] absolute right-3 cursor-pointer">
        </div>
        <input type="text" v-model="NoteImg" placeholder="Imge Link Insart" name="" class="mt-3" :class="headInp" id="">
       <div class="description">
        <textarea v-model="NoteDescription" name="" :class="areaText" placeholder="Enter Your Note Description" id="" cols="60" rows="10"></textarea>
       </div>
        <div class="flex gap-5">
            <button @click="addNote()" class="" :class="btn">Add</button>
            <button @click="openOrclose = false" :class="btn">Close</button>
        </div>
    </div>
   </div>

</template>

<style scoped>

</style>