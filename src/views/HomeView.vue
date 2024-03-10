<script setup>
import { Header, Home, Footer } from "@/components";
</script>

<template>
  <div>
    <Header class="header" />
    <Home />
    <Footer class="footer" />
  </div>
</template>

<style scoped>
.header,
.footer {
  background-color: transparent;
}
</style>
