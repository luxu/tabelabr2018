<script>

import axios from 'axios'
import { isEmpty } from 'lodash'

export default {

  name: 'Jogos',

  data () {
    return {
      tabelas: [],
      rodada: '',
      golsTimeDaCasa: '',
      golsTimeDeFora: '',
      colunas: ['Horário', 'Time da Casa', 'Time de Fora', 'Partida']
    }
  },
  mounted () {
    this.$loader.show()
    axios.get('../../../static/tabelas.json')
      .then(response => {
        this.tabelas = response.data
        this.rodada = this.tabelas[0].rodada
        console.log(this.tabelas)
        console.log(this.rodada)
        this.$loader.hide()
      })
  },
  computed: {
    isValid () {
      return !isEmpty(this.golsTimeDaCasa)
    }
  },
  methods: {
    fimJogo () {
      this.$loader.show()

      let golsMarcadosTimeDaCasa = this.golsTimeDaCasa
      let golsMarcadosTimeDeFora = this.golsTimeDeFora

      console.log(golsMarcadosTimeDaCasa, golsMarcadosTimeDeFora)
      this.$loader.hide()
    },

  }
}

</script>

<template>
    <div class="container">
      <h1>Tabela de Jogos - {{ rodada }}</h1>
      <input type="text" class="form-control">
        <div>
          <form class="form-inline">
              <div v-for='tabela in this.tabelas' :key='tabela.jogo'>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="golsTimeDaCasa">
                    <label class="control-label">
                        {{tabela.timeDaCasa}}
                        <img :src="tabela.timeDaCasa" style="height: 30px; width: 30px;">
                    </label>
                </div>
                <span>X</span>
                <div class="form-group">
                    <label class="control-label">
                        <img :src="tabela.timeDeFora" style="height: 30px; width: 30px;">
                        {{tabela.timeDeFora}}
                    </label>
                    <input type="text" class="form-control" v-model="golsTimeDeFora">
                </div>
              </div>
              <button type="button" class="btn btn-primary" @click="fimJogo" :disabled="!isValid">Gravar Resultados</button>
          </form>
        </div>
    </div>
</template>

<style>

</style>
