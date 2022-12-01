<script setup>

import NavBar from '@components/NavBar.vue'

</script>

<template>

    <div class="main-layout">
        <NavBar />
        <slot />
    </div>

</template>

<style lang="scss" scoped>


.main-layout {
    padding-top: 15%;
}

</style>