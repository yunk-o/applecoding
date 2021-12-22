<template>
  <div class="wrap">
    <Header/>
    <main class="signUp">
        <div class="container">
            <div class="top">
                <h2>TVING+CJ ONE 통합회원 가입</h2>
                <p>통합 아이디로 CJ ONE 브랜드 혜택도 받고! 포인트도 쌓고!</p>
            </div>
            <div class="gray-box bor-top">
                <div class="col-group both">
                    <div class="left">
                        <h3>회원가입 여부 안내</h3>
                        <p>· 기존 회원가입 정보와 일치하는 정보를 입력하셔야 회원가입 여부를 정확하게 확인하실 수 있습니다. <span>입력하신 정보는 회원가입 여부에만 사용되며 저장되지 않습니다.</span></p>
                        <p>· 올리브영, CJ온스타일, CJ더마켓, COOKIT, CJ문화재단, CATCHON 에서는 전자상거래에 의거하여 만 14세 미만의 어린이/학생의 회원가입을 제한합니다.</p>
                    </div>
                    <div class="right">
                        <form id="app" @submit="checkForm" novalidate="true">
                            <div>
                                <input type="text" name="name" id="name" v-model="name" placeholder="이름을 입력해주세요">
                                <p id="UserName" class="err-msg">이름을 입력하세요</p>
                            </div>
                            <div>
                                <input type="text" name="birth" id="birth" v-model="birth" placeholder="법정생년월일 6자리를 입력해주세요.">
                                <p id="UserBirth" class="err-msg">법정생년월일을 정확히 입력해 주세요.</p>
                            </div>
                            <div>
                                <input type="text" name="phone" id="phone" v-model="phone" placeholder="휴대전화번호 뒤 7~8자리를 입력해주세요. (01X 제외)">
                                <p id="UserPhone" class="err-msg">국번제외한 휴대폰번호를 입력해주세요. (ex.010-123-5678 > 1235678)</p>
                            </div>
                            <button class="btn-signup">가입여부 확인</button>
                        </form>
                    </div>
                </div>
                <div class="partner"><img src="../../assets/images/signup.png" alt=""></div>
            </div>
            <div class="gray-box txt-box">
                <h3>이용안내</h3>
                <ul>
                    <li><p>· 회원이 되시면 <span>하나의 통합된 회원 ID와 비밀번호로 CJ ONE 및 각 브랜드 웹 사이트의 다양한 서비스(포인트 조회, 카드등록, 정보변경 서비스 등)를 이용하실 수 있습니다.</span></p></li>
                    <li><p>· CJ ONE에 가입하더라도<span>약관 동의되지 않은 CJ ONE 제휴 브랜드에는 개인정보가 제공되지 않습니다.   </span></p></li>
                    <li><p>· CJ ONE은 CJ ONE 제휴 브랜드의 통합 멤버십 서비스입니다.</p></li>
                    <li><p>· 하나의 아이디(ID)로 CJ ONE 제휴 브랜드 사이트를 안전하고 편리하게 이용할 수 있습니다.</p></li>
                    <li><p>· 기존의 각 CJ ONE 제휴 브랜드 사이트에 1개 이상 가입되어 있는 회원님은 새로운 CJ ONE 통합 아이디(ID)를 생성하신 후 가입하실 수 있습니다.</p></li>
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
        name: '',
        birth: '',
        phone: '',
    }
  },
  components: {
    Header : Header,
    Footer : Footer,
  },
  watch :{
    birth(a){
        if (isNaN(a) == true){
            alert('숫자만 입력가능합니다.');
            this.birth =' ';
        }

        if(a>=999999){
            alert('6자리이상 입력할수 없습니다.')
        }
    },
    phone(){

    }
  },
  methods:{
    checkForm(e) {
       
        if (this.name == '') {
            console.log('에러입니다');
            document.getElementById('UserName').style.display="block"
            e.preventDefault();
        } else {
            document.getElementById('UserName').style.display="none"
        }
        if (this.birth == '') {
            console.log('에러입니다2');
            
            document.getElementById('UserBirth').style.display="block"
            e.preventDefault();
        } else {
            document.getElementById('UserBirth').style.display="none"
        } 
        if (this.phone == '') {
            console.log('에러입니다3');
            
            document.getElementById('UserPhone').style.display="block"
            e.preventDefault();
        } else {
            console.log('성공')
        }
        // if (!this.email) {
        //     this.errors.push("이메일은 필수입니다.");
        // } else if (!this.validEmail(this.email)) {
        //     this.errors.push("이메일 형식을 확인하세요.");
        // }
        // if (!this.errors.length) return true;
        }
    },

}
</script>
