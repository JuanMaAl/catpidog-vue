<template>
    <main>
        <PicturesCarousel :tiposDeMascotas = "tiposDeMascotas"></PicturesCarousel>
    <div v-if="loading" class="text-center">Cargando tipos de mascotas...</div>
    <div v-if="error" class="text-center">Error al cargar los tipos de mascotas: {{ error }}</div>
    </main>

</template>

<!--ZONA DEL SCRIPT -->

<script setup>
import PicturesCarousel from '@/components/PicturesCarousel.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Variables reactivas para almacenar los datos, el estado de carga y los errores
const tiposDeMascotas = ref([])
const loading = ref(true)
const error = ref(null)

// Funcion para cargar los tipos de mascostas desde la API
const cargarTiposDeMascotas = async () => {
    loading.value = true

    try {
        const response = await axios.get('http://localhost:8080/api/tipos')
        console.log(response.data)
        if (Array.isArray(response.data)) {
            tiposDeMascotas.value = response.data
        } else {
            throw new Error('La respuesta no es un arreglo válido.')
        }
    } catch (err) {
        error.value = err.message || 'Ocurrió un error al cargar los datos.'
    } finally {
        loading.value = false
    }
}

//Llama a la funcion para cargar los datos cuando el componente se monta 
onMounted(() => {
    cargarTiposDeMascotas()
})
</script>