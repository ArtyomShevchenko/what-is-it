<template>
  <NavigationVue></NavigationVue>
  <div class="wrapper">
    <RouterView></RouterView>
  </div>
</template>

<script>
import NavigationVue from "@/Components/NavigationVue.vue"

export default {
  components: { NavigationVue },
}
</script>

<style>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 0.5rem;
}
</style>
