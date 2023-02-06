import { createRouter, createWebHistory } from "vue-router";
import GameList from "@/views/GameList.vue";
import GameListAndroid from "@/views/GameListAndroid.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: GameList,
      children: [
        {
          path: "/",
          alias: "android",
          component: GameListAndroid,
        },
      ],
    },
  ],
});
