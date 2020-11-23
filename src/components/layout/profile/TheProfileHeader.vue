<template>
  <base-card>
    <div class="wrapper">
      <div class="top-part">
        <img src="../../../assets/logo.png" alt="" />
        <div>
          <h1>
            {{ user.firstName }} {{ user.lastName }}
            <i class="fas fa-map-marker-alt"></i
            ><span>{{ user.location.city }}, {{ user.location.country }}</span>
          </h1>
          <p class="description">
            {{ user.description }}
          </p>
          <div class="social-media">
            <p v-for="media in user.socialMedia" :key="media.type">
              <i
                class="fab"
                :class="
                  'fa-' + (media.type === 'website' ? 'chrome' : media.type)
                "
              ></i>
              {{ media.type }}
            </p>
          </div>
        </div>
        <base-button>Edit Profile</base-button>
      </div>
      <div class="bottom-part">
        <p>
          <span>{{ user.data.ratings }}</span> Ratings
        </p>
        <p>
          <span>{{ user.data.reviews }}</span> Reviews
        </p>
        <p>
          <span>{{ user.data.books.booksRead.length }}</span> Books Read
        </p>
        <p>
          <span>{{ booksPerMonth }}</span> Books/month
        </p>
        <p>
          <span>{{ user.data.friends }}</span> Friends
        </p>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["user"];
    },
    booksPerMonth() {
      return this.user.data.books.booksRead.length / 2;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  min-height: 170px;
}

img {
  display: inline-block;
  max-width: 60px;
  max-height: 60px;
  margin-right: 20px;
  border-radius: 50%;
}

h1 {
  margin-bottom: 10px;
}

h1 span,
h1 i {
  color: grey;
  font-size: 18px;
}

h1 span {
  font-weight: 400;
  margin-left: 10px;
}

.top-part {
  display: flex;
  justify-content: center;
  align-self: start;
}

.social-media {
  margin: 14px 0 38px 0;
}

.social-media p {
  display: inline-block;
  margin-right: 20px;
  color: grey;
}

.bottom-part {
  position: absolute;
  bottom: 0;
  margin-bottom: -20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-part p {
  padding: 10px 0;
  flex: 1;
  border: 0;
  background: white;
  border-top: 2px solid grey;
  text-align: center;
}

.bottom-part p span {
  color: green;
  font-weight: 700;
}
</style>
