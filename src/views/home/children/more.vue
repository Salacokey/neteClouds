<template>
  <div class="dark:bg-black bg-[#F4F4F4]">
    <van-cell @click="show = true" class="inline-block dark:bg-black bg-[#F4F4F4]">
      <div class="dark:bg-black bg-[#F4F4F4] text-right">
        <slot></slot>
      </div>
    </van-cell>
    <van-action-sheet v-model="show" :title="titleVal" class="dark:bg-black dark:text-white">
      <hr class="dark:bg-white" />
      <div class="ml-[6vw] mt-[4vw] dark:bg-black">
        <div class="flex">
            <icon icon="iconamoon:like" class="mr-[3vw] mt-[0.5vw]" />
            优先推荐
        </div>
        <div class="flex">
            <icon icon="ri:dislike-line" class="mr-[3vw] mt-[0.5vw]" />
            减少推荐
        </div>
        <div class="flex">
            <icon icon="mingcute:more-4-line" class="mr-[3vw] mt-[0.5vw]" />
            更多内容
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  name: "NeteasecloudMore",

  data() {
    return {
      show: false,
      title:""
    };
  },
  props:['titleVal'],
  
  mounted() {},

  methods: {},
};
</script>

<style scoped>
.van-action-sheet__header {
  display: flex;
  justify-content: space-between;
  margin-left: 6vw;
}
</style>