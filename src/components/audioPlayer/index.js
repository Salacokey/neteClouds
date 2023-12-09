// import Main from "./main.vue";
// export default (Vue) => Vue.component(Main.name, Main);
import Player from "./player";
import playermain from "./main.vue";
const player = new Player();
// export default (vue)=>
export default {
  install(Vue) {
    Vue.component(playermain.name, playermain);
    Vue.mixin({
      computed: {
        mixin_player() {
          return Vue.observable(player);
        },
      },
    });
  },
};
