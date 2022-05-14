import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";
import Category from "./views/Category";
import Post from "./views/Post";


const routes = [
    {
        // path: "/news",
        path: "/news",
        component: Index
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/news/:id",
        component: Post
    }
];

export default new vueRouter({
    mode: "history",
    routes
});