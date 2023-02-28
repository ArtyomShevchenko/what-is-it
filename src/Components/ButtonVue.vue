<template>
    <button :style="{ background: background, color: color, }">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        color: String,
        background: String,
    }
}
</script>

<style scoped>
/* button {
    background-color: v-bind(color);
} */
</style>