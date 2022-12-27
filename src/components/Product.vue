<template>
  <div class="container-fluid">
    <div class="row col-12 mt-5">
      <div class="col-lg-6">
        <img
            src="https://img.global.news.samsung.com/za/wp-content/uploads/2020/12/Holiday-Series-Part-1-Lifestyle-TV_main_1_F.jpg"
            alt="..." class="w-100 rounded-3">
      </div>
      <div class="col-lg-6 text-color mt-5">
        <h1 class="display-3">PRESENT</h1>
        <h4 class="mt-3">1000 ден.</h4>
        <div class="mt-4 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div class="form">
          <div class="form-group">
            <label for="quantity">Количина:</label>
            <input type="number" class="form-control w-25 h-25" id="quantity" placeholder="1">
          </div>
        </div>
        <button class="btn btn-light w-100 fs-4 mt-5 btn-bg-orange text-white m-auto rounded-0">Додади во кошничка</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
}
</script>

<style scoped>

.btn-bg-orange {
  background-color: #fda71d;
}

.text-color {
  color: dimgrey;
}
</style>