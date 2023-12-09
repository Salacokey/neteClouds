<template>
  <div
    class="w-[90vw] h-[36vw] rounded-2xl flex items-center overflow-hidden mx-auto"
  >
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swipeList" :key="index">
        <img class="h-[36vw] w-[90vw]" :src="item.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "NeteasecloudSwiper",

  data() {
    return {
      swipeList: [],
    };
  },

  props: {
    resource: {
      type: Object,
      required: true,
    },
  },

  created(){
    this.swipeList = this.resource.extInfo.banners
  }
};
</script>

<style  scoped>
.my-swipe .van-swipe-item {
  width: 200vw;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>