<template>
  <div class="stars">
    <i
      class="fa-star"
      :class="{ fas: rating && rating >= 1, far: rating && rating < 1 }"
    ></i>
    <i
      class="fa-star"
      :class="{ fas: rating && rating >= 2, far: rating && rating < 2 }"
    ></i>
    <i
      class="fa-star"
      :class="{ fas: rating && rating >= 3, far: rating && rating < 3 }"
    ></i>
    <i
      class="fa-star"
      :class="{ fas: rating && rating >= 4, far: rating && rating < 4 }"
    ></i>
    <i
      class="fa-star"
      :class="{ fas: rating && rating >= 5, far: rating && rating < 5 }"
    ></i>
  </div>
</template>

<script>
export default {
  props: ["rating"],
};
</script>

<style scoped>
.stars {
  padding-top: 10px;
  font-size: 12px;
  display: inline-block;
}

.fas {
  color: gold;
}

.far {
  color: lightgrey;
}
</style>
