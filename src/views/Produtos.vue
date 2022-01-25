<template>
  <div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                    <h3>Página de produtos</h3>
                    
                 <p>
                   Escolha sua marca preferida.
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="/img/svg/products.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>

          <hr>

          <div class="product-test">


            <h3 class="d-inline-block">Lista de produtos</h3>
            <button @click="adicionarNovo" class="btn btn-primary float-right">Adicionar Produto</button>

            <div class="table-responsive">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Preço</th>
                      <th>Modificar</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="produto in produtos" :key="produto.id">
                        <td>
                          {{produto.nome}}
                        </td>

                        <td>
                          {{produto.preco}}
                        </td>

                        <td>

                          <button class="btn btn-primary" @click="editarProduto(produto)">Editar</button>
                          <button class="btn btn-danger" @click="deletarProduto(produto)">Deletar</button>
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

          </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Editar Produto</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Produto Nome" v-model="produto.nome" class="form-control">
                    </div>

                    <div class="form-group">
                      <vue-editor v-model="produto.descricao"></vue-editor>
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Detalhes do Produto</h4>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Preço do Produto" v-model="produto.preco" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" @keyup.188="addTag" placeholder="Etiquetas de produtos" v-model="tag" class="form-control">
                      <div  class="d-flex">
                        <p v-for="tag in produto.tags" :key="tag.id">
                            <span class="p-1">{{tag}}</span>
                        </p>
                      </div>
                    </div>


                    <div class="form-group">
                      <label for="product_image">Imagens do Produto</label>
                      <input type="file" @change="enviarImagem" class="form-control">
                    </div>

                    <div class="form-group d-flex">
                      <div class="p-1" v-for="(imagem, index) in produto.imagens" :key="imagem.id">
                          <div class="img-wrapp">
                              <img :src="imagem" alt="" width="80px">
                              <span class="delete-img" @click="deleteImagem(imagem,index)">X</span>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
              <button @click="adicionarProduto()" type="button" class="btn btn-primary" v-if="modal == 'novo'">Salvar Alterações</button>
              <button @click="atualizarProduto()" type="button" class="btn btn-primary" v-if="modal == 'editar'">Aplicar Mudanças</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor"
import { fb, db} from '../firebase'
import $ from 'jquery'
import Toast from 'sweetalert2'
import Swal from 'sweetalert2'

//import { snapshot } from "firebase/firestore"
export default {
    name: 'Produtos',
    components: {
        VueEditor
    },
    data() {
        return {
            produtos: [],
            produto: {
                nome: null,
                descricao: null,
                preco: null,
                tags: [],
                imagens: []
            },
            activeItem: null,
            modal: null,
            tag: null
        }
    },

    firestore() {
        return {
            produtos: db.collection('produtos')
        }
    },
    methods: {
        adicionarNovo() {
            this.modal = 'novo'
            this.redefinir()
            $('#product').modal('show')
        },
        enviarImagem(e) {
            if (e.target.files[0]) {
                let arquivo = e.target.files[0]
                var storageRef = fb.storage().ref('produtos/' + Math.random() + '_' + arquivo.nome)
                let enviarTarefa = storageRef.put(arquivo)

                enviarTarefa.on('state_changed', () => {

                }, (error) => {
                    console.log(error);
                    
                }, () => {
                    enviarTarefa.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        this.produto.imagens.push(downloadURL)
                    })
                })
            }
        },
        editarProduto(produto) {
            this.modal = 'editar'
            this.produto = produto
            $('#product').modal('show')
        },

        atualizarProduto() {
            this.$firestore.produtos.doc(this.produto.id).update(this.produto)
            Toast.fire({
                type: 'success',
                title: 'Atualizado com sucesso'
            })
            $('product').modal('hide')
        },

        deletarProduto(doc) {
            Swal.fire({
                title: 'Tem certeza?',
                text: 'Você não será capaz de reverter isso!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, exclua!'
            }).then((result) => {
                if (result.value) {
                    this.$firestore.produtos.doc(doc.id).delete()

                    Toast.fire({
                        type: 'success',
                        title: 'Apagado com sucesso'
                    })
                }
            })
        },

        redefinir() {
            this.produto = {
                nome: null,
                descricao: null,
                preco: null,
                tags: [],
                imagens: []
            }
        },

        adicionarProduto() {
            this.$firestore.produtos.add(this.produto)

            Toast.fire({
                type: 'success',
                title: 'Produto criado com sucesso'
            })
            $('#produto').modal('hide')
        },

        addTag(){
            this.produto.tags.push(this.tag)
            this.tag = ''
        },
        deleteImagem(img, index) {
            let imagem = fb.storage().refFromURL(img)

            this.produto.imagens.splice(index, 1)

            imagem.delete().then(function() {
                console.log('Imagem deletada');
            }).catch(function(error) {
                console.log('um erro ocorreu');
                console.log(error);
            })
        }
    }
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