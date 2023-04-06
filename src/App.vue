<template>
  <RouterView />
  <Footer />
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

console.log(Header);

export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
  @import "~/scss/main";
</style>