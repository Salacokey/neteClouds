<template>
  <div>
    <Card :title="resource.uiElement.subTitle.title"> </Card>
    <BetterScroll>
      <div class="scroll-content flex" :style="{width:`${this.songmenuList.length * 91}vw`}">
        <ul class="w-[88vw] scroll-item pb-[3.8vw]" v-for="(item,index) in songmenuList" :key="index">
          <li class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]" v-for="i in item.resources" :key="i.resourceId">
            <div class="flex">
              <img class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5" :src="i.uiElement.image.imageUrl" alt="">
              <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                <h4 class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">{{ i.uiElement.mainTitle.title }}</h4>
                <p class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"  v-if="i.uiElement.subTitle">{{ i.uiElement.subTitle.title }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </BetterScroll>
  </div>
</template>

<script>
import Card from "./card";
import BetterScroll from "@/components/BetterScroll.vue";
export default {
  components: { BetterScroll, Card },
  name: "NeteasecloudCollection",

  data() {
    return {
      songmenuList: [],
      songmenu: "",
    };
  },

  props: {
    resource: {
      type: Object,
      required: true,
    },
  },

  created() {
    this.songmenuList = this.resource.creatives
  },
};
</script>

<style lang="scss" scoped>
</style>