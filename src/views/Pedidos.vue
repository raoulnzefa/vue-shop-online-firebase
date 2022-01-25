<template>
  <div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                    <h3>Página de pedidos</h3>
                    
                 <p>
                   Faça seu Pedido
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="/img/svg/products.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Pedidos',
    components: {
        
    },
    data() {
        return {
        
           
        }
    },
    methods: {
        
        },

        
    }
</script>

<style scoped lang="scss">
    .img-wrapp{
        position: relative;
        }
    .img-wrapp span.delete-img{
            position: absolute;
            top: -14px;
            left: -2px;
        }
    .img-wrapp span.delete-img:hover{
        cursor: pointer;
        }
</style>