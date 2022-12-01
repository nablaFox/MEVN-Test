<template>

    <button class="button">
        <slot />
    </button>

</template>


<style lang="scss" scoped>

.button {
    background-color: #ff3f4d;
    border-radius: 3px;
    padding: 8px;
    color: white;
    border: none;
    cursor: pointer;
    transition: .1s ease;

    &:hover {
        background-color: #cf323d;
    }
}

</style>