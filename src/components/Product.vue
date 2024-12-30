<template>
  <div class="container mx-auto py-12">
    <h1 class="text-4xl font-bold text-center mb-8">Welcome to Our Store</h1>

    <!-- Loader (shown while products are loading) -->
    <div v-if="loading" class="flex justify-center items-center">
      <div class="loader"></div>
    </div>

    <!-- Products Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div v-for="product in products" :key="product.id" class="bg-white border rounded-lg shadow-lg p-4">
        <router-link :to="`/product/${product.id}`">
          <img :src="product.image" alt="Product Image" class="w-full h-64 object-cover rounded-md mb-4" />
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <div class="flex justify-between items-center mt-4">
            <span class="text-xl font-bold">${{ product.price }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Define the state for products and loading status
const products = ref([]);
const loading = ref(true);

// Fetch products when the page loads
onMounted(() => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      products.value = data;
      loading.value = false; // Set loading to false once products are fetched
    });
});
</script>

<style scoped>
/* Loader animation */
.loader {
  width: 60px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#046d8b 0 0);
  background:
    var(--c) 0 38px,
    var(--c) right 18px bottom 18px,
    var(--c) right 18px top 18px,
    var(--c) 18px 18px,
    var(--c) 18px 100%,
    var(--c) 100% 100%,
    var(--c) 100% 0,
    var(--c) 0 0;
  animation: l8-1 2s infinite, l8-2 2s infinite;
}

@keyframes l8-1 {
  0% {
    background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0;
  }
  6.25% {
    background-size: 40px 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0;
  }
  12.5% {
    background-size: 40px 4px, 4px 20px, 0 4px, 4px 0, 0 4px, 4px 0;
  }
  18.75% {
    background-size: 40px 4px, 4px 20px, 20px 4px, 4px 0, 0 4px, 4px 0;
  }
  25% {
    background-size: 40px 4px, 4px 20px, 20px 4px, 4px 40px, 0 4px, 4px 0;
  }
  31.25% {
    background-size: 40px 4px, 4px 20px, 20px 4px, 4px 40px, 40px 4px, 4px 0;
  }
  37.5% {
    background-size: 40px 4px, 4px 20px, 20px 4px, 4px 40px, 40px 4px, 4px 100%, 0 4px, 4px 0;
  }
  43.75% {
    background-size: 40px 4px, 4px 20px, 20px 4px, 4px 40px, 40px 4px, 4px 100%, 100% 4px, 4px 0;
  }
  48%,
  52% {
    background-size: 40px 4px, 4px 20px, 20px 4px, 4px 40px, 40px 4px, 4px 100%, 100% 4px, 4px 40px;
  }
  56.25% {
    background-size: 0 4px, 4px 20px, 20px 4px, 4px 40px, 40px 4px, 4px 100%, 100% 4px, 4px 40px;
  }
  62.5% {
    background-size: 0 4px, 4px 0, 20px 4px, 4px 40px, 40px 4px, 4px 100%, 100% 4px, 4px 40px;
  }
  68.75% {
    background-size: 0 4px, 4px 0, 0 4px, 4px 40px, 40px 4px, 4px 100%, 100% 4px, 4px 40px;
  }
  75% {
    background-size: 0 4px, 4px 0, 0 4px, 4px 0, 40px 4px, 4px 100%, 100% 4px, 4px 40px;
  }
  81.25% {
    background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 100%, 100% 4px, 4px 40px;
  }
  87.5% {
    background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0, 100% 4px, 4px 40px;
  }
  93.75% {
    background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 40px;
  }
  100% {
    background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0;
  }
}

@keyframes l8-2 {
  0%,
  49.9% {
    background-position: 0 38px, right 18px bottom 18px, right 18px top 18px, 18px 18px, 18px 100%, 100% 100%, 100% 0, 0 0;
  }
  50%,
  100% {
    background-position: right 18px bottom 18px, right 18px top 18px, 18px 18px, 18px 100%, 100% 100%, 100% 0, 0 0, bottom 18px left 0;
  }
}
</style>
