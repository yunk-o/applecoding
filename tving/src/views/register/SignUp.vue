<template>
  <div class="wrap">
    <Header/>
    <main>
        <div class="container">
            <h2>TVING+CJ ONE 통합회원 가입</h2>
            <p>통합 아이디로 CJ ONE 브랜드 혜택도 받고! 포인트도 쌓고!</p>
            <div class="gray-box">
                <div class="col-group">
                    <div class="left">
                        <h3>회원가입 여부 안내</h3>
                        <p>기존 회원가입 정보와 일치하는 정보를 입력하셔야 회원가입 여부를 정확하게 확인하실 수 있습니다. <span>입력하신 정보는 회원가입 여부에만 사용되며 저장되지 않습니다.</span></p>
                        <p>올리브영, CJ온스타일, CJ더마켓, COOKIT, CJ문화재단, CATCHON 에서는 전자상거래에 의거하여 만 14세 미만의 어린이/학생의 회원가입을 제한합니다.</p>
                    </div>
                    <div class="right">
                        <form action="">
                            <div>
                                <input type="text" placeholder="이름을 입력해주세요">
                                <p>이름을 입력하세요</p>
                            </div>
                            <div>
                                <input type="text" placeholder="이름을 입력해주세요">
                                <p>법정생년월일을 정확히 입력해 주세요.</p>
                            </div>
                            <div>
                                <input type="text" placeholder="이름을 입력해주세요">
                                <p>국번제외한 휴대폰번호를 입력해주세요. (ex.010-123-5678 > 1235678)</p>
                            </div>
                            <button>가입여부 확인</button>
                        </form>
                
                        
                    </div>
                </div>
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
