//import store from '@state/store'
// import { defineAsyncComponent } from 'vue'

import MainLayout from '@layouts/Main.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@views/Home.vue'),
        meta: { layout: MainLayout }
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('@views/ToDo.vue'),
        meta: { layout: MainLayout }
    }
    
]


/* function lazyLoadView(view) {
    const AsyncComp = defineAsyncComponent({
        // the loader function
        loader: () => import(view),

        // a component to use while the async component is loading
        loadingComponent: LoadingComponent,

        // a component to use if the load fails
        errorComponent: ErrorComponent,

        // the time after wich the error component will be displayed
        timeout: 3000
    })

    return AsyncComp;
} */