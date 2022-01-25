<template>
  <div class="products">
      <div class="container">
        <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="col-md-6 ml-3">
                    <h3>Configurações de perfil</h3>
                 <p>
                   Altere suas configurações de perfil aqui
                 </p>
              </div>
              <div class="col-md-5">
                  <img src="/img/svg/profile.svg" width="300" alt="" class="img-fluid">
              </div>
            </div>
          </div>


          <div class="profile-content">

          <ul class="nav nav-pills ml-3" id="myTab" role="tablist">

            <li class="nav-item">
              <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Perfil</a>
            </li>

            <li class="nav-item">
              <a class="nav-link"  id="account-tab" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="false">Configurações de Conta</a>
            </li>
           
          </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active pt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                  <div class="container">
                      <div class="row">
                        
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" name="" v-model="perfil.nome" placeholder="Nome completo" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="perfil.telefone" placeholder="Telefone" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group">
                            <input type="text"  v-model="perfil.endereco" placeholder="Endereço" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="text"  v-model="perfil.cep" placeholder="Cep" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit" @click="alterarPerfil" value="Salvar alterações" class="btn btn-primary w-100">
                          </div>
                        </div>

                      </div>
                  </div>
                
                </div>

                <div class="tab-pane fade pt-3" id="account" role="tabpanel" aria-labelledby="account-tab">
                  <div class="container">
                      <div class="row">
                        <div class="col-md-">
                            <div class="alert alert-info">
                              Use o botão Redefinir e-mail de senha para redefinir a senha. O formulário não funciona atualmente
                            </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="conta.nome" placeholder="Nome do usuário" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="conta.email" placeholder="Endereço de e-mail" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="conta.password" placeholder="Nova senha" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" v-model="conta.confirmeSenha"  placeholder="Confirme a senha" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="file" @change="enviarImagem" class="form-control">
                           </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit" value="Salvar alterações" class="btn btn-primary w-100">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="button" @click="redefinirSenha" value="Reset password email" class="btn btn-success w-100">
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

            </div>
            
          </div>

      </div>

    
  </div>
</template>

<script>
//import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';
import Toast from 'sweetalert2'
export default {
    name: 'Perfil',
    components: {
        //VueEditor
    },
    props: {
        msg: String
    },
    data() {
        return {
            perfil: {
                nome: null,
                telefone: null,
                endereco: null,
                cep: null
            },

            conta: {
                nome: null,
                email: null,
                fotoUrl: null,
                emailVerificar: null,
                password: null,
                confirmeSenha: null,
                uid: null
            }
        }
    },

    firestore() {
        const usuario = fb.auth().currentUser
        return {
            perfil: db.collection('perfils').doc(usuario.uid),
        }
    },
    methods: {
        alterarPerfil() {
            this.$firestore.perfil.update(this.perfil)
        },
        enviarImagem() {

        },
        redefinirSenha() {
            const auth = fb.auth()

            auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
                Toast.fire({
                    type: 'success',
                    title: 'E-mail enviado'
                })
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style>

</style>