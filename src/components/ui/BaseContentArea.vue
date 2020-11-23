<template>
  <div class="bottom-part">
    <div class="content">
      <slot></slot>
    </div>
    <aside>
      <slot name="aside"></slot>
    </aside>
  </div>
</template>

<style scoped>
.bottom-part {
  display: flex;
  margin: 20px;
}

.content {
  flex: 66%;
}

aside {
  flex: 33%;
}
</style>
