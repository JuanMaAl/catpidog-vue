
import axios from 'axios'

export async function cargarTiposDeMascotas (tiposDeMascotas, loading, error) 
{
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