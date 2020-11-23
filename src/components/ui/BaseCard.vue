<template>
  <div class="card" :style="{ margin: margin, padding: padding }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      required: false,
      default: "20px",
    },
    margin: {
      type: String,
      required: false,
      default: "20px",
    },
  },
};
</script>

<style scoped>
.card {
  background: white;
  border-bottom: 2px solid lightgrey;
}
</style>
