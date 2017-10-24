<template>
  <div class="each-idea-container">
    <h3 v-bind:style="h3" class="name">{{idea.name}}</h3>
    <p class="body">{{idea.body}}</p>
    <p class="quality"><span v-bind:style="qualityText">Quality</span>: {{idea.quality}}</p>
    <div v-bind:style="buttonsContainer">
      <button v-on:click="removeItem">X</button>
      <button v-on:click="augmentQuality">+</button>
      <button v-on:click="decrementQuality">-</button>
    </div>
  </div>
</template>

<script>
import styles from '../styles/EachIdeaContainer-styles';

export default {
  props: {
    idea: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      h3: styles.h3,
      qualityText: styles.qualityText,
      buttonsContainer: styles.buttonsContainer,
    };
  },
  methods: {
    augmentQuality: function () {
      this.$emit('augmentQuality', this.idea);
    },
    decrementQuality: function () {
      this.$emit('decrementQuality', this.idea);
    },
    removeItem: function () {
      this.$emit('removeItem', this.idea.id);
    },
  },
};
</script>

<style scoped>
  .each-idea-container {
    border: 1px solid #4694cd;
    margin: 20px auto;
    padding: 10px 0;
    width: 60vw;
  }
</style>

