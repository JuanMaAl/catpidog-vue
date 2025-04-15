<template>
    <!-- Carousel -->
    <div id="demo" class="carousel slide custom-carousel" data-bs-ride="carousel">
      <!-- The slideshow/carousel -->
      <div class="carousel-inner">
        <div 
          v-for="(tipo, index) in tiposDeMascotas" 
          :key="tipo.id" 
          class="carousel-item"
          :class="{ active: index === 0 }">
          <h2 class="text-center">{{ tipo.nombre }}</h2>
          <div class="image-container">
            <img :src="getImagePath(tipo.id)" :alt="tipo.nombre" class="carousel-image">
          </div>
        </div>
      </div>
  
      <!-- Control buttons below the image -->
      <div class="carousel-controls">
        <button class="control-btn prev-btn" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
  
        <!-- Indicators as dots between the buttons -->
        <div class="carousel-indicators">
          <button 
            v-for="(tipo, index) in tiposDeMascotas" 
            :key="tipo.id" 
            type="button" 
            data-bs-target="#demo" 
            :data-bs-slide-to="index" 
            :class="{ active: index === 0 }">
          </button>
        </div>
  
        <button class="control-btn next-btn" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Prop name matches what's passed from parent component
  defineProps({
    tiposDeMascotas: {
      type: Array,
      required: false,
      default: () => []
    }
  });
  
  // Function to build image path dynamically
  const getImagePath = (tipoId) => {
    return new URL(`../assets/tipos-mascotas/${tipoId}.png`, import.meta.url).href;
  };
  </script>
  
  <style scoped>
  .custom-carousel {
    position: relative;
    padding-bottom: 60px; /* Space for controls */
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .carousel-image {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Reposition the carousel controls to the bottom */
  .carousel-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    padding: 10px 0;
  }
  
  /* Style for the control buttons */
  .control-btn {
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 15px;
    transition: background-color 0.3s ease;
  }
  
  .control-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* Indicator dots */
  .carousel-indicators {
    position: static;
    margin: 0 10px;
    display: flex;
    justify-content: center;
  }
  
  .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 5px;
    transition: background-color 0.3s;
  }
  
  .carousel-indicators button.active {
    background-color: #000;
    transform: scale(1.2);
  }
  
  /* Override default Bootstrap carousel controls */
  .carousel-control-prev, .carousel-control-next {
    display: none; /* Hide the default controls */
  }
  
  .carousel-control-prev-icon, .carousel-control-next-icon {
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  </style>