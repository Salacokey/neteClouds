<template>
  <div class="bg-[#eff1f3] dark:bg-black">
    <div class="px-[4vw] dark:bg-black">
      <div class="flex justify-between pt-[14vw]">
          <van-cell class="dark:bg-black bg-[#F4F4F4] w-[12vw]" @click="showPopup">
            <icon icon="ri:menu-fill" class="w-[7vw] h-[6vw] dark:text-white" />
          </van-cell>
          <van-popup v-model="show" position="left" class="w-[85vw] h-[100vh]">
            <div class="dark:bg-[#151515] flex justify-between items-center h-[16vw] px-[5vw] w-[85vw] bg-[#f1f1f1]">
              <div>
                <router-link to="/login" v-if="!auth.cookie">
                  <span>立即登录</span>
                </router-link>
                <router-link to="/mine" v-else>
                  <div class="flex items-center">
                    <div class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden">
                      <img :src="avatarUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%]">
                    </div>
                    <span class="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]">{{ nickname }}</span>
                  </div>
                </router-link> 
              </div>
              <icon icon="bx:scan" class="dark:text-[#f0f0f0] text-[#383838] text-[5vw]" />
            </div>
            <SideBar></SideBar>
          </van-popup>
          <div class="bg-[#ffffff] dark:bg-black dark:text-white w-[24vw] h-[8vw] leading-[8vw] text-center rounded-full">+添加状态</div>
          <icon icon="mdi:search" class="w-[7vw] h-[6vw] dark:text-white" />
      </div>
      <div class="mt-[13vw] relative dark:bg-[#2C2C2C]">
          <div class="w-[18vw] h-[18vw] absolute top-[-9vw] left-1/2 translate-x-[-50%]">
            <img class=" rounded-[50%] " :src="avatarUrl" alt="">
          </div>
          <div class="w-[92vw] h-[28vw] dark:bg-[#2C2C2C] bg-[#ffffff] rounded-3xl text-center pt-[9vw]">
            <div class="wt-[3vw] h-[4vw] text-[3vw] text-[#9396A2] mt-[2vw]">
              <span class="text-[black] dark:text-white">{{ nickname }}</span>
              <span class="w-[15vw] h-[4vw] bg-[#ccc] rounded-2xl px-3">vip 续费</span>
            </div>
            <div class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
              <span class="px-[2vw]"><span>{{ follows }}</span> 关注</span>
              <span class="px-[2vw]"><span>{{ followeds }}</span> 粉丝</span>
              <span class="px-[2vw]">Lv.<span>{{ level }}</span></span>
            </div>
          </div>
      </div>
      <div class="mt-[8vw] w-[92vw] h-[60vw] dark:bg-[#2C2C2C] bg-[#fff] rounded-3xl text-center">
        <div class="pt-[6vw] flex flex-wrap dark:text-white">
          <div class="text-center pl-[7vw] mt-[6vw]">
            <icon icon="icon-park-solid:play" class="text-[red] ml-[50%] translate-x-[-50%]" />
            <p>最近播放</p>
          </div>
          <div class="text-center pl-[7vw] mt-[6vw]">
            <icon icon="ri:folder-music-fill" class="text-[red] ml-[50%] translate-x-[-50%]" />
            <p>本地下载</p>
          </div>
          <div class="text-center pl-[7vw] w-[18vw] mt-[6vw]">
            <icon icon="material-symbols:shopping-bag" class="text-[red] ml-[50%] translate-x-[-50%]" />
            <p>已购</p>
          </div>
          <div class="text-center pl-[7vw] mt-[6vw]">
            <icon icon="fa-solid:user-friends" class="text-[red] ml-[50%] translate-x-[-50%]" />
            <p>我的好友</p>
          </div>
          <div class="text-center pl-[7vw] mt-[6vw]">
            <icon icon="tabler:star-filled" class="text-[red] ml-[50%] translate-x-[-50%]" />
            <p>收藏和赞</p>
          </div>
          <div class="text-center pl-[7vw] mt-[6vw]">
            <icon icon="carbon:recommend" class="text-[red] ml-[50%] translate-x-[-50%]" />
            <p>推歌精选</p>
          </div>
          <div class="text-center pl-[7vw] mt-[6vw]">
            <icon icon="fluent-mdl2:flame-solid" class="text-[red] ml-[50%] translate-x-[-50%]" />
            <p>云推歌</p>
          </div>
          <div class="text-center pl-[7vw] mt-[6vw]">
            <icon icon="tdesign:dvd" class="text-[red] ml-[50%] translate-x-[-50%]" />
            <p>经典专区</p>
          </div>
        </div>
        <hr class="mt-[7vw]">
        <div class="mt-[4vw] dark:text-white">+音乐应用</div>
      </div>
      <div class="bg-[#fff] dark:bg-[#2C2C2C] w-[92vw] rounded-3xl h-[21vw] mt-[4vw]">
        <router-link :to="{path: '/person', query: {personid:likeList.id}}">
        <div class="mt-[4vw] flex justify-between">
          <div class="flex">
            <img class="w-[13vw] h-[13vw] rounded-2xl mt-[4vw] ml-[5vw]" :src="likeList.coverImgUrl" alt="">
            <div class="ml-[2vw] mt-[5vw]">
              <h4 class="dark:text-white">{{ likeList.name }}</h4>
              <p class="text-[#ccc]">{{ likeList.trackCount }}首</p>
            </div>
          </div>
          <div class="w-[21vw] h-[7vw] bg-[#ccc] dark:bg-[#2c2c2c] rounded-full mt-[7vw] mr-[4vw] px-[1vw] flex">
            <icon icon="material-symbols:ecg-heart-outline" class="mt-[1vw] ml-[2vw] dark:text-white" />
            <span class="text-xs mt-[1vw] dark:text-white">心动模式</span> 
          </div>
        </div>
        </router-link>
      </div>
      <nav class="flex justify-evenly h-[15vw] items-center font-semibold relative w-[80vw] mx-auto">
        <div class="dark:text-[#f1f1f1] text-[#2a3146] text-[3.3vw]">创建歌单</div>
        <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">收藏歌单</div>
        <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">歌单助手</div>
        <div class="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]"></div>
      </nav>
      <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px]  pt-[5vw] mb-[3.7vw]">
        <p class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">创建的歌单<span class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">({{ this.createList.length }}个)</span></p>
        <ul class="px-[4vw] pb-[4vw]">
          <li class="flex mb-[1.5vw]" v-for="item in createList" :key="item.id">
            <router-link :to="{path: '/person', query: {personid:item.id}}">
              <div class="flex mb-[1.5vw]">
                <div class="relative pt-[0.6vw] mr-[2.6vw] ">
                  <img :src="item.coverImgUrl" class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative">
                  <div class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                </div>
                <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                  <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">{{ item.name }}</p>
                  <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">{{ item.trackCount }}首，播放{{ item.playCount }}次</p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px]  pt-[5vw] mb-[3.7vw]">
        <p class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">
          收藏的歌单
          <span class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">({{ this.collectList.length }}个)</span>
        </p>
        <ul class="px-[4vw] pb-[4vw]">
          <li class="flex mb-[1.5vw]" v-for="item in collectList" :key="item.id">
            <router-link :to="{path: '/person', query: {personid:item.id}}">
              <div class="flex mb-[1.5vw]">
                <div class="relative pt-[0.6vw] mr-[2.6vw] ">
                  <img :src="item.coverImgUrl" class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative">
                  <div class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                </div>
                <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                  <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">{{ item.name }}</p>
                  <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">{{ item.trackCount }}首，By异世界食品，播放{{ item.playCount }}次</p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="fixed bottom-0 w-[100%] z-10">
      <div class="flex justify-around bg-[#ffffff] dark:bg-black text-sm">
        <router-link to="/home" class="text-gray-300">
          <icon icon="ri:netease-cloud-music-fill" class="ml-[1.6vw]" />
          首页
        </router-link>
        <router-link to="/ranking" class="text-gray-300">
          <icon icon="icon-park-outline:ranking" class="ml-[4.4vw]" />
          排行榜
        </router-link>
        <router-link to="/mine" class="text-red-600">
          <icon icon="solar:music-note-outline" class="ml-[2.2vw]" />
          我的
        </router-link>
        <router-link to="/attention" class="text-gray-300">
          <icon icon="fluent-mdl2:user-followed" class="ml-[2.2vw]" />
          关注
        </router-link>
        <router-link to="/community" class="text-gray-300">
          <icon icon="ph:wechat-logo-thin" class="ml-[2.2vw]" />
          社区
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {postDetailData,postPlayListData} from "@/service/index"
import SideBar from "@/views/home/children/sidebar.vue";
import { mapState } from "vuex";
export default {
  name: "VxMine",
  components:{
    SideBar
  },

  data() {
    return {
      level:"",
      follows:"",
      followeds:"",
      nickname:"",
      avatarUrl:"",
      likeList:[],
      createList:[],
      collectList:[],
      show: false,
    };
  },

  created(){
    this.getDetail(),
    this.getPlay()
  },

  methods: {
    async getDetail(){
      const [err, res] = await postDetailData({ uid: this.$store.state.auth.account.id });
      if(!err) 
      this.level = res.data.level
      this.follows = res.data.profile.follows
      this.followeds = res.data.profile.followeds
      this.nickname = res.data.profile.nickname
      this.avatarUrl = res.data.profile.avatarUrl
    },
    showPopup() {
      this.show = true;
    },
    async getPlay(){
      const [err, res] = await postPlayListData({ uid: this.$store.state.auth.account.id });
      if(!err) 
      this.likeList = res.data.playlist[0]
      for(let i = 1;i<res.data.playlist.length;i++){
        if (res.data.playlist[i].ordered==false) {
          this.createList.push(res.data.playlist[i])
        }else{
          this.collectList.push(res.data.playlist[i])
        }
      }
    },
  },
  computed: { ...mapState(["auth"]) },
};
</script>

<style lang="scss" scoped>
</style>