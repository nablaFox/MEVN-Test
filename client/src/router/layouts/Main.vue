<script setup>

import NavBar from '@components/NavBar.vue'

</script>

<template>

    <div class="main-layout">
        <NavBar />
        <slot />
    </div>

</template>

<style scoped>


.main-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

</style>