import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

