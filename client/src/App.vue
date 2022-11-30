<script setup>

</script>


<template>

   <component :is="this.$route.meta.layout || 'div'">
      <router-view />
   </component>

</template>

<!-- global styles -->
<style lang="scss">

@import 'normalize.css/normalize.css';
@import '@design';

* {
   box-sizing: border-box;
}

#app { @extend %font-content }

body {
   background-color: #242424;
   color: #e2e2e2;
}

header {
   @extend %font-heading;
}

h1 {
   font-size: 30px;
   @extend %font-heading
}

</style>