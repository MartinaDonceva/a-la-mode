<template>

  <div class="row mt-5" >
    <div v-for="card in products" class="col col-12 col-md-6 col-lg-4 mb-4" :key="card.id">
      <router-link  :to="{ name: 'product', params: { id: card.id } }" class="text-decoration-none text-black">
      <div class="card card-style">
        <div class="ratio  ratio-4x3">
          <img
              :src="'http://localhost:8000/storage/'+card.image"
              alt="..." class=" w-100 rounded-3" >
        </div>

        <div class="card-body">
          <h5 class="card-title">{{ card.name }}</h5>
          <p class="card-text">Цена: {{ card.price }}</p>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {onMounted, ref} from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CustomCards",
  setup() {
    // reactive state
    let products = ref([]);
    // mounted
    onMounted(() => {
      // get api from laravel backend
      axios
          .get('/products')
          .then((res) => {
            // assign state users with response data
            products.value = res.data.data;
          })
          .catch((error) => {
            console.log(error.res.data);
          });
    });

    return {
      products
    };
  }
}
</script>

<style scoped>
.card-style {
  border: none;
}

.btn-bg-orange {
  background-color: #fda71d;
}
</style>
