<script setup lang="ts">
import MenuItem from './MenuItem.vue';

</script>

<template>
    <nav class="flex flex-col">
        <MenuItem label="Início" to="/" />
        <MenuItem label="Contador" to="/counter" />
    </nav>
</template>
