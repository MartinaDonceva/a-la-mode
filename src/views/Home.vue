<template>
  <div class="container">
    <hr />
    <div class="display-3 text-center text-color">ПРОДАВНИЦА</div>
    <hr />
    <custom-cards />
  </div>
</template>

<script>
import CustomCards from "@/components/CustomCards";
export default {
  name: "Home",
  components: { CustomCards },
};
</script>

<style scoped>
.text-color {
  color: dimgrey;
}
</style>
