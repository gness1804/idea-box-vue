<template>
  <div class="landing">
    <h2>{{ msg }}</h2>
    <div class="idea-input-area">
      <input
        type="text"
        placeholder="Idea Name"
        v-model="name"
        v-bind:style="inputText"
      />
      <input
        type="text"
        placeholder="Idea Body"
        v-model="body"
        v-bind:style="inputText"
      />
      <p>Quality:</p>
      <select v-model="quality" v-bind:style="select">
        <option>Swill</option>
        <option>Plausible</option>
        <option>Genius</option>
      </select>
      <button v-on:click="submitIdea" v-bind:style="mainSubmitButton">Enter Idea</button>
    </div>
  </div>
</template>

<script>
import styles from '../styles/Landing-styles';
import Idea from '../models/Idea';

export default {
  name: 'Landing',
  data() {
    return {
      msg: 'Enter a new idea',
      ideas: [],
      name: '',
      body: '',
      quality: 'Swill',
      inputText: styles.inputText,
      select: styles.select,
      mainSubmitButton: styles.mainSubmitButton,
    };
  },
  methods: {
    resetInputFields: function () {
      this.name = '';
      this.body = '';
      this.quality = 'Swill';
    },
    submitIdea: function () {
      const { name, body, quality, ideas } = this;
      if (!name || !body) {
        alert('Error: Both text fields must be complete.');
        return;
      }
      ideas.push(new Idea(
        name,
        body,
        quality,
      ));
      this.resetInputFields();
    },
  },
};
</script>

<style scoped>

</style>
