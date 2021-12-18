<template>
  <div class="wrap">
    <div class="container">
      <Header/>
    </div>
    <Container :Item = 'Item' :Goods01= 'Goods01' :Goods02= 'Goods02'>
    </Container>
    <Footer/>
    <router-view>dffdsf</router-view>
    <!-- <router-link to="../login" >홈페이지</router-link> -->
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"
import Item from "./assets/data.js"
import Goods01 from "./assets/goods01.js"
import Goods02 from "./assets/goods02.js"



export default {
  name: 'App',
  data(){
    return{
      Item :Item,
      Goods01 : Goods01,
      Goods02 : Goods02,
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
