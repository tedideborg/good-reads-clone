<template>
  <li>
    <base-card>
      <div class="content">
        <router-link :to="bookDetailsLink"
          ><img :src="img" alt=""
        /></router-link>
        <section>
          <h2>{{ title }}</h2>
          <h3>by {{ strAuthors }}</h3>
          <p>{{ desc }}</p>
          <div class="bottom-section">
            <WantToReadButton
              @click="addBook({ img, id, title, authors, desc, rating })"
            />
            <p>rating</p>
            <StarsRaing :rating="rating" />
          </div>
        </section>
      </div>
    </base-card>
  </li>
</template>

<script>
import StarsRaing from "./StarsRating";
import WantToReadButton from "./WantToReadButton";
import { getAuthors } from "../../utils/getAuthors";

export default {
  components: {
    StarsRaing,
    WantToReadButton,
  },
  props: ["id", "img", "title", "desc", "authors", "rating"],
  methods: {
    addBook(book) {
      this.$store.dispatch("addBook", book);
    },
  },
  computed: {
    bookDetailsLink() {
      return `/book/${this.id}`;
    },
    strAuthors() {
      return getAuthors(this.authors);
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 193px;
  border-radius: 5px;
}
h2,
h3 {
  display: inline-block;
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h3 {
  font-weight: 200;
  margin-left: 20px;
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
  position: relative;
}

.bottom-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
}

.bottom-section p {
  display: inline-block;
  width: auto;
  margin-top: 10px;
}
</style>
