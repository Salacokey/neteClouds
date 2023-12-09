<template>
  <div>
    <Card :title="resource.uiElement.subTitle.title"> </Card>
    <BetterScroll>
      <div
        class="flex"
        :style="{ width: `${this.resource.creatives.length * 34}vw` }"
      >
        <div class="w-[31vw] relative z-[1] mt-[2vw]">
          <van-swipe
            style="height: 150px"
            :duration="1500"
            autoplay="4000"
            vertical
            :show-indicators="false"
            :touchable="false"
          >
            <van-swipe-item
              v-for="item in swipersongList"
              :key="item.resourceId"
            >
            <router-link :to="{path: '/person', query: {personid:item.resourceId}}">
              <img
                  class="w-[35vw] h-[26vw] rounded-[8px]"
                  :src="item.uiElement.image.imageUrl"
                />
            </router-link>
              
              <p
                class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
              >
                {{ item.uiElement.mainTitle.title }}
              </p>
            </van-swipe-item>
          </van-swipe>
          <icon
            icon="ion:infinite-outline"
            class="absolute text-[#fff] w-[10vw] h-[6vw] top-0 right-0 iconify iconify--iconoir"
          />
        </div>
        <div
          class="w-[31vw] ml-[3vw]"
          v-for="item in songList"
          :key="item.creativeId"
        >
          <div
            class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
          >
            <router-link :to="{path: '/person', query: {personid:item.creativeId}}">
              <img
                :src="item.uiElement.image.imageUrl"
                class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
                alt=""
              />
            </router-link>

            <icon
              icon="ph:play-fill"
              class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion"
            />
            <div
              class="absolute top-[1vw] left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[28vw] z-[2]"
            >
              <icon
                icon="ph:play-fill"
                class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion"
              />
              <span class="font-[800] text-[2.5vw]">{{
                item.resources[0].resourceExtInfo.playCount
              }}</span>
            </div>
          </div>
          <p
            class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
          >
            {{ item.uiElement.mainTitle.title }}
          </p>
        </div>
      </div>
    </BetterScroll>
  </div>
</template>

<script>
import Card from "./card";
import BetterScroll from "@/components/BetterScroll.vue";
export default {
  components: { BetterScroll, Card },
  name: "NeteasecloudRecommend",

  data() {
    return {
      songList: [],
      swipersongList: [],
      reco: "",
    };
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created() {
    
    this.swipersongList = this.resource.creatives[0].resources;
    for (let i = 1; i < this.resource.creatives.length; i++) {
      this.songList.push(this.resource.creatives[i]);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>