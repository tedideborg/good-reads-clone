<template>
  <base-content>
    <h4>About the book</h4>
    <base-card margin="0 20px 20px 0">
      <div class="content">
        <div class="left-side">
          <router-link to="/home"
            ><img
              :src="
                bookDetails.imageLinks && bookDetails.imageLinks.smallThumbnail
              "
              alt=""
          /></router-link>
          <WantToReadButton padding="5px 8px" />
        </div>
        <section class="right-side">
          <h2>{{ bookDetails.title }}</h2>
          <p><span v-html="bookDetails.description"></span></p>
          <div class="bottom-section">
            <span>
              <h3>PUBLISHER</h3>
              <p>{{ bookDetails.publisher }}</p>
            </span>
            <span>
              <h3>DATE</h3>
              <p>{{ bookDetails.publishedDate }}</p>
            </span>
            <span>
              <h3>PAGES</h3>
              <p>{{ bookDetails.pageCount }}</p>
            </span>
            <span>
              <h3>TYPE</h3>
              <p>{{ bookDetails.printType }}</p>
            </span>
            <span>
              <h3>REVIEW</h3>
              <StarsRating :rating="bookDetails.averageRating" />
            </span>
          </div>
          <button class="getCopy" invert="true">Get Copy</button>
          <button class="getCopy arrow">
            <i class="fas fa-chevron-down"></i>
          </button>
          <base-button invert="true">Recommend</base-button>
        </section>
      </div>
    </base-card>
    <template v-slot:aside>
      <h4>About the author</h4>
      <base-card margin="0 0 20px 0">{{ authors }}</base-card>
    </template>
  </base-content>
</template>

<script>
import StarsRating from "../components/books/StarsRating";
import WantToReadButton from "../components/books/WantToReadButton";
import { getAuthors } from "../utils/getAuthors";

export default {
  props: ["bookId"],
  components: {
    StarsRating,
    WantToReadButton,
  },
  computed: {
    bookDetails() {
      return this.$store.getters["bookDetails"];
    },
    authors() {
      return getAuthors(this.bookDetails.authors);
    },
  },
  created() {
    this.$store.dispatch("getBookDetails", this.bookId);
  },
};
</script>

<style scoped>
h4 {
  margin-bottom: 20px;
  color: grey;
}

.content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
}

h2 {
  display: inline-block;
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h3 {
  font-size: 14px;
  color: lightseagreen;
}

p {
  max-height: 60px;
  display: inline-block;
  overflow: hidden;
}

img {
  display: inline;
  max-height: 100%;
  min-width: 128px;
}

section {
  margin-left: 14px;
  height: 100%;
}

.getCopy {
  max-height: 40px;
  min-width: 100px;
  border: 2px solid green;
  background: green;
  color: white;
  border-radius: 5px 0px 0px 5px;
  border-right: 0;
  font-size: 14px;
  padding: 4px 10px;
}

.arrow {
  border-radius: 0px 5px 5px 0px;
  border-left: 2px solid white;
  min-width: 30px;
  margin-right: 10px;
}

.getCopy:hover {
  background: green;
  color: white;
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  bottom: 0;
  border-bottom: 2px solid lightgrey;
  border-top: 2px solid lightgrey;
  width: 100%;
  margin: 20px 0;
}

.bottom-section span {
  padding: 16px 0;
  margin-right: 5px;
  flex: 1;
}

.bottom-section p {
  color: grey;
  font-size: 14px;
}

.bottom-section button {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 10px;
  background: lightseagreen;
  border: 0;
  color: white;
  border-radius: 5px;
}

.bottom-section button i {
  margin-left: 14px;
}

.bottom-section p {
  display: inline-block;
  width: auto;
  margin-top: 10px;
}
</style>
