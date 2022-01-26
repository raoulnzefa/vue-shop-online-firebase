<template>
  <div class="chekout">
       <Navbar></Navbar>
        <div class="container mt-5 pt-5">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="py-4">Página de checkout</h4>
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
                <div class="col-md-4">
                    <p>
                        Preço total : {{ this.$store.getters.precoTotal | currency }}
                    </p>
                    <card class='stripe-card'
                        :class='{ completo }'
                        stripe='pk_test_XKUpwPvvEnNxMsSzoLm8H3i8'
                        :options='stripeOptions'
                        @change='completo = $event.completo'
                        />
                        <button class='pay-with-stripe btn btn-primary mt-4' @click='pagar()' :disabled='!completo'>Pague com cartão de crédito</button>
                    <!--</form>-->
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus';
export default {
    data() {
        return {
            completo: false,
            stripeOptions: {
                // veja https://stripe.com/docs/stripe.js#element-options para detalhes
            }
        }
    },
    components: {
        Card
    },
    methods: {
        pagar() {
            createToken().then(data => console.log(data.token))
        }
    }
}
</script>

<style>
   .StripeElement {
    box-sizing: border-box;
    height: 40px;
    padding: 10px 12px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
    }
.StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
    }
.StripeElement--invalid {
    border-color: #fa755a;
    }
.StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
    }
</style>