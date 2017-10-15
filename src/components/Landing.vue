<template>
  <div class="landing">
    <h2>{{ msg }}</h2>
    <div class="idea-input-area">
      <input
        type="text"
        placeholder="Idea Name"
        v-model="name"
      />
      <input
        type="text"
        placeholder="Idea Body"
        v-model="body"
      />
      <p>Quality:</p>
      <select v-model="quality">
        <option>Swill</option>
        <option>Plausible</option>
        <option>Genius</option>
      </select>
      <button v-on:click="submitIdea">Enter Idea</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      msg: 'Enter a new idea',
      ideas: [],
      name: '',
      body: '',
      quality: 'Swill',
    };
  },
  methods: {
    submitIdea: function () {

    },
  },
};
</script>

<style scoped>

</style>
