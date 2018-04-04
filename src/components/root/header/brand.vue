<script>
export default {
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<template>
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggle" >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div class="container" >
            <h1>Campenato Brasileiro de 2018</h1>
        </div>

    </div>
</template>

<style>
.header div.logo img {
  width: 200px;
}
img {
  border: 0;
  vertical-align: top;
}
.header .quick-access {
  margin: 0 0 0 274px;
  float: left;
  padding: 19px 0px 0 0;
}
</style>
