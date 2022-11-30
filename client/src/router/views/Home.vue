<script setup>

</script>


<template>

    <div class="home">
        <div class="hero">
            <div class="wrapper">
                <h1 class="title"> Home </h1>
                <p class="text"> This is the home of the SPA</p>
                <p class="tagline"> All of this is handled by vue-router, using routes, views and layouts </p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.hero {
    width: 90vw;
    margin: 0 auto;
}

.wrapper {
    max-width: 500px;
}

.title, .text {
    font-size: 56px;
}

.title {
    margin-bottom: 20px;
    background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
    -webkit-background-clip: text;
    color: transparent
}

.text {
    margin-bottom: 20px;
}

.tagline {
    font-size: 24px;
    color: #9b9b9b;
}


</style>