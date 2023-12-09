<template>
  <div>
    <Card :title="resource.uiElement.subTitle.title"> </Card>
  </div>
</template>

<script>
import Card from "./card";
export default {
  components: { Card },
  name: "NeteasecloudMusList",

  data() {
    return {};
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

<style lang="scss" scoped>
</style>