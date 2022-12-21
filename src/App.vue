<template>
<CustomLayout>
  <Homepage/>
</CustomLayout>
</template>

<script>
import Homepage from "@/views/Home-page.vue";
import CustomLayout from "@/components/layouts/CustomLayout.vue";

export default {
  components: {
    Homepage,
    CustomLayout
  }
};
</script>

<style lang="scss"></style>
