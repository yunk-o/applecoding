<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li @click="step--">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :vuestaData="vuestaData" :step="step" :image="image"/>
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    <!-- <div v-if="step==0">내용1</div>
    <div v-if="step==1">내용2</div>
    <div v-if="step==2">내용3</div>
    <button @click="step=0">버튼1</button>
    <button @click="step=1">버튼2</button>
    <button @click="step=2">버튼3</button> -->

  </div>

  
</template>

<script>
import Container from "./components/Container.vue"
import vuestaData from "./assets/data.js"
import axios from "axios"
axios.post()

export default {
  name: 'App',
  data(){
    return{
      vuestaData : vuestaData,
      더보기 : 0,
      step : 0,
      image : '',
    }
  },
  components: {
    Container: Container
  },
  methods : {
    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: "https://placeimg.com/640/480/arch",
        likes: 36,
        date: "May 15",
        liked: false,
        content: "내가입력한글 😫",
        filter: "perpetua"
      };
      this.vuestaData.unshift(내게시물);
      this.step = 0
    },
    more(){
       axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then( 결과 =>{
        console.log(결과.data);
        this.vuestaData.push(결과.data);
        this.더보기++;
      })
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일[0]);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.image = url;
      this.step++
    }
  },
}
</script>

<style>
  @import "./assets/style.css";
</style>
