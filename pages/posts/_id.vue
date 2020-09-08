<template>
  <div class="post">
    <h1 class="name">
      SSR Blog
      <span style="font-size: 18px; color: #4cb96d">| with Nuxt.js</span>
    </h1>
    <hr />
    <h1 class="title">{{ post.title }}</h1>
    <hr />
    <p class="body">{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + context.params.id
    )
    const post = await response.json()
    return { post }
  },
  data() {
    return {
      post: {},
    }
  },
}
</script>
