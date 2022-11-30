<template>


    <header class="header">
        <nav class="header__nav">
            <div class="header__brand"> MEVN Test App </div>
            <div class="header__menu">
                <router-link to="/"> Home </router-link>
                <router-link to="/todo"> ToDo </router-link>
            </div>
        </nav>
    </header>

</template>


<style lang="scss" scoped>

@import "@design";

.header {

    position: fixed;
    top: 0;
    width: 100%;

    &__nav {
        display: flex;
        justify-content: space-between;
        background-color: $main-bg-color;
        border-bottom: 1px solid #535454;
        padding: 16px 32px;
        align-items: center;
    }

    &__brand {
        background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 30px;
    }
}

a {
    color: #8c90f0;
    padding: 0 10px;
}


</style>