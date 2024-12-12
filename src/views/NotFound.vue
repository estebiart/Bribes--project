<template >
    <div class="w-full h-full flex items-center justify-center flex-col">
        <p class="text-2xl font-bold text-gray-dark">404</p>
        <p>Lo sentimos, página no encontrada</p>
        <router-link class="text-primary text-base mt-4" :to="{ name: 'home' }"> Regresar al Inicio</router-link>
    </div>
</template>
<script>
export default {
    name: 'NotFound'
}
</script>
