<script setup>
  import NavBar from '@/components/NavBar.vue'
  import FootBar from './components/FootBar.vue';
</script>

<template>
    <header>
        <NavBar></NavBar>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <FootBar></FootBar>
    </footer>

</template>

<style scoped>


</style>
