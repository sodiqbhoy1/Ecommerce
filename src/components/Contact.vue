<template>
    <div class="max-w-4xl mx-auto py-12 px-6">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
  
      <!-- Contact Information -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
        <p class="text-lg text-gray-600 mb-4">
          Have any questions or feedback? We’d love to hear from you! Use the form below to reach out to our team.
        </p>
  
        <div class="space-y-6">
          <!-- Email -->
          <div class="flex items-center space-x-4">
            <span class="text-gray-600 font-semibold">Email:</span>
            <a href="mailto:support@ecommerce.com" class="text-blue-500 hover:underline">support@ecommerce.com</a>
          </div>
  
          <!-- Phone -->
          <div class="flex items-center space-x-4">
            <span class="text-gray-600 font-semibold">Phone:</span>
            <a href="tel:+1234567890" class="text-blue-500 hover:underline">+1 (234) 567-890</a>
          </div>
  
          <!-- Address -->
          <div class="flex items-center space-x-4">
            <span class="text-gray-600 font-semibold">Address:</span>
            <p class="text-gray-600">123 Ecommerce St, Cityville, USA</p>
          </div>
        </div>
      </section>
  
      <!-- Contact Form -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h2>
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label for="name" class="block text-gray-700 font-semibold">Name</label>
              <input type="text" id="name" v-model="form.name" class="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div class="w-1/2">
              <label for="email" class="block text-gray-700 font-semibold">Email</label>
              <input type="email" id="email" v-model="form.email" class="w-full px-4 py-2 border rounded-lg" required />
            </div>
          </div>
  
          <div>
            <label for="message" class="block text-gray-700 font-semibold">Message</label>
            <textarea id="message" v-model="form.message" rows="4" class="w-full px-4 py-2 border rounded-lg" required></textarea>
          </div>
  
          <div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = () => {
    // Handle form submission logic (e.g., send data to an API or email)
    alert('Your message has been sent!');
    // Reset the form after submission
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
  };
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  