<template>
  <section>
    <CustomHeader/>
      <slot/>
    <CustomFooter/>
  </section>
</template>

<script>
import CustomHeader from "@/components/CustomHeader.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
  name: "CustomLayout",
  components: {
    CustomHeader,
    CustomFooter,
  }
}
</script>

<style scoped>

</style>