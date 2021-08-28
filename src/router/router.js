import {createRouter, createWebHistory} from 'vue-router';
import Catalog from "../components/Catalog";
import Cart from "../components/Cart";

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: Catalog,
        props: true
    },
    {
        path: '/cart/:id',
        name: 'cart',
        component: Cart,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;