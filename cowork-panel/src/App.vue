<template>
<div id="app">
  <app-header />
  <app-body />
  <app-footer />
</div>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppBody from '@/components/AppBody'

export default {
  name: 'app',
  components: {
    AppFooter,
    AppBody,
    AppHeader,
  },
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Exo+2'); */
@import '~bulma/css/bulma.css';
@import '~font-awesome/css/font-awesome.css';

* {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

html {
  background-color: black;
}

html,
body {
  font-family: "Exo 2", sans-serif;
}

.Cookie--royal .Cookie__button {
  background: #423DDB !important;
}
</style>
