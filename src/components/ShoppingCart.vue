<template>
  <section class="h-100">
    <div class="container h-100  mt-3" style="background-color: white">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">
          <hr/>
          <div>
            <div class="text-center">
              <h2 class="fw-light">ПРОИЗВОДИ ВО ВАШАТА КОШНИЧКА</h2>
            </div>
          </div>
          <hr/>
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-normal mb-0 text-black"></h3>
          </div>
          <div v-for="c in cartItems" :key="c.data.id">
            <div class="card rounded-3 mb-4">
              <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                    <img
                        :src="'http://localhost:8000/storage/'+c.data.image"
                        class="img-fluid rounded-3">
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2">{{ c.data.name }}</p>

                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button class="btn btn-light px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fa fa-minus"></i>
                    </button>
                    <input id="form1" min="0" name="quantity" value="2" type="number"
                           class="form-control form-control-sm"/>
                    <button class="btn btn-light px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 class="mb-0">{{ c.data.price }} ден.</h5>
                  </div>
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <button @click="removeItem(c.id)" class="text-danger border-0"><i class="fa fa-trash fa-lg"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <div class="card-body">
                <p>ВКУПНО:</p>
                <p>{{ cartTotal }} ден.</p>
              </div>
            </div>
          </div>
          <div class="card text-center">
            <div class="card-body">
              <button type="button" class="btn btn-warning btn-block btn-lg text-white w-100">ПЛАТИ</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "ShoppingCart",

  components: Product,

}
</script>
<script setup>
import {onMounted, ref} from "vue";
import {POSITION, useToast} from "vue-toastification";
const cartItems = ref(null)
let cartTotal = 0

const loadItems = () => {
  const cart = localStorage.getItem("cartItems")
  if (cart) {
    cartItems.value = JSON.parse(cart);
  }
  totalPrice()
}

const totalPrice = () => {
  cartTotal = 0;
  for(const item of cartItems.value){
    cartTotal+=item.data.price
  }
};

const removeItem = (id) => {
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const index = cart.findIndex(item => item.id === id);
  cart.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cart));
  loadItems();
  totalPrice();
  const toast = useToast();
  toast.success("Успешно ибришан производ.");

}
onMounted(
    () => loadItems()
)

</script>
<style scoped>

</style>