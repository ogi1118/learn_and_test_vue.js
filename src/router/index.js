// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import About from "../components/AboutPage.vue";
import Services from "../components/ServicesPage.vue";
import Contact from "../components/ContactPage.vue";

const routes = [
    { path: "/", name: "HomePage", component: Home },
    { path: "/about", name: "AboutPage", component: About },
    { path: "/services", name: "ServicesPage", component: Services },
    { path: "/contact", name: "ContactPage", component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
