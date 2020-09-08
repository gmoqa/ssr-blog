<template>
  <div>
    <h1 class="name">SSR Blog</h1>
    <hr />
    <div v-for="post in posts" :key="post.id">
      <nuxt-link
        class="title"
        :to="{ name: 'posts-id', params: { id: post.id } }"
      >
        {{ post.title }}</nuxt-link
      >
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return { posts }
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>

<style>
.name {
  font-size: 35px;
  color: #363636;
  font-weight: 900;
}

.title {
  font-size: 25px;
  color: #363636;
  font-weight: 900;
}
</style>
