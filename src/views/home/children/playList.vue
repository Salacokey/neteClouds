<template>
  <div>
    <Card :title="resource.uiElement.subTitle.title"> </Card>
    <BetterScroll>
        <div
        class="flex"
        :style="{ width: `${this.playList.length * 34}vw` }"
      >
        <div
          class="w-[31vw] ml-[3vw]"
          v-for="item in playList"
          :key="item.creativeId"
        >
          <div
            class="w-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
          >
            <img
              :src="item.uiElement.image.imageUrl"
              class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
              alt=""
            />
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
  name: "NeteasecloudPlayList",

  data() {
    return {
        playList:[]
    };
  },

  props: {
    resource: {
      type: Object,
      required: true,
    },
  },

  created() {
    this.playList = this.resource.creatives
  },
};
</script>

<style lang="scss" scoped>
</style>