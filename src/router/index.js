import { createRouter, createWebHistory } from "vue-router";
import Product from "../components/Product.vue";
import ProductDetails from "../components/ProductDetails.vue";
import Cart from "../components/Cart.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";


const routes =[
    {path: '/', component: Product },
    {path: '/product/:id', component: ProductDetails },
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path:'/cart', component: Cart}
    
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});