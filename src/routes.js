import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import("./Views/HomeVue.vue") },
    { path: '/new-post', component: () => import("./Views/NewPost.vue") },
    { path: '/contact', component: () => import("./Views/ContactVue.vue") },
    { path: '/all-posts', component: () => import("./Views/PostsList.vue") },
    { path: '/post/:id', component: () => import("./Views/PostVue.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router