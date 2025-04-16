
import axios from 'axios'

export async function getPublicData (refs, loading, error, url) 
{
    loading.value = true

    try {
        const response = await axios.get(url)
        console.log(response.data)
        if (Array.isArray(response.data)) {
            refs.value = response.data
        } else {
            throw new Error('La respuesta no es un arreglo válido.')
        }
    } catch (err) {
        error.value = err.message || 'Ocurrió un error al cargar los datos.'
    } finally {
        loading.value = false
    }
}