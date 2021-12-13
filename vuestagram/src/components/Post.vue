<template>
  <div class="post">
    <div class="post-header" style="display:flex;">
      <div class="profile">
        <img class="profile-img" :src="vuestaData.userImage" alt="">
      </div>
      <span class="profile-name">{{vuestaData.name}}</span>
    </div>
    <div @click="$store.commit('liked')" :class="vuestaData.filter" class="post-body" :style='{backgroundImage:`url(${vuestaData.postImage})`}'>
      
    </div>
    <div class="post-content">
      <p><button class="btn-like" @click="$store.commit('liked')">꾹</button>{{$store.state.likes}} Likes  </p>
      <p>{{vuestaData.content}}</p>
      <p class="date">{{vuestaData.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
    props: {
      vuestaData : Array,
      liked : Number,
    },
};
</script>

<style></style>
