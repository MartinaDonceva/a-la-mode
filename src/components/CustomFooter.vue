<template>
  <footer class="container-fluid mt-5 py-5">
    <div class="text-center">
      <h4 class="textColor fw-bolder">КОНТАКТИРАЈТЕ НЕ</h4>
      <div class="text-center d-flex gap-2 justify-content-center">
        <a v-for="icon in icons" class="textColor navbar-brand fs-4 fw-light" href="#"
        ><i :class=icon aria-hidden="true"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CustomFooter",
  data() {
    return {
      icons: [
        "fa fa-instagram",
        "fa fa-facebook-official",
        "fa fa-twitter-square"
      ]
    }
  }
}
</script>

<style scoped>
.textColor {
  color: dimgray;
}
</style>
