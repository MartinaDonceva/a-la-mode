<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
      <router-link :to="{name:'home'}" class="text-color mb-0 py-2 display-3 font-fam">A La Mode</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name:'home'}" class="text-color navbar-brand fs-4 fw-light">ПОЧЕТНА</router-link></li>
          <li class="nav-item">
            <router-link :to="{name:'contact'}" class="text-color navbar-brand fs-4 fw-light" >КОНТАКТ</router-link>
          </li>
          <li>
              <router-link :to="{name:'cart'}" class="text-color navbar-brand fs-4 fw-light" href="#"><i
                  class="fa fa-shopping-cart" aria-hidden="true"></i></router-link>
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
  text-decoration: none;
}
.text-color {
  color: dimgrey;
}
</style>
