<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Nossa lista de produtos</h1>
          <div class="row">
              
              <div class="col-md-4" v-for="produto in produtos" :key="produto.id">
                  <div class="card product-item">

                        <carousel :perPage="1">
                          <slide v-for="(imagem, index) in produto.imagens" :key="index">
                                <img :src="imagem" class="card-img-top" alt="..." width="250px">
                          </slide>
                        </carousel>
                
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ produto.nome }}</h5>
                            <h5 class="card-priceS">{{ produto.preco | currency }}</h5>

                          </div>
                           
                            <add-no-carrinho
                                :imagem="buscarImagem(produto.imagens)"
                                :p-id="produto.id"
                                :preco="produto.preco"
                                :nome="produto.nome">
                            </add-no-carrinho>
                        </div>
                    </div>
              </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import {db} from '../firebase'
export default {
    name: 'Produtos-lista',

    data() {
        return {
            produtos: []
        }
    },
    methods: {
        buscarImagem(imagens) {
            imagens[0]
        }
    },
    firestore() {
        return {
            produtos: db.collection('produtos')
        }
    }
}
</script>

<style lang="scss" scoped>
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>