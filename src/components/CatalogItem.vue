<template>
  <div class="catalog-item">
    <img :src="product_data.image" alt="img">
    <h3>{{ product_data.name }}</h3>
      <p>actors:
        <span
          @click="showAllActors"
          v-for="(actor, i) in product_data.actors.slice(0, 2)"
          :key="i"
        >
          {{ actor.first_name }},
        </span>
      </p>
      <p v-if="allActors">
        <span
            @click="showAllActors"
            v-for="(actor, i) in product_data.actors.slice(2)"
            :key="i"
        >
          {{ actor.first_name }},
        </span>
      </p>
    <p v-else>production year: <span>{{ product_data.production_year }}</span></p>
    <p>duration: <span>{{ product_data.duration }}</span></p>
    <button @click="sendDataToParent">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  data() {
    return {
      allActors: false
    }
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    showAllActors() {
      this.allActors = !this.allActors;
    },
    sendDataToParent() {
      this.$emit('sendData', this.product_data.id)
      this.$router.push(`/cart/${this.product_data.id}`);
    }
  },
  mounted() {
  }
}
</script>

<style>
  span {
    color: teal;
  }
  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
  }
</style>