import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

const routes = [
    {
        path: "/", name: 'home',
        components: {
            default: () => import(/* webpackChunkName: "home-page" */ '@/views/Home.vue'),
            NavigationBar: () => import(/* webpackChunkName: "Navigationbar" */ '@/components/Header.vue'),
        },
    },
    { path: "/:pathMatch(.*)*", component: () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue') },

]

const history = createWebHistory(process.env.BASE_URL)
const router = createRouter({
    routes, history
})




export default router;
