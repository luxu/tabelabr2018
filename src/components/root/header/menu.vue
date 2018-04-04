<script>

import Left from './left'
import Brand from './brand'

export default {
  name: 'br2018-header',
  components: { Left, Brand },
  data () {
    return { isOpen: false }
  },
  methods: {
    onToggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<template>
    <div>
        <div class="container">
            <Brand @toggle="onToggleMenu" />
            <div class="collapse navbar-collapse" :class="{ in: isOpen }">
                <Left />
            </div>
        </div>
    </div>
</template>

<style>

</style>
