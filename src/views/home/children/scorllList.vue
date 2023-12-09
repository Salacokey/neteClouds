<template>
  <BetterScroll>
    <div class="flex mx-auto overflow-hidden scroll-content relative" :style="{ width: `${this.scrollList.length * 24}vw` }">
      <div
        class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
        v-for="item in scrollList"
        :key="item.resourceId"
      >
        <img
          :src="item.uiElement.image.imageUrl2"
          class="red-image text-sm w-[14vw] h-[14vw]"
          alt=""
        />
        <p
          class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
        >
          {{ item.uiElement.mainTitle.title }}
        </p>
      </div>
      <span
        class="dark:text-[#1a1c23] absolute text-center left-[1vw] top-[-1vw] w-[15vw] h-[19vw] leading-[19vw] items-center text-[3.5vw] text-[#fff] font-[800]"
        >{{ date }}</span
      >
    </div>
  </BetterScroll>
</template>

<script>
import BetterScroll from "@/components/BetterScroll.vue";
export default {
  components: { BetterScroll },
  name: "NeteasecloudScorll",

  data() {
    return {
      scrollList: [],
      date: "",
    };
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },

  created() {
    this.scrollList = this.resource.creatives[0].resources;
    let day = new Date();
    this.date = day.getDate();
  },
};
</script>

<style lang="scss" scoped>
</style>