<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from "@/components/DetailBanner";
import DetailHeader from "@/components/DetailHeader";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style>
.content {
  height: 50rem;
}
</style>