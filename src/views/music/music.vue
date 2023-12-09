<template>
  <div>
    <div class="relative h-[100vh] pb-[12vw]">
      <div class="absolute z-[3] flex flex-wrap h-[100%] pb-[7.5vw]">
        <div
          class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between"
        >
          <div @click="$router.go(-1)">
            <icon
              icon="bytesize:chevron-bottom"
              class="dark:text-[#EEEEEE] text-[6vw] mt-[0.6vw] text-[#fff]"
            />
          </div>
          <div class="text-center w-[60vw]">
            <p class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1">
              {{ mixin_player.currentTrackDetail.name }}
            </p>
            <span class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">{{
              mixin_player.currentTrackDetail?.ar
                ?.map(({ name }) => name)
                .join("/")
            }}</span>
            <span
              class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]"
              >关注</span
            >
          </div>
          <icon icon="ri:share-line" class="text-[6vw] text-[#fff] iconify" />
        </div>
        <div class="relative top-[2%] w-[100vw] h-[120vw]">
          <div
            class="absolute top-[10%] left-[50%] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
          >
            <img
              src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png"
              alt=""
              class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"
            />
          </div>
          <div
            class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]"
          >
            <div class="absolute w-[80vw] h-[80vw]">
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
                class="absolute w-[80vw] h-[80vw]"
              />
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png"
                alt=""
                class="w-[80vw] h-[80vw] absolute top-0"
              />
            </div>
            <img
              :src="mixin_player.currentTrackDetail?.al?.picUrl"
              alt=""
              class="w-[50vw] h-[50vw] absolute top-[50%] translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-[50%] border-[5px] border-[#000] rotateAnimation1 paused-animation"
            />
          </div>
        </div>
        <div class="flex flex-wrap content-end">
          <div class="w-[100vw] mt-[5vw] flex justify-evenly items-center">
            <icon icon="mdi:heart-outline" class="text-[6vw] text-[#fff]" />
            <icon icon="mdi-light:download" class="text-[5vw] text-[#fff]" />
            <icon icon="fa-solid:user-friends" class="text-[5vw] text-[#fff]" />
            <icon
              icon="fluent:chat-12-regular"
              class="text-[6vw] text-[#fff]"
            />
            <icon
              icon="ant-design:more-outlined"
              class="text-[6vw] text-[#fff]"
            />
          </div>
          <div class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw]">
            <!-- <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80"></div>
            <div class="flex-1 mx-[2.5vw] vue-slider vue-slider-ltr"></div> -->
            <vue-slider v-model="value" :width="500" :min="0" :max="100" class="w-[100%]"></vue-slider>
          </div>
          <div class="h-[12.3vw] flex w-[100vw] items-center justify-evenly">
            <div>
              <icon
                icon="cil:loop"
                v-if="true"
                class="text-[#fff] text-[8vw]"
              />
              <icon icon="cil:loop-1" v-else class="text-[#fff] text-[8vw]" />
            </div>
            <div>
              <icon icon="fluent:previous-32-regular" class="text-[#fff]" />
            </div>
            <div
              @click="mixin_player.toggle()"
              class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center"
            >
              <icon
                :icon="
                  mixin_player.playing
                    ? 'ic:sharp-pause'
                    : 'fluent:triangle-right-20-filled'
                "
              />
            </div>
            <div @click="mixin_player.playNextTrack()">
              <icon icon="fluent:next-32-regular" class="text-[#fff]" />
            </div>
            <div class="pl-[4.5vw]">
              <van-cell @click="show = true">
                <icon icon="ri:menu-add-fill" class="text-[6vw] text-[#fff]" />
              </van-cell>
              <van-action-sheet v-model="show">
                <h1 class="text-[4vw] font-extrabold mt-[5vw] ml-[5vw]">
                  当前播放<span class="text-[2vw] text-[#929293]"
                    >({{ mixin_player.tracks.length }})</span
                  >
                </h1>
                <div
                  class="flex justify-between mt-[6.6vw] items-center ml-[5vw]"
                >
                  <div class="flex">
                    <icon icon="cil:loop" class="text-[5vw] text-[#B1B1B1]" />
                    <h1 class="ml-[1.5vw] text-[3.4vw] font-medium">
                      列表循环
                    </h1>
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
                  v-for="item in songList"
                  :key="item.id"
                >
                  <div class="flex items-center">
                    <img
                      v-if="item.id == mixin_player.tracks[mixin_player.index]"
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
                    <p class="text-[3vw] mr-[6vw] text-[#BCBCBC]">播放来源</p>
                    <icon icon="bi:x" class="text-[5vw] text-[#B1B1B1]" />
                  </div>
                </div>
              </van-action-sheet>
            </div>
          </div>
        </div>
      </div>
      <div
        class="element fixed z-[1] top-0 left-0 right-0 bottom-0"
        :style="{
          backgroundImage:
            'url(' + mixin_player.currentTrackDetail?.al?.picUrl + ')',
        }"
      ></div>
      <div class="fixed z-[2] bgColor top-0 left-0 right-0 bottom-0"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NeteasecloudMusic",

  data() {
    return {
      show: false,
      value:0
    };
  },

  computed: {
    ...mapState(["songList"]),
  },

  methods: {
    changeProgress(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.element {
  background-size: 100% 100%;
  filter: blur(24px);
}
.bgColor {
  background-color: rgba(0, 0, 0, 0.5);
}
.van-cell {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
</style>