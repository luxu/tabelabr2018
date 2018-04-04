<template>
  <ul class="nav navbar-nav navbar-right">
    <router-link to="/auth" tag="li" v-if="!isLogged">
        <div class="account-wrapper">
          <span class="icon"></span>
          <span class="label">Minha Conta</span>
          <a><span class="label">Entrar</span></a>
        </div>
    </router-link>
    <router-link to="/auth" tag="li" class="skip-link skip-cart" v-if="!isLogged">
        <div class="account-cart-wrapper">
          <div class="header-minicart">
            <span class="icon"></span>
            <span class="count">0</span>
            <span class="label">Itens</span>
            <span class="label-price highlight">R$0,00</span>
          </div>
        </div>
    </router-link>
    <li class="dropdown" :class="{ open: isOpenUser }" v-if="isLogged">
      <a href="javascript:;"
         @click="toggleUserMenu"
         class="dropdown-toggle">{{ currentUser.name }} <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </li>

  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'menuRight',
  data () {
    return {
      isOpenUser: false
    }
  },
  computed: {
    ...mapGetters(['isLogged', 'currentUser'])
  },
  methods: {
    toggleUserMenu () {
      this.isOpenUser = !this.isOpenUser
    }
  }
}
</script>

<style>
  .account-wrapper {
      text-align: left;
      background: url('/static/img/accountIcon.jpg') no-repeat 0 0;
      padding-left: 35px;
      height: 32px;
      float: left;
      margin: 25px 0 0 61px;
      width: 82px;
  }
  .account-cart-wrapper {
      padding-left: 0;
      float: left;
      margin: 25px 0 0 51px;
      background: url('/static/img/carticon.jpg') no-repeat 0 0;
      height: 32px;
      width: 90px;
  }
  .skip-cart {
    color: #fff;
    text-decoration: none;
    margin: 0;
    font-size: 12px;
    padding: 0 0 0 38px;
    float: left;
  }
  .skip-cart .count, .skip-link.skip-active .count {
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }
  .header-minicart {
    display: inline-block;
    height: 50px;
    text-align: left;
    position: relative;
  }
</style>
