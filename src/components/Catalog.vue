<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @sendData="showDataInConsole"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Catalog",
  data() {
    return {
      // products: [
      //     {
      //       image: "https://dummyimage.com/300.png/09f",
      //       name: "movie name #1",
      //       production_year: 2021,
      //       duration: 110,
      //       id: 0,
      //       actors: [
      //         {
      //           first_name: "first name",
      //           last_name: "last name",
      //           sex: "Male",
      //           nationality: "nation #1"
      //         },
      //         {
      //           first_name: "first name2",
      //           last_name: "last name2",
      //           sex: "Male",
      //           nationality: "nation #2"
      //         },
      //         {
      //           first_name: "first name3",
      //           last_name: "last name3",
      //           sex: "Male",
      //           nationality: "nation #3"
      //         },
      //         {
      //           first_name: "first name4",
      //           last_name: "last name4",
      //           sex: "Male",
      //           nationality: "nation #4"
      //         },
      //         {
      //           first_name: "first name5",
      //           last_name: "last name5",
      //           sex: "Male",
      //           nationality: "nation #5"
      //         }
      //       ]
      //     },
      //     {
      //       image: "https://dummyimage.com/300.png/09a",
      //       name: "movie name #2",
      //       production_year: 2021,
      //       duration: 120,
      //       id: 1,
      //       actors: [
      //         {
      //           first_name: "first name",
      //           last_name: "last name",
      //           sex: "Male",
      //           nationality: "nation #1"
      //         },
      //         {
      //           first_name: "first name2",
      //           last_name: "last name2",
      //           sex: "Male",
      //           nationality: "nation #2"
      //         },
      //         {
      //           first_name: "first name3",
      //           last_name: "last name3",
      //           sex: "Male",
      //           nationality: "nation #3"
      //         },
      //         {
      //           first_name: "first name4",
      //           last_name: "last name4",
      //           sex: "Male",
      //           nationality: "nation #4"
      //         },
      //         {
      //           first_name: "first name5",
      //           last_name: "last name5",
      //           sex: "Male",
      //           nationality: "nation #5"
      //         }
      //       ]
      //     },
      //     {
      //       image: "https://dummyimage.com/300.png/02c",
      //       name: "movie name #3",
      //       production_year: 2021,
      //       duration: 130,
      //       id: 2,
      //       actors: [
      //         {
      //           first_name: "first name",
      //           last_name: "last name",
      //           sex: "Male",
      //           nationality: "nation #1"
      //         },
      //         {
      //           first_name: "first name2",
      //           last_name: "last name2",
      //           sex: "Male",
      //           nationality: "nation #2"
      //         },
      //         {
      //           first_name: "first name3",
      //           last_name: "last name3",
      //           sex: "Male",
      //           nationality: "nation #3"
      //         },
      //         {
      //           first_name: "first name4",
      //           last_name: "last name4",
      //           sex: "Male",
      //           nationality: "nation #4"
      //         },
      //         {
      //           first_name: "first name5",
      //           last_name: "last name5",
      //           sex: "Male",
      //           nationality: "nation #5"
      //         }
      //       ]
      //     }
      //   ],
      rooms: {
        1: {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
          7: false,
          8: false,
          9: false,
          10: false,
          11: false,
          12: false,
          13: false,
          14: false,
          15: false,
          16: false,
          17: false,
          18: false,
          19: false,
          20: false,
          21: false,
          22: false,
          23: false,
          24: false,
          25: false,
          26: false,
          27: false,
          28: false,
          29: false,
          30: false
        },
        2:  {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: true,
          7: true,
          8: true,
          9: true,
          10: true,
          11: true,
          12: true,
          13: true,
          14: false,
          15: false,
          16: false,
          17: false,
          18: false,
          19: false,
          20: false,
          21: false,
          22: false,
          23: false,
          24: false,
          25: false,
          26: false,
          27: false,
          28: false,
          29: false,
          30: false
        },
        3:  {
          1: true,
          2: true,
          3: true,
          4: true,
          5: true,
          6: true,
          7: true,
          8: true,
          9: true,
          10: false,
          11: false,
          12: false,
          13: false,
          14: false,
          15: false,
          16: false,
          17: false,
          18: false,
          19: false,
          20: false,
          21: false,
          22: false,
          23: false,
          24: false,
          25: false,
          26: false,
          27: false,
          28: false,
          29: false,
          30: false
        }
      }
    }
  },
  components: {CatalogItem},
  methods: {
    ...mapActions([
       'GET_PRODUCTS_FROM_API',
       'GET_ROOMS_FROM_API'
    ]),
    showDataInConsole(data) {
      this.$emit('sendFilm', this.ROOMS[data], data)
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'ROOMS'
    ]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    this.GET_ROOMS_FROM_API();
  }
}
</script>

<style>
  .catalog .catalog__list {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-items: center;
  }
</style>