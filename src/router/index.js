import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/jobs/NotFound.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: Jobs
    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props: true, // 設置為true代表可接受任何路由參數作為 props
    },
    // redirect 強制重定向路由，當網址輸入path設置的路徑，則重定向到redirect設置的路徑
    {
        path: '/all-jobs',
        redirect: '/jobs',
    },
    // catchAll 404
    {
        path: '/:catchAll(.*)', // 使用正則表達式捕捉所有路徑
        name: 'NotFound',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router