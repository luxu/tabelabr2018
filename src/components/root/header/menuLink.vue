<template>
  <div class="links">
    <div class="container">
        <ul>
            <router-link :to="{ name:'dashboard.main' }" tag="li" exact>
                <a>Fale Conosco</a>
            </router-link>
            <router-link :to="{ name:'dashboard.main' }" tag="li" exact>
                <a>Quem somos</a>
            </router-link>
            <router-link :to="{ name:'dashboard.main' }" tag="li" exact>
                <a>Meus pedidos</a>
            </router-link>
            <router-link :to="{ name:'dashboard.main' }" tag="li" exact>
                <a>Blog</a>
            </router-link>
'       </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuLink'
}
</script>

<style>
    .links {
        background-color: #DF3626;
        height: 28px;
        text-align: right;
    }
    .links ul {
        padding-top: 6px;
        width: 1140px;
        margin: 0 auto;
    }
    .links li {
        display: inline-block;
        margin-left: 25px;
        margin-right: 0 !important;
    }
    .links a {
        color: #fff;
        text-decoration: none;
        display: inline-block;
        font-weight: bold;
    }
</style>
