<template>
  <h1>Books</h1>
  <form @submit.prevent="addBookshelf">
    <input type="text" v-model="bookshelf" />
    <base-button type="submit">add bookshelf</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      bookshelf: "",
    };
  },
  methods: {
    addBookshelf() {
      this.$store.dispatch("addBookhelf", this.bookshelf);
    },
  },
};
</script>

<style></style>
