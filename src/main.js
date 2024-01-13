import { createApp } from "vue";
import "lib-flexible/flexible"; // 引入 lib-flexible
import App from "./App.vue";
import router from "./router"; // 1. 导入路由实例

const app = createApp(App); // 2. 创建 Vue 实例

app.use(router); // 3. 将导入的路由实例 router 注入到 Vue 实例 app 中

app.mount("#app"); // 4. 挂载 Vue 实例
