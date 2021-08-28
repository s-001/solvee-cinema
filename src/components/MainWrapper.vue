<template>
  <div class="main-wrapper">
    <router-view></router-view>
    <!--    <Catalog-->
<!--    @sendFilm="showFilmRoom"-->
<!--    />-->
<!--    <Cart-->
<!--      v-if="ROOMS.length"-->
<!--      :film_room="room"-->
<!--      :film_index="filmIndex"-->
<!--    />-->
  </div>
</template>

<script>
// import Catalog from "./Catalog";
// import Cart from "./Cart";
import {mapGetters} from 'vuex'

export default {
  name: "MainWrapper",
  // components: {
  //   Cart,
  //   Catalog,
  // },
  data() {
    return {
      title: 'Main Wrapper',
      room: {},
      filmIndex: 0,
    }
  },
  computed: {
    ...mapGetters([
        "ROOMS"
    ])
  },
  methods: {
    showFilmRoom(film, fIndex) {
      this.room = film;
      this.filmIndex = fIndex;
      console.log(this.filmIndex)
    }
  },

}
</script>

<style scoped>
  .main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 900px;
    margin: 0 auto;
  }
</style>