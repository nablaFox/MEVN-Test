<script setup>

import ToDoForm from './components/ToDoForm.vue'
//import Task from './components/Task.vue'


function create() {
   
}

</script>





<template>

   <header> MEVN Stack Example </header>

   <ToDoForm @createTask="create()"/>


</template>

<!-- global styles -->
<style lang="scss">


@import '~normalize.css/normalize.css';
@import '@design';

* {
   box-sizing: border-box;
}

#app { @extend %font-content }

header {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100px;
   font-size: 20px;
   background-color: #1ccacd;
   @extend %font-content;
}

h1 {
   font-size: 30px;
   @extend %font-heading
}

</style>