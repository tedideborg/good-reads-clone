<template>
  <ul>
    <BookItem
      v-for="book in myBooks"
      :key="book.id"
      :id="book.id"
      :img="book.img"
      :title="book.title"
      :desc="book.desc"
      :author="book.author"
      :rating="book.rating"
    />
  </ul>
</template>

<script>
import BookItem from "../components/books/BookItem";

export default {
  computed: {
    myBooks() {
      return this.$store.getters["userBooks"];
    },
  },
  components: {
    BookItem,
  },
};
</script>

<style></style>
