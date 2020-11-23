<template>
  <button :class="{ invert: invert }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["invert"],
};
</script>

<style scoped>
button {
  max-height: 40px;
  min-width: 100px;
  border: 2px solid green;
  background: white;
  color: green;
  border-radius: 5px;
  font-size: 14px;
  padding: 4px 10px;
  margin-right: 10px;
}
button:hover {
  background: green;
  color: white;
}

.invert {
  background: green;
  color: white;
}
</style>
