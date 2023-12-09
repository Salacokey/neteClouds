<template>
  <div>
    <Card :title="resource.uiElement.subTitle.title"></Card>
    <BetterScroll>
        <div class="w-[330vw] flex mb-[6.31vw] scroll-content">
            <div class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]" v-for="(item,index) in calendList" :key="index">
                
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
  name: "NeteasecloudHotList",

  data() {
    return {
      calendList: [],
    };
  },

  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.calendList = this.resource.creatives;
  },
};
</script>

<style lang="scss" scoped>
</style>