<template>
  <div class="each-idea-container">
    <h3>{{idea.name}}</h3>
    <p>{{idea.body}}</p>
    <p>Quality: {{idea.quality}}</p>
  </div>
</template>

<script>
export default {
  props: {
    idea: Object,
    required: true,
  },
};
</script>

<style scoped>

</style>

