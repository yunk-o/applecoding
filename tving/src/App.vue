<template>
  <div class="wrap">
    <div class="container">
      <Header/>
    </div>
    
   
    <Container :Item = 'Item' :Goods01= 'Goods01'/>
    <!-- <section>
      <h3>오늘의 신상</h3>
      <ul class="col-group">
        <li v-for="a in 5" :key="a">
          <div><img src="" alt=""></div>
          <div>
            <h3><span>{{Item[0]}}</span></h3>
            <h4>25,000</h4>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h3>BEST 10</h3>
      <ul class="col-group">
        <li v-for="(a,i) in 5" :key="i">
          <div><img src="" alt=""></div>
          <div>
            <h1>{{i}}</h1>
            <h3><span>[{{yumi}}]스페이스 래빗 인형</span></h3>
            <h4>25,000</h4>
          </div>
        </li>
      </ul>
    </section>
    <div>
      <img src="./assets/banner01.jpg" alt="">
    </div>
    <section>
      <h3>오리지널 굿즈</h3>
      <ul class="col-group">
        <li v-for="(a,i) in 5" :key="i">
          <img src="./assets/goods01.png" alt="">
          <h3>{{goods[i]}}</h3>
        </li>
      </ul>
    </section>
    <section>
      <h3>프로그램 굿즈</h3>
      <div>
        <ul class="col-group">
          <li li v-for="(a,i) in 7" :key="i">
            <h3>{{goods2[i]}}</h3>
          </li>
        </ul>
      </div>
      
      <div class="left">
        <img src="" alt="">
        <h3>라켓들고</h3>
        <h4>어서와 , 배드민턴은 처음이지?</h4>
      </div>
    </section> -->
    <Footer/>
    
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"
import Item from "./assets/data.js"
import Goods01 from "./assets/goods01.js"



export default {
  name: 'App',
  data(){
    return{
      Item :Item,
      Goods01 : Goods01,
    }
  },
  components: {
    Header : Header,
    Footer : Footer,
    Container : Container,
  },
}
</script>

<style>
  @import './assets/css/common.css';
  @import './assets/css/style.css';
</style>
