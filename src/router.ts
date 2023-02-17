import { createRouter, createWebHistory } from "vue-router";
import GameList from "@/views/GameList.vue";

export default createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/:platform?",

      component: GameList,

      beforeEnter: (to, from, next) => {
        if (!to.params.platform) {
          next("/android");

          return;
        }

        next();
      },

      props: (route) => ({ platform: route.params.platform }),
    },
  ],
});
