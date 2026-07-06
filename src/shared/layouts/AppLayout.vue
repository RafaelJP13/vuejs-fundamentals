<script setup lang="ts">
import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';

</script>

<template>
    <div class="flex flex-col min-h-screen ">
        <Header/>
        <div class="flex flex-1">
            <aside class="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
                <Menu/>
            </aside>
            <main class="p-4">
                <RouterView />
            </main>
        </div>
    </div>
</template> 