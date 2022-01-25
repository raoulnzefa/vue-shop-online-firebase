<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Nossos produtos</h1>
          <div class="row">
              
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Book 2</h5>
                            <p class="card-text">
                                Complete seu dispositivo com o Office 365 e obtenha 1 TB de 
                                armazenamento em nuvem, Excel, Word, PowerPoint e muito mais. 
                                Selecione sua suíte durante o check-out.
                            </p>
                            <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Laptop 2</h5>
                            <p class="card-text">
                               Estilo e velocidade. Vá além do tradicional com o novo Surface 
                               Laptop 2. Apresentando desempenho aprimorado e a experiência 
                               completa do Windows 10 Home.
                            </p>
                            <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    O estúdio criativo final. Deixe suas ideias fluírem 
                                    com cores brilhantes, gráficos incríveis, processadores 
                                    mais rápidos, ferramentas intuitivas e uma tela incrível 
                                    e ajustável de 28”.
                            </p>
                            <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Produtos'
}
</script>

<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>