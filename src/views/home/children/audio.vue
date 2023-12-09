<template>
  <div>
    <div
      class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw] fixed  bg-[#fff] z-[10] "
    >
      <router-link to="/music">
        <div class="flex items-center">
          <div
            class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation paused-animation"
          >
            <img
              src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
              alt=""
              class="absolute top-0 left-0 z-[1]"
            />
            <!-- https://p2.music.126.net/tAzWfNK5KALyV7OO2Vc3SA==/6068204674100518.jpg -->
            <img
              :src="mixin_player.currentTrackDetail?.al?.picUrl"
              alt=""
              class="w-[7vw] h-[7vw] rounded-[50%]"
            />
          </div>
          <div
            class="text-[3vw] flex w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]"
          >
            <div class="text-[#3E485E]">
              {{ mixin_player.currentTrackDetail.name }}
            </div>
            <div class="text-[#7B8591]">
              -{{
                mixin_player.currentTrackDetail?.ar
                  ?.map(({ name }) => name)
                  .join("/")
              }}
            </div>
          </div>
        </div>
      </router-link>
      <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw]" @click="mixin_player.toggle()">
        <van-circle
          :value="mixin_player.progress * 100"
          size="5.6vw"
          :speed="100"
        />
        <icon
          :icon="mixin_player.playing?'ic:sharp-pause':'fluent:triangle-right-20-filled'"
          class="top-1/2 left-1/2 translate-x-[-50%] text-black translate-y-[-50%] absolute"
        />
      </div>
      <div class="pl-[4.5vw]">
        <van-cell @click="show = true">
          <icon icon="ri:menu-add-fill" class="text-[6vw] text-[#3b4152]" />
        </van-cell>
        <van-action-sheet v-model="show">
          <h1 class="text-[4vw] font-extrabold mt-[5vw] ml-[5vw]">
            当前播放<span class="text-[2vw] text-[#929293]">(173)</span>
          </h1>
          <div class="flex justify-between mt-[6.6vw] items-center ml-[5vw]">
            <div class="flex">
              <icon icon="cil:loop" class="text-[5vw] text-[#B1B1B1]" />
              <h1 class="ml-[1.5vw] text-[3.4vw] font-medium">列表循环</h1>
            </div>
            <div class="flex w-[30vw] justify-between px-[5vw]">
              <icon
                icon="material-symbols-light:download-sharp"
                class="text-[5vw] text-[#B1B1B1]"
              />
              <icon
                icon="icon-park-outline:add"
                class="text-[5vw] text-[#B1B1B1]"
              />
              <icon
                icon="material-symbols:delete-outline"
                class="text-[5vw] text-[#B1B1B1]"
              />
            </div>
          </div>
          <div
            class="flex justify-between items-center h-[14vw] px-[5vw]"
            v-for="(item,index) in songList"
            :key="item.id"
          >
            <div class="flex items-center">
              <img v-if="index==mixin_player.index"
                src="https://admirable-jalebi-ce44af.netlify.app/static/wave.gif"
                alt=""
                class="red-image w-[2vw] h-[2vw]"
              />
              <div
                class="text-[4.1vw] ml-[2vw] w-[60vw] line-clamp-1 text-[red]"
              >
                <span
                  class="px-[1vw] rounded-[3px] border-[1px] border-[red] font-[400] text-[3vw] text-[red] text-center leading-[6vw] scale-50"
                  v-if="item.originCoverType == 1"
                  >vip</span
                >
                <span
                  class="px-[0.5vw] rounded-[3px] border-[1px] border-[red] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[1vw] mr-[1vw]"
                  v-if="item.originCoverType == 1"
                  >试听</span
                >
                {{ item.name }}
                <span class="text-[3vw] text-[#BCBCBC]"
                  >-{{ item.ar[0].name }}</span
                >
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-[3vw] mr-[6vw] text-[#BCBCBC]" >播放来源</p>
              <icon icon="bi:x" class="text-[5vw] text-[#B1B1B1]" />
            </div>
          </div>
        </van-action-sheet>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import Player from "@/components/audioPlayer/player";
// window.player = new Player();
export default {
  name: "NeteasecloudAudio",

  data() {
    return {
      show: false,
      tracks: [],
      // player:window.player,
    };
  },

  created() {
    console.log(this.songList);
    for (const key in this.songList) {
      this.tracks.push(this.songList[key].id);
    }

    console.log(this.mixin_player.currentTrackDetail);
  },

  computed: {
    ...mapState(["songList"]),
  },
};
</script>

<style scoped>
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
</style>