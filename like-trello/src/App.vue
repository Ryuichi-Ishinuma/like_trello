<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/board">Board</router-link>
    </nav>
    <router-view />
  </div>
</template>

Vue.use(PerfectScrollbar);

<script>

export default {
  name: 'App',
}
</script>

