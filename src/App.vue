<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>

      <nav>
        <RouterLink>Inicio</RouterLink>
        <RouterLink to="/tipos-de-mascotas">Tipos de Mascotas</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>


</style>
