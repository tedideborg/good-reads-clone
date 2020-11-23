<template>
  <BooksList :books="books" />
</template>

<script>
import BooksList from "../components/books/BooksList";

export default {
  computed: {
    books() {
      return this.$store.getters["books"];
    },
  },
  components: {
    BooksList,
  },
};
</script>

<style></style>
