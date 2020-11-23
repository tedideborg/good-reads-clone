<template>
  <h4>Ted is currentl reading...</h4>
  <base-card margin="20px 0 20px 20px" padding="0px">
    <div class="wrapper">
      <div class="book">
        <img src="#" alt="" />
        <p>Pride and prejudice</p>
        <p>By Jules verne</p>
      </div>
      <div class="book">
        <img src="#" alt="" />
        <p>Pride and prejudice</p>
        <p>By Jules verne</p>
      </div>
      <div class="book">
        <img src="#" alt="" />
        <p>Pride and prejudice</p>
        <p>By Jules verne</p>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {};
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

.book {
  border: 0;
  border-bottom: 1px solid lightgrey;
  background: white;
  color: grey;
  text-align: start;
  padding: 15px 10px;
}
</style>
