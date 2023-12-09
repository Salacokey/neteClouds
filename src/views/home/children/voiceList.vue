<template>
  <div>
    <Card :title="resource.creatives[0].uiElement.mainTitle.title"> </Card>
    <BetterScroll>
      <div class="scroll-content flex" :style="{width:`${this.voiceList.length * 91}vw`}">
        <ul class="w-[88vw] scroll-item pb-[3.8vw]" v-for="(item,index) in voiceList" :key="index">
          <li class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]" v-for="i in item.resources" :key="i.resourceId">
            <div class="flex">
              <img class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5" :src="i.uiElement.image.imageUrl" alt="">
              <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                <h4 class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">{{ i.uiElement.mainTitle.title }}</h4>
                <div class="flex">
                  <span class="text-[2.36vw] text-[red]">{{ i.uiElement.labelTexts[0] }}</span>
                  <span class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">{{ i.uiElement.subTitle.title }}</span>  
                </div>
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
  components: { Card,BetterScroll },
  name: "NeteasecloudVoiceList",

  data() {
    return {
        voiceList:[]
    };
  },

  props: {
    resource: {
      type: Object,
      required: true,
    },
  },

  created() {
    this.voiceList = this.resource.creatives
  },
};
</script>

<style lang="scss" scoped>
</style>