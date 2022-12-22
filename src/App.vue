<template>
  <custom-header/>
  <router-view/>
  <custom-footer/>
</template>

<script>

import CustomHeader from "@/components/CustomHeader";
import CustomFooter from "@/components/CustomFooter";
export default {
  components: {CustomFooter, CustomHeader}
};
</script>

<style lang="scss"></style>
