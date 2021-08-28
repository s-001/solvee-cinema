<template>
  <div class="cart">
    <h1>Rooms</h1>
    <div>
      <tr>
        <td
          v-for="(elem, i) in this.$store.state.rooms[this.$route.params.id]"
          :key="i"
          :class="elem ? 'inactive' : 'active'"
          @click="this.$store.commit('checkIn', [this.$route.params.id, i])"
        >
          {{i}}
        </td>
      </tr>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
}
</script>

<style scoped>
  td {
    width: 30px;
    height: 30px;
    border: 1px solid white;
  }
  .inactive {
    background-color: chocolate;
  }
  .active {
    background-color: teal;
  }
</style>