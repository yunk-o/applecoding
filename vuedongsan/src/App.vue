<template>
  <div>
    <Popup :onerooms="onerooms" :onClick="onClick" popup="popup"/>

    <div class="menu">
      <a>Home</a>
      <a>Products</a>
      <a>About</a>
    </div>

    <Discount/>
    <!-- <div v-for="(a,i) in 3" :key="i">
      <h4>{{products[i]}}</h4>
      <p>{{price1}} 만원</p>
    </div> -->
    <Card />
    <!-- <div v-for="(a,i) in onerooms" :key="i">
      <img class="roomImg" :src="onerooms[i].image" alt="">
      <h4 @click="popup = true" onClick=i >{{onerooms[i].title}}</h4>
      <p>{{onerooms[i].price}}원</p>
      <button @click="singo[0]++">허위매물신고 <span>신고수 : {{singo[0]}}</span></button>
    </div> -->
  </div>
</template>

<script>
import data from "./assets/oneroom.js"
import Discount from "./Discount"
import Popup from "./Popup"
import Card from "./Card"

export default {
  name: 'App',
  data(){
    return{
      onClick :0,
      onerooms : data,
      popup: false,
      singo: [0,0,0],
      price1: 60,
      price2: 70,
      products:['역삼동원룸','천호동원룸','마포구원룸'],
    }
  },
  components: {
    Discount : Discount,
    Popup : Popup,
    Card : Card,
  },
}
</script>

<style>
#app {
  text-align: center;
}
.menu {background: navy; padding:15px; border-radius: 5px;}
.menu a {color:#fff; padding:0 10px}

.roomImg {width:100%; margin-top:40px }
div {box-sizing: border-box;}

.discount {background:#eee; padding:10px; margin:10px; border-radius: 5px;}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

</style>
