<template>
  <nav class="bg-gray-800 text-white shadow-lg">
    <div class="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold">
        <img src="" alt="Logo" class="h-10"> <!-- Replace logo.png with your logo path -->
      </router-link>

      <!-- Links -->
      <ul class="flex space-x-6">
        <li>
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
        </li>
        <li>
          <router-link to="#" class="hover:text-gray-300">Shop</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-gray-300">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:text-gray-300">Contact</router-link>
        </li>
      </ul>

      <!-- Cart Icon -->
      <div class="relative">
        <router-link to="/cart" class="text-xl">
          <i class="fa-solid fa-cart-shopping"></i>
          
          <span class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {{ cartItemCount }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cartItemCount: 0, // Initialize to 0
      cartItems: [], // To store cart items
    };
  },
  methods: {
    // Method to fetch cart items from localStorage
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
      }
    },
    // Method to update cart item count based on the cart's contents
    updateCartItemCount() {
      this.cartItemCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
  watch: {
    // Watch for changes in the cartItems array to update the cart count
    cartItems(newCartItems) {
      this.updateCartItemCount();
      localStorage.setItem('cart', JSON.stringify(newCartItems));
    },
  },
  created() {
    this.loadCart();
    this.updateCartItemCount(); // Update on component creation
  },
};
</script>

<style scoped>
/* You can use scoped styling here if needed */
</style>
