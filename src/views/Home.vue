<template>
  <div class="home">
    <Navbar></Navbar>
    <produtos-lista></produtos-lista>
    <login></login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
//import ProdutoLista from "@/sections/ProdutoLista";
export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
