import Vue from "vue";
import router from "@/router/index";
import store from "@/store/index";
import App from "./App.vue";
import "@/assets/main.css";
import "@/assets/iconfont/iconfont.css";
import { Icon } from "@iconify/vue2";
import { Swipe, SwipeItem } from 'vant';
// import { Lazyload } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Cell,ActionSheet } from 'vant';
import { CountDown } from 'vant';
import { Popup } from 'vant';
import { Switch } from 'vant';
import { Dialog } from 'vant';
import { Sticky } from 'vant';
import { NoticeBar } from 'vant';
import { Tab, Tabs } from 'vant';
import AudioPlayer from "@/components/audioPlayer"
// Vue.use(AudioPlaies)
// Vue.use(Module) Module的要求是什么 (1/2)
// 1、Module本身是函数
// 2、Module不是函数但是具备一个install方法
// Vue.$use = function (module) {
//   if(typeof module === 'function'){
//     module(this)
//   }else if(){

//   }
// }
import { Circle } from 'vant';

import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/default.css"

import * as Sentry from "@sentry/vue";
Vue.component('VueSlider',VueSlider)
Vue.use(Circle);
Vue.use(AudioPlayer)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NoticeBar);
Vue.use(Sticky);
// 全局注册
Vue.use(Dialog);
Vue.use(Switch);
Vue.use(Popup);
Vue.use(CountDown);
Vue.use(Cell);
Vue.use(ActionSheet);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

// Vue.use(Lazyload);
// eslint-disable-next-line vue/multi-word-component-names
Vue.component("icon", Icon);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false;

Sentry.init({
  Vue,
  dsn: "https://2848b3f5933b59b9d60578f6f53da2be@o4506314774740992.ingest.sentry.io/4506386412011520",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
