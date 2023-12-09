<template>
  <div class="dark:bg-black">
    <h2
      class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] dark:bg-black text-[#010101] dark:text-white text-[4.2vw] font-[600]"
    >
      MV排行榜
    </h2>
    <van-tabs class="dark:bg-black" :background="$store.state.isDark ? 'black' : 'white'"
      :title-inactive-color="$store.state.isDark ? '#d3d6dc' : '#2f2a30'"
      :title-active-color="$store.state.isDark ? '#fff' : '#000'">
      <van-tab v-for="(item, index) in areaArr" :title="item" :key="index" class="dark:bg-black">
        <ul class="w-[89vw] m-auto dark:bg-black">
          <li v-for="(i, n) in areaArr_mv[index]" :key="n" class="mt-[3vw]">
            <div>
              <router-link :to="{path:'/rankmv',query:{id:i.id}}">
                <img
                  :src="i.cover"
                  alt=""
                  class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
                />
              </router-link>
            </div>
            <p
              class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
            >
              <span class="mr-[3vw] text-red-600">{{ n + 1 }}</span
              >
              <span class="dark:text-white">{{ i.name }}</span>
            </p>
            <p class="text-[2vw] mt-[3vw] dark:text-white">
              <span>-</span><span>{{ i.artistName }}</span>
            </p>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <div class="fixed bottom-0 w-[100%] z-10">
      <div class="flex justify-around dark:bg-black bg-[#ffffff] text-sm">
        <router-link to="/home" class="text-gray-300">
          <icon icon="ri:netease-cloud-music-fill" class="ml-[1.6vw]" />
          首页
        </router-link>
        <router-link to="/ranking" class="text-red-600">
          <icon icon="icon-park-outline:ranking" class="ml-[4.4vw]" />
          排行榜
        </router-link>
        <router-link to="/mine" class="text-gray-300">
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
import { postTopMVData } from "@/service/index";
export default {
  name: "NeteasecloudRanking",

  data() {
    return {
      areaArr: ["内地", "港台", "欧美", "日本", "韩国"],
      areaArr_mv: [],
    };
  },

  created() {
    this.getTopMv();
  },

  methods: {
    async getTopMv() {
      for (const key of this.areaArr) {
        const [err, res] = await postTopMVData({
          limit: 30,
          // eslint-disable-next-line no-undef
          area: key,
        });
        if (!err) this.areaArr_mv.push(res.data.data);
      }
    },
    // ['内地','港台','欧美','日本','韩国']
  },
};
</script>

<style scoped>
</style>