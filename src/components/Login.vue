<template>
  <div class="login">
    <!-- Modal -->
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist" >
              <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Entrar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Cadastrar</a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                <h5 class="text-center">Faça login por favor</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Endereço de Email</label>
                   <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small class="form-text text-muted">
                      Nunca compartilharemos seu e-mail com mais ninguém.
                    </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Senha</label>
                  <input type="password"  v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" >Entrar</button>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                <h5 class="text-center">Criar nova conta</h5>
                <div class="form-group">
                  <label for="name">Seu nome</label>
                  <input type="text" v-model="nome" class="form-control" id="nome" placeholder="Your nice name"/>
                </div>

                <div class="form-group">
                  <label for="email">Endereço email</label>
                  <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                  <label for="password">Senha</label>
                  <input type="password" v-model="password" class="form-control" id="password" placeholder="Password"/>
                </div>

                <div class="form-group">
                  <button class="btn btn-primary" >
                    Cadastrar
                  </button>
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
import { fb, db } from '../firebase'
export default {
    name: 'Login',
    props: {
        msg: String 
    },

    data() {
        return {
            nome: null,
            email: null,
            password: null
        }
    },
    methods: {

        login() {
            fb.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                $('#login').modal('hide');
            })
            .catch(function(error) {
                var erroCodigo = error.code
                var erroMensagem = error.message 

                if (erroCodigo ==  'auth/wrong-password') {
                    alert('A senha é muito fraca.')
                } else {
                    alert(erroMensagem)
                }
                console.log(error);
            })
        },

        register() {
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                $('#login').modal('hide')

                db.collection('perfils').doc(user.user.uid).set({
                    nome: this.nome
                })
                .then(function() {
                    console.log('Documento escrito com sucesso!');
                })
                .catch(function(error) {
                    console.error('Erro ao escrever documento: ', error)
                })
            })
            .catch(function(error) {
                var erroCodigo = error.code
                var erroMensagem = error.message 

                if (erroCodigo ==  'auth/weak-password') {
                    alert('A senha é muito fraca.')
                } else {
                    alert(erroMensagem)
                }
                console.log(error);
            })
        }
    }
};
</script>

<style>
</style>