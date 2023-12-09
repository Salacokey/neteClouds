// import Vue from "vue"
import { Howl, Howler } from "howler";
import { getTrackUrl, getTrackDetail } from "@/service";
let timer = null;
// Howl 加载音乐 播放暂停
// Howler 全局设置声音大小 播放速度
// 播放器的功能
// 定义一个属性保存播放歌单
// 定义一个方法更新播放歌单
export default class {
  constructor() {
    // 播放器的播放状态
    this.playing = false;
    this.duration = 0;
    this.progress = 0;
    this.index = 0;
    this.tracks = [];
    // 播放循环模式 0列表循环 1单曲循环
    this.loopMode = 0;
    this.howl = null;
    this.currentTrackDetail = {};
  }
  interval() {
    clearInterval(timer);
    timer = setInterval(() => {
      this.progress = this.howl.seek() / this.howl.duration();
    }, 1000);
  }
  replaceTracks(tracks, autoplayTrack) {
    //autoplayTrack 歌曲的id
    this.tracks = tracks;
    // 指定从autoplayTrack开始播放
    if (autoplayTrack) {
      this.index = this.tracks.indexOf(autoplayTrack);
    }
    this.playTrack(this.tracks[this.index]);
  }
  //播放歌曲的方法
  async playTrack(track) {
    const [getTrackUrlError, response] = await getTrackUrl(track);
    const [getTrackDetailError, res] = await getTrackDetail(track);
    if (getTrackUrlError) return console.log("获取mp3 url异常");
    if (getTrackDetailError) return alert("获取歌曲详情异常");
    console.log(res);
    this.currentTrackDetail = res.data.songs[0];
    const mp3Url = response.data.data[0].url;
    if (mp3Url) return this.mountAudioSource(mp3Url, true);
    this.playNextTrack();
  }
  //   挂载音乐
  mountAudioSource(url, autoplay = false) {
    Howler.unload();
    this.howl = new Howl({
      src: [url],
      html5: true,
      format: ["mp3"],
    });
    if (autoplay) this.play();
    this.howl.on("end", () => this.playNextTrack());
  }
  // 播放音乐
  play() {
    // if (!this.howl) return;
    // if (this.howl.playing()) return;
    this.playing = true;
    // this.duration = this.howl.duration();
    this.interval();
    this.howl.play();
  }
  //暂停播放
  pause() {
    this.playing = false;
    this.howl.pause();
  }
  toggle() {
    this.playing ? this.pause() : this.play();
  }
  // 播放下一首
  playNextTrack() {
    const nextTrack = this.getNextTrack();
    // this.moun_audio_src(next_track, true)
    this.playTrack(nextTrack);
  }
  // 获取下一首播放的id
  getNextTrack() {
    if (this.loopMode == 1) return this.tracks[this.index];
    const currentTrackIsLast = this.index + 1 == this.tracks.length;
    if (currentTrackIsLast && this.loopMode == 0)
      return this.tracks[(this.index = 0)];
    return this.tracks[++this.index];
  }
  getTrackDetail() {}
}
