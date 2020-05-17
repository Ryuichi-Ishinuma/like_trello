<template>
  <div id="app">
    <Board />
  </div>
</template>

Vue.use(PerfectScrollbar);

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board,
  }
}
</script>

