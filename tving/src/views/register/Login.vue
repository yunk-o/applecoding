<template>
  <div class="wrap">
    <Header/>
    <main class="login">
        <div class="container">
          <div class="top">
            <h2>로그인</h2>
          </div>
          <div class="box">
            <form action="">
              <label for="">
                <input type="text" placeholder="아이디">
              </label>
              <label for="">
                <input type="text" placeholder="비밀번호">
              </label>
              <button>로그인</button>
            </form>
            <div class="col-group btn-group">
              <router-link to="/signup">회원가입</router-link> 
              <div>
                <a href="">아이디 찾기</a>
                <a href="">비밀번호 찾기</a>
              </div>
            </div>
          </div>
          
          <div>
            <div class="col-group line-group">
              <p class="line line1"></p>
              <span>or</span>
              <p class="line line2"></p>
            </div>
            <h4>SNS 계정으로도 이용이 가능합니다.</h4>
            <ul class="col-group icon-group">
              <!-- <li><a href=""><img src="../../assets/images/kakao.png" alt=""></a></li> -->
              <li><a ><img src="../../assets/images/google.png" alt=""></a></li>
              <li><a id="custom-login-btn" @click="kakaoLogin()"><img src="../../assets/images/kakao.png" alt=""></a></li>
              <li><a id="naverIdLogin"><img src="../../assets/images/naver.png" alt=""></a></li>
            </ul>
            <button type="button" @click="kakaoLogout()">카카오 로그아웃</button>
            <button type="button" @click="logout">네이버로그아웃</button>
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
      code: "",
      naverLogin: null,
    }
  },
  components: {
    Header : Header,
    Footer : Footer,
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "zGX_ckPO6NlrSbRGbQzg", //개발자센터에 등록한 ClientID
      callbackUrl: "http://localhost:8080/login", //개발자센터에 등록한 callback Url
      isPopup: false, //팝업을 통한 연동처리 여부
      //loginButton: { color: "green", type: 3, height: 60 }, //로그인 버튼의 타입을 지정
    });
    //설정정보를 초기화하고 연동을 준비
    this.naverLogin.init();
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);
        //필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크
        var email = this.naverLogin.user.getEmail();
        if (email == undefined || email == null) {
          alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
          //사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함
          this.naverLogin.reprompt();
          return;
        }
      } else {
        console.log("callback 처리에 실패하였습니다.");
      }
    });
    // Kakao.init('e99661b7a5b312cada0d629f4279b9ea');
    // Kakao.isInitialized();
    // this.kakaoLogout();
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname; //카카오 닉네임
          const email = kakao_account.email; //카카오 이메일
          console.log("nickname", nickname);
          console.log("email", email);
          //로그인 처리 구현
          console.log(kakao_account);
          // this.$store.commit("user", kakao_account);
          alert("로그인 성공!");
        },
        fail: (error) => {
          // this.$router.push("/errorPage");
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log("Not logged in.");
        return;
      }
      window.Kakao.Auth.logout((response) => {
        //로그아웃
        console.log("access token:", window.Kakao.Auth.getAccessToken());
        console.log("log out:", response);
      });
    },
  },

}
</script>
