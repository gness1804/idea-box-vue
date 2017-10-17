<template>
  <div class="each-idea-container">
    <h3 v-bind:style="h3">{{name}}</h3>
    <p>{{body}}</p>
    <p><span v-bind:style="qualityText">Quality</span>: {{quality}}</p>
    <button v-on:click="removeItem">X</button>
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
      id: this.idea.id,
      name: this.idea.name,
      body: this.idea.body,
      quality: this.idea.quality,
      h3: styles.h3,
      qualityText: styles.qualityText,
    };
  },
  methods: {
    removeItem: function () {
      this.$emit('removeItem', this.id);
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

