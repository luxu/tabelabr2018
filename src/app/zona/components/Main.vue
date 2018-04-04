<script>

import store from '../../../store'

export default {
  computed: {
    timesLibertadores () {
      return store.getters.timesLibertadores
      // return this.$store.getters.times;
    },
    timesRebaixados () {
      return store.getters.timesRebaixados
      // return this.$store.state.times;
    }
  }
}

</script>

<template>
    <div class="container">
      <h1>ZONA</h1>
        <div>
          <h3>Times que irão para a Libertadores</h3>
          <table class="table table-striped">
              <thead>
                <tr>
                    <th>Nome</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="time in timesLibertadores" :key="time.id">
                      <td>
                          <img :src="time.escudo" style="height: 30px; width: 30px;">
                          <strong>{{time.nome}}</strong>
                      </td>
                  </tr>
              </tbody>
          </table>
          <h3>Times serão Rebaixados</h3>
          <table class="table table-striped">
              <thead>
              <tr>
                  <th>Nome</th>
              </tr>
              </thead>
              <tbody>
                  <tr v-for="time in timesRebaixados" :key="time.id">
                      <td>
                          <img :src="time.escudo" style="height: 30px; width: 30px;">
                          <strong>{{time.nome}}</strong>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>
</template>

<style>

</style>
