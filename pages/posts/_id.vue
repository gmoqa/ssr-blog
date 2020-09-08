<template>
  <div class="columns">
    <div class="column is-9">
      <section class="section">
        <h1 class="title">{{ post.title }}</h1>
        <hr />
        <p>{{ post.body }}</p>
      </section>
    </div>
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
