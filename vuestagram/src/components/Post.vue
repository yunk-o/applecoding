<template>
  <div class="post">
    <div class="post-header" style="display:flex;">
      <div class="profile">
        <img class="profile-img" :src="vuestaData.userImage" alt="">
      </div>
      <span class="profile-name">{{vuestaData.name}}</span>
    </div>
    <div @click="$store.commit('좋아요')" :class="vuestaData.filter" class="post-body" :style='{backgroundImage:`url(${vuestaData.postImage})`}'>
      
    </div>
    <div class="post-content">
      <p>{{$store.state.likes}} Likes <button @click="$store.commit('좋아요')">버튼</button> </p>
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
      좋아요 : Number,
    },
};
</script>

<style></style>
