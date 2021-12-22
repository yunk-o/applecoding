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
                     
                        <div class="col-group select-box">
                            <h3 class="title">선택</h3>
                            <select class="cont" v-model="modal" name="" id="my-select" @click="clickSelect(i)" >
                                <option :value="0" >선택하세요</option> 
                                <option :value="1" >선택{{1}}</option> 
                                <option :value="2" >선택{{2}}</option> 
                                <option :value="3" >선택{{3}}</option> 
                                <option :value="4" >선택{{4}}</option> 
                            </select>
                        </div>
                        <ul id="id_ul_list">
                             <li id="box" class="test" v-for="(a,i) in step" :key="i">
        
                                <div id="list" class="gray-box" v-if="modal == i"  >
                                    <div class="col-group g-title">
                                        <h3>2022 신묘한 일력{{i}}</h3>
                                        <button @click="clickBtn(i)">X</button>
                                    </div>
                                    <div class="col-group price-box">
                                        <div class="col-group">
                                            <button class="btn-num" @click="step[i]--">-</button>
                                            <p class="num">{{step[i]}}</p>
                                            <button class="btn-num" @click="step[i]++">+</button>
                                        </div>
                                        <p><span>{{price*step[i]}}</span>원</p>
                                    </div>
                                </div>
                                
                            </li>
                        </ul>
                        <div>
                            <p>전체금액</p>
                        </div>
                        
                        <p id="price" @click="num()"> 19000</p>
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
            step:[0,0,0,0,0],
            price:10900,
            modal:0,
            누른거:0,
        }
    },
    methods: {
        clickBtn(){
            for(let i = 0; i < this.modal; i++){
                document.getElementsByClassName('test')[this.modal].style.display='none';
            }
        },
        num(){
            document.getElementById('price').toFixed(3)
        },
        clickSelect(){
            var mySelect = document.getElementById('my-select')
            var count = 0

            mySelect.addEventListener('click', function() {
                count++
                console.log('You selected: ', count);
               
                    // getElementById('list')

                
            });
            // mySelect.addEventListener('click', ()=> {
            // for(let i = 0; i < this.누른거; i++){
            //     유저가 선택한 갯수만큼 <div>를 만들어주세요~
            // }
            // })
        },
    },
    // watch : {
    //     modal(){
    //         if(this.누른거 == 1){
    //             alert('뭔데')
    //         } else {
    //             alert('개빡치네')
    //             document.getElementById('list').style.display="none"

    //         }
    //     }
        
    // },
    components: {
        Header : Header,
        Footer : Footer,
    },
  

}
</script>
