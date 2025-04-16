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
import { getPublicData } from '@/utils/getPublicData'
//import axios from 'axios'

// Variables reactivas para almacenar los datos, el estado de carga y los errores
const tiposDeMascotas = ref([])
const loading = ref(true)
const error = ref(null)
const url = "http://localhost:8080/api/tipos"

//Llama a la funcion para cargar los datos cuando el componente se monta 
onMounted(() => {
    getPublicData(tiposDeMascotas, loading, error, url)
})
</script>