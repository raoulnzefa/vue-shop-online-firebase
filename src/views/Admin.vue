<template>
  <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
                <a id="show-sidebar" @click="fecharMenu" class="btn btn-sm btn-dark" href="#">
                    <i class="fas fa-bars"></i>
                </a>
                <nav id="sidebar" class="sidebar-wrapper">
                    <div class="sidebar-content">
                        <!-- sidebar-brand  -->
                        <div class="sidebar-item sidebar-brand">
                            <a href="#">Vue Loja Online</a>
                            <div id="close-sidebar" @click="fecharMenu">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <!-- sidebar-header  -->
                        <div class="sidebar-item sidebar-header">
                            <div class="user-pic">
                                <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture">
                            </div>
                            <div class="user-info">
                                <span class="user-name">Fulano
                                    <strong>De Tal</strong>
                                </span>
                                <span class="user-role"> {{email}} </span>
                                <span class="user-status">
                                    <i class="fa fa-circle"></i>
                                    <span>Online</span>
                                </span>
                            </div>
                        </div>
                        <!-- sidebar-search  -->
                        <div class="sidebar-item sidebar-search">
                            <div>
                                <div class="input-group">
                                    <input type="text" class="form-control search-menu" placeholder="Pesquisar...">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- sidebar-menu  -->
                        <div class=" sidebar-item sidebar-menu">
                            <ul>
                                <li class="header-menu">
                                    <span>Menu</span>
                                </li>

                                <li>
                                    <router-link to="/admin/visaogeral">
                                        <i class="fa fa-chart-line"></i>
                                        <span>Visão geral</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/admin/produtos">
                                        <i class="fab fa-amazon"></i>
                                        <span>Produtos</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/admin/pedidos">
                                        <i class="fa fa-shopping-cart"></i>
                                        <span>Pedidos</span>
                                    </router-link>
                                </li>

                                <li>
                                    <router-link to="/admin/perfil">
                                        <i class="fa fa-user"></i>
                                        <span>Perfil</span>
                                    </router-link>
                                </li>
                                <li>
                                    <a href="#" @click="sair()">
                                        <i class="fa fa-power-off"></i>
                                        <span>sair</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- sidebar-menu  -->
                    </div>
            
                </nav>
                <!-- sidebar-content  -->
                <main class="page-content">
                    <router-view/>
                </main>
                <!-- page-content" -->
        </div>
        <!-- page-wrapper -->
  </div>
</template>

<script>
import {fb} from '../firebase'
import $ from 'jquery'
//import Hero from "@/components/Hero.vue";
// import Hero from "@/components/Hero.vue"
export default {
    name: 'Admin',
    data() {
        return{
            nome: null,
            email: null,
        }
    },
    components: {
        // Hero
    },
    methods: {
        fecharMenu() {
            // $('.page-wrapper').toggleClass('toggled')
            $(".page-wrapper").toggleClass("toggled")
        },

        sair() {
            fb.auth().signOut()
            .then(() => {
                this.$router.replace('/')
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
      created() {
        let usuario = fb.auth().currentUser
        this.email = usuario.email

    }
}
</script>

<style>

</style>