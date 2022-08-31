<template>
    index.vue
    {{ hello }}
</template>




<script setup>
const config = useRuntimeConfig()
const hello = await $fetch(config.app.baseURL + 'api/hello')
</script>