<template>
  <div class="container-fluid">
    <div class="row col-12 mt-5" v-if="product">
      <div class="col-lg-6">
        <img
            :src="'http://localhost:8000/storage/'+product.data.image"
            alt="..." class="w-100 rounded-3">
      </div>
      <div class="col-lg-6 text-color mt-5">
        <h1 class="display-3">{{ product.data.name }}</h1>
        <h4 class="mt-3">{{ product.data.price }}</h4>
        <div class="mt-4 mb-4">{{ product.data.description }}</div>
        <div class="form">
          <div class="form-group">
            <label for="quantity">Количина:</label>
            <input type="number" class="form-control w-25 h-25" id="quantity" placeholder="1">
          </div>
        </div>
        <button @click="addToCart(product)"
                class="btn btn-light w-100 fs-4 mt-5 btn-bg-orange text-white m-auto rounded-0">Додади во кошничка
        </button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Product",
  data() {
    return {
      cart: [],
    }
  },
  methods: {
    addToCart(product) {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      storedCart.push(product);
      localStorage.setItem("cartItems", JSON.stringify(storedCart));
      this.cart = storedCart;
    }
  },

}
</script>
<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
const route = useRoute()
const product = ref(null)

defineProps({})
onMounted(
    () => {
      const productId = route.params.id;
      axios.get(`/products/${productId}`).then(response => {
        product.value = response.data;


        const savedCartItems = localStorage.getItem("cartItems");
        console.log(savedCartItems)
        if (savedCartItems) {
          this.cart = JSON.parse(savedCartItems);
        }
      });
    }
)

</script>

<style scoped>

.btn-bg-orange {
  background-color: #fda71d;
}

.text-color {
  color: dimgrey;
}
</style>