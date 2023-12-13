"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _index = _interopRequireDefault(require("@/router/index"));

var _index2 = _interopRequireDefault(require("@/store/index"));

var _App = _interopRequireDefault(require("./App.vue"));

require("@/assets/main.css");

require("@/assets/iconfont/iconfont.css");

var _vue2 = require("@iconify/vue2");

var _vant = require("vant");

var _audioPlayer = _interopRequireDefault(require("@/components/audioPlayer"));

var _vueSliderComponent = _interopRequireDefault(require("vue-slider-component"));

require("vue-slider-component/theme/default.css");

var Sentry = _interopRequireWildcard(require("@sentry/vue"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Lazyload } from 'vant';
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
_vue["default"].component('VueSlider', _vueSliderComponent["default"]);

_vue["default"].use(_vant.Circle);

_vue["default"].use(_audioPlayer["default"]);

_vue["default"].use(_vant.Tab);

_vue["default"].use(_vant.Tabs);

_vue["default"].use(_vant.NoticeBar);

_vue["default"].use(_vant.Sticky); // 全局注册


_vue["default"].use(_vant.Dialog);

_vue["default"].use(_vant.Switch);

_vue["default"].use(_vant.Popup);

_vue["default"].use(_vant.CountDown);

_vue["default"].use(_vant.Cell);

_vue["default"].use(_vant.ActionSheet);

_vue["default"].use(_vant.IndexBar);

_vue["default"].use(_vant.IndexAnchor);

_vue["default"].use(_vant.PasswordInput);

_vue["default"].use(_vant.NumberKeyboard);

_vue["default"].use(_vant.Checkbox);

_vue["default"].use(_vant.CheckboxGroup); // Vue.use(Lazyload);
// eslint-disable-next-line vue/multi-word-component-names


_vue["default"].component("icon", _vue2.Icon);

_vue["default"].use(_vant.Swipe);

_vue["default"].use(_vant.SwipeItem);

_vue["default"].config.productionTip = false;
Sentry.init({
  Vue: _vue["default"],
  dsn: "https://53b757a44724e6e966010b04a816cc60@o4506386923454464.ingest.sentry.io/4506386975621120",
  integrations: [new Sentry.BrowserTracing({
    routingInstrumentation: Sentry.vueRouterInstrumentation(_index["default"]),
    tracePropagationTargets: []
  })],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});
new _vue["default"]({
  store: _index2["default"],
  router: _index["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");