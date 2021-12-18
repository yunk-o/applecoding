<template>
  <div class="wrap">
    <div class="container">
      <Header/>
    </div>
    <main>
        <div class="container">
            로그인페이지
        </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer.vue"




export default {
  name: 'Login',
  data(){
    return{

    }
  },
  components: {
    Header : Header,
    Footer : Footer,
  },
  

}
</script>
