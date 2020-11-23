<template>
  <nav>
    <h1><span>good</span>reads</h1>
    <form @submit.prevent="submitSearch">
      <input v-model="searchInput" type="text" />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
    <!-- <div> -->
    <button><i class="fas fa-user-friends"></i></button>
    <button><i class="fas fa-inbox"></i></button>
    <button><i class="fas fa-bell"></i></button>
    <!-- </div> -->
    <!-- user login and such -->
    <!-- <div> -->
    <p>Ted</p>
    <img src="../../assets/logo.png" alt="" />
    <button><i class="fas fa-chevron-circle-down"></i></button>
    <!-- </div> -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    submitSearch() {
      this.$store.dispatch("getBooks", this.searchInput);
    },
  },
};
</script>

<style scoped>
i {
  font-size: 22px;
  line-height: 0px;
  vertical-align: middle;
  margin: 0 16px;
}

h1 {
  font-size: 36px;
  padding: 10px 10px;
  color: white;
}

h1 span {
  font-weight: 200;
}

nav {
  background: lightseagreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  height: 36px;
  border: 0px;
  color: white;
  background: lightseagreen;
}

form {
  width: 100%;
}

input {
  height: 36px;
  border: 0px;
  border-radius: 4px 0 0 4px;
  background: mediumaquamarine;
  color: white;
  width: 60%;
  padding: 0 10px;
}

form button {
  border-radius: 0 4px 4px 0;
  background: mediumaquamarine;
  width: 80px;
  border-left: 1px solid white;
}

img {
  max-height: 40px;
  max-width: 40px;
  border: 1px solid white;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
