<template>
  <div>
    <div class="bg-black w-screen h-screen pb-[-12vw] flex flex-wrap absolute pb-[12vw]">
        <div class="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw]">
            <icon icon="formkit:left" class="text-[6vw] text-[#fefefe]" />
            <div class="flex items-center">
                <icon icon="solar:to-pip-linear" class="text-[6vw] text-[#fefefe] mr-[7vw]" />
                <icon icon="mingcute:more-2-line" class="text-[6vw] text-[#fefefe]" />
            </div>
        </div>
        <div class="w-[100%] h-[54vw] absolute top-[12%]">
          <!-- <video @click="videoPlay()" loop muted autoplay="autoplay" :src="url"></video> -->
          <div class="relative" @click="clickHandler()">
            <video v-if="url" ref="video" id="player" playsinline>
              <source :src="url" type="video/mp4" />
            </video>
            <icon v-show="isPlay" icon="fluent:triangle-right-20-filled" class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[14vw] text-[rgba(255,255,255,0.4)]"/>
          </div>
        </div>
        <div class="w-[100%] absolute bottom-[0vw]">
            <div class="flex justify-between px-[4vw] items-end pb-[3vw]">
                <div class="flex-1 mr-[10vw]">
                    <div class="flex items-center mb-[3vw]">
                        <img :src="detailList.cover" class="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff]" alt="">
                        <span class="mx-[2vw] text-[#ffffff] text-[4vw]">{{ detailList.artistName }}</span>
                        <div class="bg-[#eb4d44] h-[5vw] w-[7vw] text-[#fff] flex items-center justify-center rounded-[2vw]">+</div>
                    </div>
                    <div class="mb-[5vw]">
                      <div class="flex justify-between items-center">
                        <div class="flex">
                        <h1 class="text-[3.2vw]">
                          <span class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]">MV</span>
                          <span class="text-[#fff]">{{ detailList.name }}</span>
                        </h1>
                        </div>
                        <icon icon="bytesize:chevron-top" class="text-white" />
                      </div>
                      <div class="van-collapse-item__content text-white">
                        <div>
                          {{ detailList.desc }}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { postUrlMVData,postDetailMVData,postInfoMVData } from "@/service/index";
import Plyr from "plyr"
import "plyr/dist/plyr.css"
export default {
  name: "NeteasecloudRankMv",
  data() {
    return {
        isPlay:false,
        videoPlayer:null,
        url:"",
        detailList:{}
    };
  },

  async created() {
    {
      const [err, res] = await postUrlMVData({
        id: this.$route.query.id,
      });
      if (!err) console.log(res);
      this.url = res.data.data.url
      console.log(this.url)
    }
    {
      const [err, res] = await postDetailMVData({
        mvid: this.$route.query.id,
      });
      if (!err) console.log(res);
      this.detailList = res.data.data
    }
    {
      const [err, res] = await postInfoMVData({
        mvid: this.$route.query.id,
      });
      if (!err) console.log(res);
    }
  },
  methods:{
    clickHandler(){
      this.isPlay = !this.isPlay
      this.videoPlayer.togglePlay
    }
  },
  mounted(){
    this.videoPlayer =  new Plyr(this.$refs.video,{
      controls:[]
    })
  }
};
</script>

<style lang="scss" scoped>
</style>