<template>
  <footer class="ftr container-fluid">
    <div class="text-center">
      <h4 class="textColor fw-bolder">CONTACT US</h4>
      <div class="text-center d-flex gap-2 justify-content-center">
        <a class="textColor navbar-brand fs-4 fw-light" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a class="textColor navbar-brand fs-4 fw-light" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
        <a class="textColor navbar-brand fs-4 fw-light" href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CustomFooter",
};
</script>

<style scoped>
.ftr{
  margin-top: 30%;
  height: 100px;
}
.textColor{
  color: dimgray;
}
</style>
