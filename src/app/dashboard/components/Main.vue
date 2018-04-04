<script>

import _ from 'lodash'
import axios from 'axios'

export default {

  name: 'Tabela',

  data () {
    return {
      order: {
        keys: ['nome', 'gm', 'gs'],
        sort: ['desc', 'desc', 'asc']
      },
      times: [],
      colunas: ['nome', 'pontos', 'gm', 'gs', 'saldo'],
      filter: ''
    }
  },
  mounted () {
    axios.get('../../../static/times.json')
      .then(response => response.data)
      .then(data => {
        this.times = data
        console.log(data)
      })
  },
  created () {
  },
  methods: {
    sortBy (coluna) {
      this.order.keys = coluna
      this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc'
    }
  },
  computed: {
    timesFiltered() {
      let colecao =  _.orderBy(this.times, this.order.keys, this.order.sort)

      return _.filter(colecao, item => {
          return item.nome.indexOf(this.filter) >=0;
      })
    }
  },
  filters: {
    saldo(time) {
      return time.gm - time.gs
    },
    ucwords(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}

</script>
<template>
    <div class="container">
      <input type="text" class="form-control" v-model="filter">
      <table class="table table-condensed table-striped table-bordered">
        <thead>
          <tr>
            <th v-for="coluna in colunas" :key='coluna.id'>
              <a href="#" @click.prevent="sortBy(coluna)">{{coluna | ucwords}}</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(time,index) in timesFiltered' :key='time.name' :class="{'success': index < 3, 'warning': index > 2 && index < 6, 'danger':index > 15}">
            <td>
                <img :src="time.escudo" style="height: 30px; width: 30px;">
                <strong>{{time.nome}}</strong>
            </td>
            <td>{{ time.points }}</td>
            <td>{{ time.gm }}</td>
            <td>{{ time.gs }}</td>
            <td>{{ time | saldo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<style>

</style>
