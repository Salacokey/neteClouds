import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
import { getHomePageData, loginCellphone } from "@/service/index";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    blocks: [],
    auth: {},
    isDark:false,
    songList:{},
    playToggle:false
  },  
  plugins: [persistedstate()],
  mutations: {
    // store.commit('increase')
    updateBlocks(state, res) {
      state.blocks = res.data.data.blocks;
    },
    updateAuth(state,res){
      state.auth = res.data
    },
    deleteCookie(state){
      state.auth = ''
    },
    changeDarkMode(state,val){
      state.isDark = val
    },
    storageSong(state,val){
      state.songList = val
    },
  },
  // actions触发store.dispatch('')
  actions: {
    async requestHomePageData(store) {
      const [err, homePageData] = await getHomePageData();
      if (err) return;
      store.commit("updateBlocks", homePageData);
    },
    async requestLoginCellPhone(store, data) {
      const [err, res] = await loginCellphone(data);
      if (err) return alert("请求错误，请稍后再试！");
      store.commit("updateAuth",res)
    },
  },
});

export default store;
