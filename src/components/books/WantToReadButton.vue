<template>
  <button :style="{ padding: padding }">
    Want to read<i class="fas fa-book"></i>
  </button>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      reqired: false,
      default: "10px",
    },
  },
};
</script>

<style scoped>
button {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  background: lightseagreen;
  border: 0;
  color: white;
  border-radius: 5px;
}

button i {
  margin-left: 14px;
}
</style>
