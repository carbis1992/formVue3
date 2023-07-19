<script setup>
import formulario from './components/formulario.vue';
import tabla from './components/tabla.vue'
</script>

<template>
  <div style="text-align: center;">
    <h1>Formulario</h1>
    <formulario />

    <h1>Tabla</h1>
    <tabla />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
