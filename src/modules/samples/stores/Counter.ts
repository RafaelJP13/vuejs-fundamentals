import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useCounterStore = defineStore('counter', () => {

    const count = ref(0);
    const double = computed(() => count.value * 2);

    const increment = () => count.value++;
    const decrement = () => count.value--;
    const reset = () => count.value = 0;

    return { count, double, increment, decrement, reset };

})

export { useCounterStore };