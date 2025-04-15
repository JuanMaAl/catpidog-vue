<template>
    <PicturesCarousel :tiposDeMascotas = "tiposDeMascotas"></PicturesCarousel>
    <div v-if="loading">Cargando tipos de mascotas...</div>
    <div v-if="error">Error al cargar los tipos de mascotas: {{ error }}</div>
</template>

<script setup>
import PicturesCarousel from '@/components/PicturesCarousel.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Variables reactivas para almacenar los datos, el estado de carga y los errores
const tiposDeMascotas = ref([])
const loading = ref(true)
const error = ref(null)

//Credenciales de autenticación, solo para desarrollo
const username = 'usuario'
const password = 'user12345z'

// Funcion para cargar los tipos de mascostas desde la API
const cargarTiposDeMascotas = async () => {
    loading.value = true

    try {
        const response = await axios.get('http://localhost:8080/api/tipos', {
            auth: {
                username: username,
                password: password,
            }
        })
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

<style scoped>

</style>