<template>
  <div class="black-bg" v-if="popup == false">
      <div class="white-bg">
        <img class="roomImg" :src="onerooms[onClick].image" alt="">
        <h4>{{onerooms[onClick].title}}</h4>
        <p>{{onerooms[onClick].content}}</p>
        <p>{{onerooms[onClick].price}}원</p>
        <Discount/>
        <!-- <button @click="popup = false">닫기버튼</button> -->
      </div>
    </div>
</template>

<script>
export default {
    name:"Popup",
    props:{
        onerooms :Array,
        onClick : Number,
        popup :Boolean,
    }
}
</script>

<style>

</style>