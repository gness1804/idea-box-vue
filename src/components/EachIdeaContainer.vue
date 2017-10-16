<template>
  <div class="each-idea-container">
    <h3>{{name}}</h3>
    <p>{{body}}</p>
    <p>Quality: {{quality}}</p>
    <button v-on:click="removeItem">X</button>
  </div>
</template>

<script>
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

</style>

