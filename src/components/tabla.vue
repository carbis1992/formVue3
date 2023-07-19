<template>
    <div style="text-align: -webkit-center;">
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Edad</th>
                    <th>Fecha de Nacimiento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(persona, index) in personas" :key="index">
                    <td>{{ persona.nombre }}</td>
                    <td>{{ persona.email }}</td>
                    <td>{{ persona.edad }}</td>
                    <td>{{ persona.fechaNacimiento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>
import { usePersonasStore } from '../store/persona';

const store = usePersonasStore();
const personas = store.personas;

</script>
  