<template>
  <navbar-comp/>
  <router-view/>
</template>

<style>

</style>
<script>
import NavbarComp from './components/NavbarComp.vue'
export default {
components: {
  NavbarComp
}
}

</script>