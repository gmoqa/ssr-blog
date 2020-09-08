<template>
  <div>
    <h1 class="name">
      SSR Blog
      <span style="font-size: 18px; color: #4cb96d">| with Nuxt.js</span>
    </h1>
    <hr />
    <div v-for="post in posts" :key="post.id" class="post">
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
