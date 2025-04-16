<template>
    <main>
        <MascotasCard :Mascotas = "mascotasFiltradas"></MascotasCard>
        <div v-if="loading" class="text-center">Cargando mascotas...</div>
      <div v-if="error" class="text-center">Error al cargar las mascotas: {{ error }}</div>
      <p>{{ tipoMascota }}</p>
    </main>
</template>


<script setup>

import { ref, onMounted, computed } from 'vue'
import { getPublicData } from '@/utils/getPublicData'
import { useRoute } from 'vue-router';
import MascotasCard from '@/components/MascotasCard.vue'

const route = useRoute();
const tipoMascota = ref(route.params.tipoMascota); 

// Variables reactivas para almacenar los datos, el estado de carga y los errores
const Mascotas = ref([])
const loading = ref(true)
const error = ref(null)
const url = "http://localhost:8080/api/mascotas"

const mascotasFiltradas = computed(() => {
    if (tipoMascota.value) {
        return Mascotas.value.filter(mascota =>
            mascota.tipoMascota.nombre.toLowerCase() === tipoMascota.value.toLowerCase()
        );
    } else {
        return Mascotas.value; // Mostrar todas si no hay tipo en la URL
    }
});

//Llama a la funcion para cargar los datos cuando el componente se monta 
onMounted(() => {
    getPublicData(Mascotas, loading, error, url)
})
</script>