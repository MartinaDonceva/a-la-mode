<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <div class="text-center">
        <p class="textColor mb-0 py-2 display-3">A  La  Mode</p>
      </div>
      <div class="ms-lg-auto">
        <a class=" textColor navbar-brand fs-4 fw-light" href="#">HOME</a>
        <a class="textColor navbar-brand fs-4 fw-light" href="#">CONTACT</a>
        <a class="textColor navbar-brand fs-4 fw-light" href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CustomHeader",
};
</script>

<style scoped>
p {
  font-family: 'Brush Script MT', cursive;
}
.textColor{
  color: dimgrey;
}
</style>
