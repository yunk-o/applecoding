<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{vuestaData.name}}</span>
    </div>
    <div class="post-body" :style="{backgroundImage:`url(${vuestaData.postImage})`}"></div>
    <div class="post-content">
      <p>{{vuestaData.like}}</p>
      <p><strong>글쓴이아이디</strong>{{vuestaData.content}}</p>
      <p class="date">{{vuestaData.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
    props: {
        vuestaData : Array,
    },
};
</script>

<style></style>
