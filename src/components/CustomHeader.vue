<template>
  <nav class="navbar bg-white navbar-expand-lg navbar-light sticky-top">
    <div class="container">
      <div class="text-center">
        <p class="text-color mb-0 py-2 display-3">A La Mode</p>
      </div>
      <div class="ms-lg-auto">
        <a class="text-color navbar-brand fs-4 fw-light" href="#">HOME</a>
        <a class="text-color navbar-brand fs-4 fw-light" href="#">CONTACT</a>
        <a class="text-color navbar-brand fs-4 fw-light" href="#"
          ><i class="fa fa-shopping-cart" aria-hidden="true"></i
        ></a>
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
  font-family: "Brush Script MT", cursive;
}

.text-color {
  color: dimgrey;
}
</style>
