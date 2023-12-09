<template>
  <div class="dark:bg-[#000000] relative bg-[#F4F4F4]">
    <div class="dark:bg-black h-[100vh] overflow-auto">
      <Search></Search>
      <Block v-for="block in blocks" :resource="block" :key="block.id" />
    </div>
    <AudioPlay v-if="$store.state.audioToggle == true" class="fixed bottom-[6.4vw] z-[10] h-[13.5vw]"></AudioPlay>
    <div class="fixed bottom-0 w-[100%] z-10">
      <div class="flex justify-around dark:bg-black bg-[#ffffff] text-sm">
        <router-link to="/home" class="text-red-600">
          <icon icon="ri:netease-cloud-music-fill" class="ml-[1.6vw]" />
          首页
        </router-link>
        <router-link to="/ranking" class="text-gray-300">
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
import Search from "./children/search.vue";
import Block from "./children/block.vue";
import { mapState } from "vuex";
import AudioPlay from "@/views/home/children/audio.vue";
export default {
  name: "VxIndex",
  components: { Block, Search, AudioPlay },
  computed: { ...mapState(["blocks"]) },
};
</script>