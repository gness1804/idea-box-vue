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
      quality: 'swill',
    };
  },
};
</script>

<style scoped>

</style>
