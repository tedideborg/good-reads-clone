<template>
  <TheHeader />
  <TheSubHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheSubHeader from "./components/layout/TheSubHeader";

export default {
  name: "App",
  components: {
    TheHeader,
    TheSubHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: whitesmoke;
}

button {
  outline: none;
  cursor: pointer;
}
</style>
