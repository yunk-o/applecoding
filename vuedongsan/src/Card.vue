<template>
  <div>
    <div v-for="(a,i) in onerooms" :key="i">
      <img class="roomImg" :src="onerooms[i].image" alt="">
        <h4> {{a.title}} </h4>
        <p>{{a.price}} 원</p>
    </div>
  </div>
</template>

<script>
export default {
    name:"Card",
     props:{
        onerooms :Array,
        onClick : Number,
        popup :Boolean,
    }
}
</script>

<style>

</style>