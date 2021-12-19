<template>
  <div class="wrap">
    <Header/>
    <main>
        <div class="container">
          <h2>로그인</h2>
          <form action="">
            <label for="">
              <input type="text" placeholder="아이디">
            </label>
            <label for="">
              <input type="text" placeholder="비밀번호">
            </label>
            <button></button>
            <div>
              <a href="">회원가입</a>
              <div>
                <a href="">아이디 찾기</a>
                <a href="">비밀번호 찾기</a>
              </div>
            </div>
          </form>
          <div>
            <div class="col-group">
              <p></p>
              <span>or</span>
              <p></p>
            </div>
            <h4>SNS 계정으로도 이용이 가능합니다.</h4>
            <ul class="col-group">
              <li><a href="">f<img src="" alt=""></a></li>
              <li><a href="">t<img src="" alt=""></a></li>
              <li><a href="">n<img src="" alt=""></a></li>
              <li><a href="">k<img src="" alt=""></a></li>
              <li><a href="">a<img src="" alt=""></a></li>
            </ul>

          </div>
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
