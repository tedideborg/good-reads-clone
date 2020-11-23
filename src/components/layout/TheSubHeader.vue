<template>
  <div>
    <router-link to="/home"><i class="fas fa-home"></i> HOME</router-link>
    <router-link to="/profile"><i class="fas fa-user"></i> PROFILE</router-link>
    <router-link to="/mybooks"
      ><i class="fas fa-book-reader"></i> MY BOOKS</router-link
    >
    <router-link to="/bookshelves"
      ><i class="fas fa-book"></i> BOOKSHELVES</router-link
    >
  </div>
</template>

<style scoped>
div {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-bottom: 2px solid lightgrey;
}

a {
  text-decoration: none;
  margin: 2px 10px 4px 10px;
  border: 0;
  padding: 14px 10px;
  font-size: 14px;
  color: grey;
  background: white;
}

.router-link-active {
  margin-top: 6px;
  border-bottom: 4px solid green;
}
</style>
