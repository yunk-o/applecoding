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


    <Container :profile='profile' :liked='liked' :vuestaData="vuestaData" :step="step" :image="image" @write="write = $event"/>
    <div class="more">
      <button v-if="step == 0" @click="more">더보기</button>
    </div>

    <div class="footer" v-if="step == 0">
      <ul class="footer-button-plus">
        <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">글 작성하기</label>
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
      moreBtn : 0,
      step : 0,
      image : '',
      write: '',
      filterBox : '',
      liked : 0,
      profile : '',

    }
  },
  mounted(){
      this.emitter.on('boxCilck', (a)=>{
      this.filterBox = a
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
      var post = {
        name: "Kim Hyun",
        userImage: `https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png`,
        postImage: this.image,
        likes: this.liked++,
        date: "May 15",
        liked: true,
        content: this.write,
        filter: this.filterBox
      };
      this.vuestaData.unshift(post);
      this.step = 0
    },
    more(){
       axios.get(`https://codingapple1.github.io/vue/more${this.moreBtn}.json`)
      .then( result =>{
        console.log(result.data);
        this.vuestaData.push(result.data);
        this.moreBtn++;
      })
    },
    upload(e){
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
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
