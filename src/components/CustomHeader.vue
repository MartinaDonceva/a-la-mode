<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <p class="text-color mb-0 py-2 display-3 font-fam" href="#">A La Mode</p>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="text-color navbar-brand fs-4 fw-light" href="#">HOME</a></li>
          <li class="nav-item">
            <a class="text-color navbar-brand fs-4 fw-light" href="#">CONTACT</a>
          </li>
          <li>
            <a class="text-color navbar-brand fs-4 fw-light" href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
          </li>
        </ul>
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
.font-fam {
  font-family: "Brush Script MT", cursive;
}
.text-color {
  color: dimgrey;
}
</style>
