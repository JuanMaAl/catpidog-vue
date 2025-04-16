<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div v-for="mascota in Mascotas" :key="mascota.id" class="card m-2" style="width: 18rem;">
        <img :src="mascota.imageSrc" class="card-img-top" :alt="mascota.altText">
            <div class="card-body">
                <h5 class="card-title">{{ mascota.nombre }} ({{ mascota.edad }} años)</h5>
                <p class="card-text">{{ mascota.descripcion }}</p>
                <p v-if="mascota.disponible">Adoptado</p>
                <p v-if="mascota.disponible === false">En busca de un nuevo hogar</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    Mascotas: {
        type: Array,
        required: false,
        default: () => []
    }
})

</script>