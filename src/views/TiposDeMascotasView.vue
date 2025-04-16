<template>
    <main>
        <PicturesCarousel :tiposDeMascotas = "tiposDeMascotas"></PicturesCarousel>
    <div v-if="loading" class="text-center">Cargando tipos de mascotas...</div>
    <div v-if="error" class="text-center">Error al cargar los tipos de mascotas: {{ error }}</div>
    </main>

</template>

<script setup>
import PicturesCarousel from '@/components/PicturesCarousel.vue'
import { ref, onMounted } from 'vue'
import { cargarTiposDeMascotas } from '@/utils/cargarTipos'
//import axios from 'axios'

// Variables reactivas para almacenar los datos, el estado de carga y los errores
const tiposDeMascotas = ref([])
const loading = ref(true)
const error = ref(null)

//Llama a la funcion para cargar los datos cuando el componente se monta 
onMounted(() => {
    cargarTiposDeMascotas(tiposDeMascotas, loading, error)
})
</script>