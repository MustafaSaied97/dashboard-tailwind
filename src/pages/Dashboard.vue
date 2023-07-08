<template>
   <div class="flex w-screen h-screen text-white">

      <div id="sideBard" class="w-[0px] lg:w-[400px] lg:transition-all duration-100 ease-in-out h-full bg-gray-400 " :class="{'w-[400px]':show}" >
         <div class=" h-[50px] flex justify-start items-center bg-gray-600 ">
            <h3 class="px-5">Admin Dashboard</h3>
         </div>
         <div class="h-[calc(100vh-50px)] p-[20px] flex flex-col space-y-[10px]" >
            <router-link 
               v-for="item in items" 
               :key="item.name"
               :to="item.path"
               class=" p-[10px]  flex text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-300 ease-in-out"
            >
               <span v-html="item.icon"></span>
               {{ item.name }}
            </router-link>
         </div>
      </div>

      <div id="dashboard" class="w-full h-full bg-gray-800">
         <div class=" h-[50px] flex justify-start items-center bg-gray-600 ">
            <h1  @click="toggleSidebar" class="hover:cursor-pointer" >cli</h1>
            <h3 class="px-5">content Dashboard</h3>
         </div>
         <div class="h-[calc(100vh-50px)] " >
            content
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
const items=[
   {
      path:'/home',
      name:'Home',
      icon:`
         <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
         </svg>
      `,
   },
   {
      path:'/profile',
      name:'Profile',
      icon:`
         <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
         </svg>
      `,
   },
   {
      path:'/messages',
      name:'Messages',
      icon:`
         <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path>
         </svg>
      `,
   },
   {
      path:'/download',
      name:'Download',
      icon:`
         <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path>
         </svg>
      `,
   },
   {
      path:'setting',
      name:'Setting',
      icon:`
         <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
         </svg>
      `,
   },

]

const show=ref(false)
const toggleSidebar=()=>{
   show.value=!show.value
   console.log("show",show.value)
}
</script>

<style lang="scss" scoped>

</style>