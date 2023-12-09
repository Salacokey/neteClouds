<template>
  <div class="w-[100vw] px-[4vw] dark:text-[#e9ebf2]">
    <div class="flex items-center justify-between h-[12vw]">
      <div class="flex items-center">
        <span
          class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]"
          >{{ title }}</span
        >
        <icon
          icon="mingcute:right-line"
          class="dark:text-[#e9ebf2] text-[#3d475b] font-[800] w-[4vw] h-[4vw] iconify iconify--mingcute"
        />
      </div>
      <More :titleVal="title">
        <icon icon="mingcute:more-2-line" class="dark:text-[#e9ebf2] dark:bg-black text-[#3d475b] w-[4vw] h-[6vw] iconify iconify--ri"/>
      </More>
    </div>
  </div>
</template>

<script>
import More from "../children/more.vue"
export default {
  components: { More },
  name: "NeteasecloudCard",

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>