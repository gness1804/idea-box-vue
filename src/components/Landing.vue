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
      <div class="all-ideas-container" v-if="ideas.length">
        <each-idea-container
          v-for="idea of ideas"
          v-bind:key="idea.id"
          v-bind:idea="idea"
          v-on:removeItem="removeItem"
        >
        </each-idea-container>
      </div>
      <div v-else>
        <p v-bind:style="noIdeasTextStyles">{{noIdeasText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import EachIdeaContainer from './EachIdeaContainer';
import styles from '../styles/Landing-styles';
import Idea from '../models/Idea';

export default {
  name: 'Landing',
  components: {
    EachIdeaContainer,
  },
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
      noIdeasText: 'No ideas yet. Please enter one now!',
      noIdeasTextStyles: styles.noIdeasTextStyles,
    };
  },
  methods: {
    removeItem: function (id) {
      this.ideas = this.ideas.filter(idea => idea.id !== id);
    },
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
