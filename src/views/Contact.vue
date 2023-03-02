<template>
  <div class="container">
    <div class="row mt-5 text-color">
      <div class="col-lg-6">
        <h1 class="fw-bold mt-5">Стапете во контакт со нас.</h1>
        <hr/>
        <div class="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="mt-4">
          <h4>email@example.com</h4>
          <h4>(555) 555-5555</h4>
        </div>
      </div>
      <div class="col-lg-6 pt-lg-5">
        <form @submit.prevent="submitForm" method="post">

          <div class="row g-3 ">
            <div class="col">
              <label for="name" class="form-label">Име</label>
              <input type="text" v-model="form.name" class="form-control" id="name">
            </div>
            <div class="col">
              <label for="Lastname" class="form-label">Презиме</label>
              <input type="text" v-model="form.surname" class="form-control" id="LastName">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Корисничка адреса*</label>
              <input type="email" v-model="form.email" class="form-control" id="email">
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Наслов*</label>
              <input type="text" v-model="form.subject" class="form-control" id="subject">
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Порака*</label>
              <textarea class="form-control" v-model="form.message" id="message" rows="1"></textarea>
            </div>
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-bg-orange mb-3 text-white btn-light rounded-0 w-100">Испрати</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<script setup>
import axios from "axios";

const form = {
  name: '',
  surname: '',
  email: '',
  subject: '',
  message: ''
}
const submitForm = async () => {
  const response = axios.post('/clients', form);
}
</script>
<style scoped>
.text-color {
  color: dimgrey;
}

.btn-bg-orange {
  background-color: #fda71d;
}
</style>