<template>
  <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Vue Loja para desenvolvedores
                </h1>
                <p>
                  App MarketPlace Vue.js com Uso do Google Firebase
                  LocalStorage, com função de pagamento.
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Explorar</button>
                    <button class="btn custom-btn btn-outline-secondary">Produtos</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/svg/graphic.svg" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: {
        msg: String 
    }
}
</script>

<style>
    .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
    }
</style>