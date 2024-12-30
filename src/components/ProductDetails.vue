<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <!-- Product Title -->
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">{{ product.title }}</h1>

    <!-- Product Image -->
    <div class="mb-6">
      <img :src="product.image" alt="Product Image" class="w-full h-80 object-cover rounded-lg shadow-md" />
    </div>

    <!-- Product Description -->
    <p class="text-gray-700 text-lg mb-4">{{ product.description }}</p>

    <!-- Product Price -->
    <p class="text-xl font-semibold text-green-600 mb-6">Price: ${{ product.price }}</p>

    <!-- Add to Cart Button -->
    <button @click="addToCart" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>

    <!-- Back to Product List Link -->
    <router-link to="/" class="inline-block text-blue-500 hover:text-blue-700 font-semibold text-lg">Back to Product List</router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const product = ref({}); // Product data fetched from API

// Cart data stored in localStorage
const cart = ref([]);

// Access product id from the route params using useRoute
const route = useRoute();
const productId = route.params.id;

// Add product to cart
const addToCart = () => {
  const existingProduct = cart.value.find(item => item.id === product.value.id);
  
  if (existingProduct) {
    // If the product is already in the cart, increase its quantity
    existingProduct.quantity += 1;
  } else {
    // If the product is not in the cart, add it with quantity 1
    cart.value.push({ ...product.value, quantity: 1 });
  }

  // Save updated cart to localStorage
  saveCart();
};

// Save cart to localStorage
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

// Load cart from localStorage when the component is mounted
const loadCart = () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
};

onMounted(() => {
  // Load the cart from localStorage on page load
  loadCart();

  // Fetch product details from API
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(data => {
      product.value = data;
    })
    .catch(error => console.error('Error fetching product:', error));
});
</script>
