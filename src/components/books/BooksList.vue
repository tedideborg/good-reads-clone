<template>
  <ul>
    <BookItem
      v-for="book in books"
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
import BookItem from "./BookItem";

export default {
  props: ["books"],
  components: {
    BookItem,
  },
};
</script>

<style></style>
