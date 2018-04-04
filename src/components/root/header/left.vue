<script>
export default {
  name: 'menuLeft'
}
</script>

<template>
    <ul class="nav navbar-nav">
        <router-link :to="{ name:'dashboard.main' }" tag="li" exact>
            <a class="btn btn-primary">Ver Tabela</a>
        </router-link>
        <router-link to="/jogo" tag="li" exact>
            <a class="btn btn-primary">Novo Jogo</a>
        </router-link>
        <router-link to="/zona" tag="li" exact>
            <a class="btn btn-primary">Ver Zona</a>
        </router-link>
    </ul>
</template>
