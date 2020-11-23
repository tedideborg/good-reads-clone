<template>
  <h4>Ted's bookshelves</h4>
  <base-card margin="20px 0 20px 20px" padding="0px">
    <div class="wrapper" v-for="bookshelf in bookshelves" :key="bookshelf">
      <button>{{ Object.keys(bookshelf)[0] }}</button>
    </div>
  </base-card>
</template>

<script>
export default {
  computed: {
    bookshelves() {
      return this.$store.getters["bookshelves"];
    },
  },
};
</script>

<style scoped>
h4 {
  margin: 0px 0px 20px 20px;
  color: grey;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

button {
  border: 0;
  border-bottom: 1px solid lightgrey;
  background: white;
  color: grey;
  text-align: start;
  padding: 15px 10px;
}
</style>
