import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
    rooms: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_ROOMS_TO_STATE: (state, rooms) => {
      state.rooms = rooms;
    },
    checkIn(state, chair) {
        state.rooms[chair[0]][chair[1]] = !state.rooms[chair[0]][chair[1]]
        console.log(chair[0])
        console.log(chair[1])
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('https://mocki.io/v1/82d0df3c-75f8-44e3-9bc0-727440aa4707', {
        method: "GET"
      })
          .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data.products);
            // console.log(products.data.products);
            return products.data.products;
          })
          .catch(error => {
            console.log(error);
            return error;
          })
    },
    GET_ROOMS_FROM_API({commit}) {
      return axios('http://localhost:3000/rooms', {
        method: "GET"
      })
          .then((rooms) => {
            commit('SET_ROOMS_TO_STATE', rooms.data);
            // console.log(rooms.data)
            return rooms.data;
          })
          .catch(error => {
            console.log(error);
            return error;
          })
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    ROOMS(state) {
      return state.rooms;
    }
  },
  modules: {
  }
})
