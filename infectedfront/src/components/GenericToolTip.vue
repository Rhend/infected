<template>
  <div>
    <div class="pb-1">{{ title }}</div>
    <div>{{ content }}</div>
  </div>
</template>
<script>
export default {
  name: "GenericToolTip",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
