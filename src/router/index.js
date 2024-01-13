// 1. 从依赖包中导入路由函数 createRouter 和 createWebHashHistory
import { createRouter, createWebHashHistory } from "vue-router";

// 2. 从其他文件导入路由组件
import Home from "../views/Home.vue";

// 3. 定义一些路由
// 每个路由都需要映射到一个组件
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

// 4. 使用 createRouter 方法创建一个路由实例 router
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

// 5. 导出路由对象
export default router;
