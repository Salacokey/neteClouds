<template>
    <div>
        <Card :title="resource.uiElement.subTitle.title"> </Card>
        <BetterScroll>
            <div class="scroll-content flex flex-wrap" :style="{width:`${this.listenList.length/3 * 91}vw`}">
                <div class="w-[88vw] mt-[4vw] px-[2.4vw]" v-for="(item,index) in listenList" :key="index">
                    <div class="flex">
                        <img class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5" :src="item.recLiveDTO.recCover" alt="">
                        <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                            <h4 class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">{{ item.recLiveDTO.supplemetParam.uiMainReason }}</h4>
                            <p class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F] flex">
                                <span class="text-[red] border-solid border-red-400" v-if="item.recLiveDTO.supplemetParam.uiLabelName">{{ item.recLiveDTO.supplemetParam.uiLabelName }}</span>
                                {{ item.recLiveDTO.supplemetParam.uiSubReason }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BetterScroll>
    </div>
</template>

<script>
import Card from "./card";
import BetterScroll from "@/components/BetterScroll.vue";
export default {
    name: 'NeteasecloudListenList',
    components:{BetterScroll,Card},

    data() {
        return {
            listenList:[]
        };
    },
    props: {
    resource: {
      type: Object,
      required: true,
    },
  },

  created() {
    this.listenList = this.resource.extInfo
    console.log(this.listenList);
  },
};
</script>

<style lang="scss" scoped>

</style>