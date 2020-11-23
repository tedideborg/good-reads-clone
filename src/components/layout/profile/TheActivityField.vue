<template>
  <div class="activity">
    <h4>Activity</h4>
    <base-card margin="20px 0px 20px 0">
      <h2>Ted just review a book!</h2>
      <h5>He gave it</h5>
      <StarsRating rating="4" />
    </base-card>
  </div>
</template>

<script>
import StarsRating from "../../books/StarsRating";
export default {
  components: {
    StarsRating,
  },
};
</script>

<style scoped>
.activity {
  flex: 0.66;
}

h4,
h5 {
  color: grey;
}

h4 {
  margin: 0 20px 20px 0;
}

h5 {
  display: inline;
}
</style>
