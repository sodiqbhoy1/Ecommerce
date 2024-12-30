<template>
    <div class="max-w-screen-lg mx-auto py-8">
      <!-- Cart Title -->
      <h1 class="text-3xl font-semibold text-center mb-6">Your Shopping Cart</h1>
  
      <!-- Cart Table -->
      <div class="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table class="min-w-full">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 text-left">Product</th>
              <th class="py-3 px-4 text-left">Quantity</th>
              <th class="py-3 px-4 text-left">Price</th>
              <th class="py-3 px-4 text-left">Total</th>
              <th class="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loop through the cart items -->
            <tr v-for="(item, index) in cart" :key="index" class="border-b">
              <td class="py-3 px-4 flex items-center">
                <img :src="item.image" alt="Product" class="w-12 h-12 mr-4">
                <span>{{ item.title }}</span>
              </td>
              <td class="py-3 px-4">
                <input
                  type="number"
                  v-model="item.quantity"
                  min="1"
                  class="w-16 text-center border rounded"
                  @input="updateCart()"
                />
              </td>
              <td class="py-3 px-4">${{ item.price.toFixed(2) }}</td>
              <td class="py-3 px-4">${{ (item.price * item.quantity).toFixed(2) }}</td>
              <td class="py-3 px-4">
                <button @click="removeItem(index)" class="text-red-500 hover:text-red-700">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Cart Summary -->
      <div class="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
        <div class="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>$5.00</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Discount:</span>
          <span>-$5.00</span>
        </div>
        <div class="flex justify-between font-semibold text-xl mb-4">
          <span>Total:</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
        <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Proceed to Checkout</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, computed } from 'vue';
  
  const cart = ref([]);
  
  // Load cart from localStorage when the component is mounted
  const loadCart = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      cart.value = JSON.parse(savedCart);
    }
  };
  
  // Update cart in localStorage whenever the cart array is modified
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  };
  
  // Remove an item from the cart
  const removeItem = (index) => {
    cart.value.splice(index, 1);
    saveCart();
  };
  
  // Update cart (to handle quantity changes)
  const updateCart = () => {
    saveCart();
  };
  
  // Subtotal calculated dynamically based on cart
  const subtotal = computed(() => {
    return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });
  
  // Total calculated dynamically, including shipping and discount
  const total = computed(() => {
    return subtotal.value + 5.0 - 5.0; // Subtotal + Shipping - Discount
  });
  
  onMounted(() => {
    // Load the cart from localStorage on page load
    loadCart();
  });
  </script>
  
  <style scoped>
  /* Add additional custom styling here if needed */
  </style>
  