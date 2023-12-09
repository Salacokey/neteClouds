<template>
  <component
    :is="blocksTypeComponentMap[resource.blockCode]"
    :resource="resource"
  />
</template>

<script>
import Banner from "./banner.vue";
import ScorllList from "./scorllList.vue";
import RecommendList from "./recommendList.vue";
import MusicianList from "./musicainList.vue";
import CollectionList from "./collectionList.vue";
import Newsong from "./newsong.vue";
import Caleng from "./calendList.vue";
import PlayList from "./playList.vue";
import ListenList from "./listenList.vue";
import MusList from "./musList.vue";
import VoiceList from "./voiceList.vue";

const blocksTypeComponentMap = {
  HOMEPAGE_BANNER: Banner,
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: ScorllList,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: RecommendList,
  HOMEPAGE_MUSICIAN_REVISIT: MusicianList,
  HOMEPAGE_VOICELIST_RCMD: VoiceList,
  HOMEPAGE_BLOCK_LISTEN_LIVE: ListenList,
  HOMEPAGE_BLOCK_STYLE_RCMD: CollectionList,
  HOMEPAGE_BLOCK_MUS: MusList,
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: Newsong,
  HOMEPAGE_MUSIC_CALENDAR: Caleng,
  HOMEPAGE_BLOCK_MGC_PLAYLIST: PlayList,
};
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Block",
  data() {
    return {
      blocksTypeComponentMap,
    };
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created() {
  },
};
</script>