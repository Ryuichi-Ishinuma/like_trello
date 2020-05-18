import Vue from "vue"
import Router from "vue-router"
// ルートコンポーネントの読み込み
import Home from "./views/Home.vue"
import Board from "./views/Board.vue"

// プラグインとして読み込み
Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        { 
            path: '/', 
            component: Home 
        },
        { 
            path: "/board", 
            component: Board 
        },
    ]
})

export default router