<template>
  <div class="add-to-cart">
    <button class="btn btn-primary" @click="addNoCarrinho()">Adicionar no Carrinho</button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'add-no-carrinho',
    props: {
        nome: String,
        preco: String,
        imagem: String,
        pId: String
    },
    data() {
        return {
            item: {
                produtoNome: this.nome,
                produtoImagem: this.imagem,
                produtoPreco: this.preco,
                produtoId: this.pId,
                produtoQuantidade: 1,
            }
        }
    },
    methods: {
        addNoCarrinho() {
            $('#miniCart').modal('show')
            this.$store.commit('addNoCarrinho', this.item)
            console.log("Botão adicionar carrinho");
        }
    }
}
</script>

<style>

</style>