<script setup lang="ts">
import Title from '@/shared/components/Title.vue';
import { useCounterStore } from '../stores/Counter';

const counterStore = useCounterStore();

</script>

<template>
    <div class="flex flex-col gap-6">
      <Title text="Contador" sub="Exemplo de Contador com Pinia"></Title>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <span class="text-5xl font-black">{{ counterStore.count }}</span>
          <span class="text-zinc-500">{{ counterStore.double }}</span>
        </div>
        <div class="flex gap-2">
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" @click="counterStore.increment">+</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer" @click="counterStore.decrement">-</button>
          <button class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer" @click="counterStore.reset">Reset</button>
        </div>
      </div>
    </div>
</template> 