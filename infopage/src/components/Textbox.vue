<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="textbox">
    <h1 class="title">{{ title }}</h1>
    <p class="content">{{ content }}</p>
  </div>
</template>

<style scoped>
.textbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  font-size: 1.5rem;
  text-align: center;
}

</style>
