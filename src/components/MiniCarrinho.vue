<template>
  <div class="mini-cart">
   
        <!-- Modal -->
        <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Meu Carrinho</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <ul>
                    <li v-for="item in this.$store.state.carrinho" :key="item.id" class="media">
                      <img :src="item.produtoImagem" width="80px" class="align-self-center mr-3" alt="">
                      <div class="media-body">
                        <h5 class="mt-0">{{item.produtoNome}}

                          <span class='float-right' @click="$store.commit('removerDoCarrinho',item)">X</span>
                        </h5>
                        <p class="mt-0">{{item.produtoPreco | currency}}</p>
                        <p class="mt-0">Quantidade : {{item.produtoQuantidade }}</p>
                      </div>
                    </li>

                  </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue comprando</button>
                <button type="button" class="btn btn-primary" @click="conferir">Finalizar</button>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'MiniCarrinho',
    props: {
        msg: String
    },
    methods: {
        conferir() {
            $('#miniCart').modal('hide')
            this.$router.push('/concluir')
        }
    }
}
</script>

<style>

</style>