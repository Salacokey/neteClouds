<template>
  <div
    class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center"
  >
    <van-cell class="dark:bg-black bg-[#F4F4F4] w-[12vw]" @click="showPopup">
      <div class="iconfont dark:text-white">&#xe608;</div>
    </van-cell>
    <van-popup v-model="show" position="left" class="w-[85vw]">
      <div
        class="dark:bg-[#151515] flex justify-between items-center h-[16vw] px-[5vw] w-[85vw] bg-[#f1f1f1]"
      >
        <div>
          <router-link to="/login" v-if="!auth.cookie">
            <span>立即登录</span>
          </router-link>
          <router-link to="/mine" v-else>
            <div class="flex items-center">
              <div
                class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden"
              >
                <img
                  :src="avatarUrl"
                  alt=""
                  class="w-[7vw] h-[7vw] rounded-[50%]"
                />
              </div>
              <span class="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]">{{
                nickname
              }}</span>
            </div>
          </router-link>
        </div>
        <icon
          icon="bx:scan"
          class="dark:text-[#f0f0f0] text-[#383838] text-[5vw]"
        />
      </div>
      <SideBar></SideBar>
    </van-popup>
    <div class="relative">
      <i
        class="iconfont dark:text-white absolute left-[3.68vw] top-[1.8vw] w-[4.47vw] h-[4.47vw]"
        @click="search"
        >&#xe66a;</i
      >
      <input
        type="text"
        class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"
        placeholder="Love is Gone(Acoustic)"
        v-model="keywords"
      />
      <i
        class="dark:text-white iconfont absolute right-[3.68vw] top-[1.8vw] w-[4.47vw] h-[4.47vw]"
        >&#xe749;</i
      >
    </div>
    <div class="iconfont dark:text-white">&#xe647;</div>
  </div>
</template>

<script>
// ,postDetailData
import { cloudSearch, postStatus } from "@/service/index";
import SideBar from "./sidebar.vue";
import { mapState } from "vuex";
export default {
  name: "NeteasecloudSearch",
  components: {
    SideBar,
  },

  data() {
    return {
      keywords: "",
      show: false,
      nickname: "",
      avatarUrl: "",
      // padfree:""
    };
  },

  methods: {
    async search() {
      const [err, res] = await cloudSearch({
        type: 1,
        keywords: this.keywords,
      });
      if (!err) return res;
    },
    showPopup() {
      this.show = true;
    },
    async getStatus() {
      const [err, res] = await postStatus();
      if (!err) this.padfree = res.data.data.account.paidFee;
    },
    // async getDetail(){
    //   // if (this.padfree==true) {
    //     // console.log(1111);
    //     const [err, res] = await postDetailData({ uid: this.$store.state.auth.account.id });
    //     if(!err) console.log("歌单详情",res);
    //     this.nickname = res.data.profile.nickname
    //     this.avatarUrl = res.data.profile.avatarUrl
    //     console.log(this.avatarUrl,this.nickname);
    //   // }
    // },
  },
  created() {
    // this.getDetail()
    this.getStatus();
    if (this.padfree != true) {
      this.nickname = this.auth.profile.nickname;
      this.avatarUrl = this.auth.profile.avatarUrl;
    }
  },
  computed: { ...mapState(["auth"]) },
};
</script>

<style lang="scss" scoped>
</style>