import Home from "@/views/home/home.vue";
import Attention from "@/views/attention/attention.vue";
import Community from "@/views/community/community.vue";
const routes = [
  {
    path: "/",
    redirect: "/person",
  },
  {
    path: "/login",
    component: ()=>import("@/views/login/index.vue"),
  },
  {
    path: "/captch",
    component: ()=>import("@/views/login/login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/mine",
    name: "mine",
    component: ()=>import("@/views/mine/mine.vue"),
  },
  {
    path: "/attention",
    name: "attention",
    component: Attention,
  },
  {
    path: "/community",
    name: "community",
    component: Community,
  },
  {
    path: "/ranking",
    name: "ranking",
    component: ()=>import("@/views/ranking/ranking.vue"),
  },
  {
    path: "/person",
    name: "person",
    component: ()=>import("@/views/home/children/person.vue"),
  },
  {
    path: "/rankmv",
    name: "rankmv",
    component: ()=>import("@/views/ranking/rankMv.vue"),
  },
  {
    path: "/music",
    name: "music",
    component: ()=>import("@/views/music/music.vue"),
  },
];

export default routes;
