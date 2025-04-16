<template>
    <nav class="navbar navbar-expand-sm navbar-dark gap-3 d-flex justify-content-center">
        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
        <RouterLink to="/tipos-de-mascotas" class="nav-link">Tipos de Mascotas</RouterLink>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
    nav {
        background-color: #328E6E;
    }
    .nav-link {
        color: #E1EEBC;
        text-decoration: none;
        transition: font-weight 0.2s ease;
    }

    .nav-link:hover {
        font-weight: bold;
    }

</style>

