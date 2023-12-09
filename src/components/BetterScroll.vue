<template>
  <div class="horizontal-scrollbar-container">
    <div class="w-[92vw] mx-auto scroll-wrapper overflow-hidden" ref="scroll">
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
import BScroll from "@better-scroll/core";
import Scrollbar from "@better-scroll/scroll-bar";

BScroll.use(Scrollbar);

export default {
  data() {
    return {
      num: 12,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.scroll.destroy();
  },
  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollX: true,
        click: true,
        stopPropagation: true,
        scrollY:true
      });
    },
  },
  updated(){
    this.init()
  }
};
</script>
  