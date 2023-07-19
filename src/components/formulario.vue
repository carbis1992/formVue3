<template>
    <div>
        <form @submit.prevent="submitForm" style="display: inline-grid;">
            <label>Nombre:</label>
            <input type="text" v-model="nombre" required>

            <label>Email:</label>
            <input type="email" v-model="email" required>

            <label>Edad:</label>
            <input type="number" v-model="edad" min="18" max="99" required>

            <label>Fecha de Nacimiento:</label>
            <input type="date" v-model="fechaNacimiento" required>

            <button type="submit">Agregar</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { usePersonasStore } from '../store/persona';

const store = usePersonasStore();

const nombre = ref('');
const email = ref('');
const edad = ref(18);
const fechaNacimiento = ref('');

const submitForm = () => {
    if (!nombre.value || !email.value || !edad.value || !fechaNacimiento.value) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const persona = {
        nombre: nombre.value,
        email: email.value,
        edad: edad.value,
        fechaNacimiento: fechaNacimiento.value,
    };

    store.addPersona(persona);

    nombre.value = '';
    email.value = '';
    edad.value = 18;
    fechaNacimiento.value = '';
};
</script>