<template>
  <div class="wrap">
    <Header/>
    <div>
      <img src="./assets/slide01.jpg" alt="">
    </div>

    <section>
      <h3>인기 급상승</h3>
      <!-- <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper> -->
      <ul class="col-group">
        <li v-for="a in 5" :key="a">
          <div><img src="" alt=""></div>
          <div>
            <h3><span>[{{yumi}}]스페이스 래빗 인형</span></h3>
            <h4>25,000</h4>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h3>오늘의 신상</h3>
      <ul class="col-group">
        <li v-for="a in 5" :key="a">
          <div><img src="" alt=""></div>
          <div>
            <h3><span>[{{yumi}}]스페이스 래빗 인형</span></h3>
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
        <!-- <li>
          <img src="./assets/goods02.png" alt="">
          <h3>{{goods[0]}}</h3>
        </li>
        <li>
          <img src="./assets/goods03.png" alt="">
          <h3>유미의 세포들</h3>
        </li>
        <li>
          <img src="./assets/goods04.png" alt="">
          <h3>환승연애</h3>
        </li>
        <li>
          <img src="./assets/goods05.png" alt="">
          <h3>여고추리반</h3>
        </li>
        <li>
          <img src="./assets/goods06.png" alt="">
          <h3>미드나이트</h3>
        </li>
        <li>
          <img src="./assets/goods07.png" alt="">
          <h3>아이돌 받아쓰기 대회</h3>
        </li> -->
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
    </section>
  <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';

export default {
  name: 'App',
  components: {
    Header : Header,
    Footer : Footer,
    // Swiper,
    // SwiperSlide,
  },
  data(){
    return{
      yumi : '유미의 세포들',
      goods : ['술꾼도시여자들','힙합 메디컬 시트콤 - EMERGENCY','유미의 세포들','환승연애','여고추리반','미드나이트','아이돌 받아쓰기 대회','샤크 :더 비기닝','스프링캠프'],
      goods2 : ['#라켓보이즈 · #슬기로운 산촌생활','#DTCU · #갯마을 차차차','#너는 나의 봄 · #악마판사','#보이스 시즌4 · 간 떨어지는 동거','#슬기로운 의사생활 시즌2 · #어느 날 우리 집 현관으로 멸망이 들어왔다 ']
    }
  },
  // setup() {
  //   const onSwiper = (swiper) => {
  //     console.log(swiper);
  //   };
  //   const onSlideChange = () => {
  //     console.log('slide change');
  //   };
  //   return {
  //     onSwiper,
  //     onSlideChange,
  //   };
  // },
}
</script>

<style>
.col-group {display:flex}
</style>
