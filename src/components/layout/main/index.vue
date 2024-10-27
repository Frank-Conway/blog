<script setup>
import { useRoute } from "vue-router"

const route = useRoute()
const wideList = ["/home", "/article"]
</script>

<template>
  <div class="main-container">
    <page-header></page-header>
    <div :class="[wideList.includes(route.path) ? 'max-w-[1280px]' : 'max-w-[880px]', 'mx-auto', 'md:px-[40px]', 'md:pt-[70px]', 'px-[10px]', ' pt-[70px]']">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
