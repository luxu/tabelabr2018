<script>

// import { mapGetters } from 'vuex'
import Login from './Forms/Login'

export default {
  name: 'auth',
  components: { Login },
  computed: {
    // ...mapGetters(['isLogged'])
  }
}

</script>

<template>
<div>
  <header class="page-header row">
    <h2>Tabela BR2018 [Auth]</h2>
  </header>
  <Login />
</div>
</template>
