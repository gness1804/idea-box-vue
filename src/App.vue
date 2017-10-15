<template>
  <div id="app">
    <h1 v-bind:style="h1">Idea Box</h1>
    <landing/>
  </div>
</template>

<script>
import Landing from './components/Landing';
import styles from './styles/App-styles';

export default {
  name: 'app',
  components: {
    Landing,
  },
  data() {
    return {
      h1: styles.h1,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color:#4694cd;
}
</style>
