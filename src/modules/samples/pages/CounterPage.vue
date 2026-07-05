<script setup lang="ts">
import Title from '@/shared/components/Title.vue';
import { ref } from 'vue';

const count = ref(1000);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => count.value = 0;

</script>

<template>
    <div class="flex flex-col gap-6">
        <Title text="Contador" sub="Exemplo de Contador"></Title>
        <div class="flex flex-col gap-4">
            <span class="text-4xl font-black">
                {{ count }}
            </span>
            <div class="flex gap-2">
                <button @click="increment()" class="btn btn-primary">+</button>
                <button @click="decrement()" class="btn btn-secondary">-</button>
                <button @click="reset()" class="btn btn-danger">Reset</button>
            </div> 
        </div>
    </div>
</template>   