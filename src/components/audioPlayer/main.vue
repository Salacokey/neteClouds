<template>
  <div>
    <div @click="f1">音乐播放器</div>
    <div @click="f2">下一首</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Player from "./player.js";
const player = new Player();
export default {
  name: "AudioPlayer",
  data() {
    return {
      tracks: [],
    };
  },
//   "30953009",
//         "35270639",
//         "472361096",
//         "346576",
//         "33911781",
//         "34228719",
  created() {
    console.log(this.songList);
    for (const key in this.songList) {
      this.tracks.push(this.songList[key].id);
    }
    console.log(this.tracks);
  },
  methods: {
    f1() {
      player.replaceTracks(this.tracks);
    },
    f2() {
      player.playNextTrack();
    },
  },
  computed: {
    ...mapState(["songList"]),
  },
};
</script>

<style lang="scss" scoped>
</style>