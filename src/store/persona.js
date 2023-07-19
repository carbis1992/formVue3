import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePersonasStore = defineStore('persona', () => {
    const personas = ref([]);
    function addPersona(persona) {
        personas.value.push(persona);
    }

    return {
        personas,
        addPersona
    }
})