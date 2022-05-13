import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";
import Category from "./views/Category";


const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/category",
        component: Category
    }
];

export default new vueRouter({
    mode: "history",
    routes
});