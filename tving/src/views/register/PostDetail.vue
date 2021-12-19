<template>
  <div class="wrap">
    <Header/>
    <main>
        <div class="container">
            <div class="detail-top">
                <div></div>
                <div class="img-box">
                    <img src="https://mall-image.tving.com/media/image/goods/2021/11/934a4d67c23a902b4015b1b8d95216bd@270x270.jpg" alt="">
                    <h3>오느리 2022 캘린더</h3>
                    <p>13,000원</p>
                </div>
                <div class="txt-box col-group">
                    <div class="left">
                        <ul>
                            <li class="col-group">
                                <h3 class="title">상품번호</h3>
                                <p class="cont">84315</p>
                            </li>
                            <li class="col-group">
                                <h3 class="title">배송정보</h3>
                                <p class="cont">40,000원 이상 무료 미만 3,000원 ▼</p>
                            </li>
                            <li class="col-group">
                                <h3 class="title">브랜드</h3>
                                <p class="cont">티빙몰</p>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        
                        <div>
                            <div class="col-group select-box">
                                <h3 class="title">선택</h3>
                                <select class="cont" v-model="modal" name="" id="">
                                    <option :value="1" @click="modal = 1">선택{{1}}</option> 
                                    <option :value="2" @click="modal = 2">선택{{2}}</option> 
                                    <option :value="3" @click="modal = 3">선택{{3}}</option> 
                                    <option :value="4" @click="modal = 4">선택{{4}}</option> 
                                </select>
                            </div>
                            <ul v-for="(a,i) in step" :key="i">
                                <li class="gray-box" v-if="modal == i" >
                                    <div class="col-group g-title">
                                        <h3>2022 신묘한 일력{{i}}</h3>
                                        <button @click="modal == 0">X</button>
                                    </div>
                                    <div class="col-group price-box">
                                        <div class="col-group">
                                            <button class="btn-num" @click="step[i]--">-</button>
                                            <p class="num">{{step[i]}}</p>
                                            <button class="btn-num" @click="step[i]++">+</button>
                                        </div>
                                        <p><span>{{price*step[i]}}</span>원</p>
                                    </div>
                                </li>
                                <li class="gray-box" v-if="modal == i" >
                                    <div class="col-group g-title">
                                        <h3>2022 신묘한 일력{{i}}</h3>
                                        <button @click="modal == 0">X</button>
                                    </div>
                                    <div class="col-group price-box">
                                        <div class="col-group">
                                            <button class="btn-num" @click="step[i]--">-</button>
                                            <p class="num">{{step[i]}}</p>
                                            <button class="btn-num" @click="step[i]++">+</button>
                                        </div>
                                        <p><span>{{price*step[i]}}</span>원</p>
                                    </div>
                                </li>
                            </ul>
                            <div>
                                <p>전체금액</p>
                            </div>
                        </div>
                    
                        <div class="col-group detail-btn-group">
                            <button>장바구니</button>
                            <button>바로구매</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- //description -->
            <div class="detail-img">
                <img src="https://mall-image.tving.com/media/file/default/2021/12/c2befcaafba91839f7d0f7a5b6923566.jpg" alt="">
            </div>
            <!-- //detail -->
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
            step:[1,1,1,1,1],
            price:10900,
            modal:0,
        }
    },
    methods: {
       
    },
    components: {
        Header : Header,
        Footer : Footer,
    },
  

}
</script>
