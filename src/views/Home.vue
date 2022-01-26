<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <produtos-lista></produtos-lista>
    <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/product.svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Veja nossos trabalhos</h3>
            <p> mais projetos em https://github.com/diegotpereira </p>
               <p>
                - Java 
                - Spring
                - Javascript
                - Vue.js
                - Angular
                - Android
                </p>
             <button class="btn custom-btn btn-outline-primary mr-4" onclick="location.href='https://github.com/diegotpereira';">GITHUB</button>
          </div>
        </div>
      </div>
    <login></login>

    <mini-carrinho></mini-carrinho>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Hero from "@/components/Hero.vue";
//import ProdutoLista from "@/sections/ProdutoLista";
export default {
  name: 'home',
  components: {
    Hero, Login
  }
}
</script>
