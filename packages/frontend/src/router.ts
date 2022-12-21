import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Capture from "./views/Capture.vue";
// 1. Define route components.
// These can be imported from other files
const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/capture", component: Capture },
];

const router = createRouter({ routes, history: createWebHistory() });
export default router;
