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


    <Container :프로필='프로필' :좋아요='좋아요' :vuestaData="vuestaData" :step="step" :image="image" @write="작성한글 = $event"/>
    <button v-if="step == 1" @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>



  </div>

  
</template>

<script>
import Container from "./components/Container.vue"
import vuestaData from "./assets/data.js"
//서버 가지고 오는거 *설치해야됨 npm add axios
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
      작성한글: '',
      선택한필터 : '',
      좋아요 : [0,0,0],
      프로필 : '',

    }
  },
  mounted(){
      this.emitter.on('박스클릭함', (a)=>{
      this.선택한필터 = a
    })
  },
  components: {
    Container: Container
  },
  methods : {
    now(){
      return new Date()
    },
    
    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: `https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png`,
        postImage: this.image,
        likes: this.좋아요++,
        date: "May 15",
        liked: true,
        content: this.작성한글,
        filter: this.선택한필터
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
