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
                            <select class="cont"  name="sortBy" id="sortBy" @change="modalHandler" v-model="projectType">
                                <option v-for="(item, index) in productOptions" :value="item.text" :key="index">{{item.text}}</option>
                            </select>
                        </div>
                        <ul id="id_ul_list">
                            <li id="box" class="test" v-for="(section, index) in sections" :key="index" >
                                <div id="list" class="gray-box" >
                                    <div class="col-group g-title">
                                        <h3>{{ sections[index] }}</h3>
                                        <button @click="deleteModalHandler(section)">X</button>
                                    </div>
                                    <div class="col-group price-box">
                                        <div class="col-group">
                                            <button class="btn-num" @click="step[index]--">-</button>
                                            <p class="num">{{step[index]}}</p>
                                            <button class="btn-num" @click="step[index]++">+</button>
                                        </div>
                                        <p><span>{{price*step[index]}}</span>원</p>
                                        <!-- {{price*step[index]}}를 묶어서 하나로 만들어주세요 /  -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <p>전체금액</p>
                        </div>
                        
                        <p id="price">{{price + price2}}원</p>
                         <!-- {{price*step[index]}}를 묶어서 하나로 만들고 박스들마다 금액을 더해주세요 /  -->
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
            price2:10000,
            modal:0,
            // modalHandler : false,
            sections: ['2022 신묘한 일력 01'],      
            projectType: 'sort',
            productOptions: [
                { value: 0, text: '2022 신묘한 일력 01', },
                { value: 1, text: '2022 신묘한 일력 02', },
                { value: 2, text: '2022 신묘한 일력 03', },
                { value: 3, text: '2022 신묘한 일력 04', }
            ],
            totalPrice:0,
            
        }
    },
    methods: {
       
        modalHandler(e) {
            const prd = e.target.value;
            // let prdData = this.sections.map(item => {
            //     return item;
            // })
            // console.log(prdData);
            if(this.sections.includes(prd) == false){
                this.sections.push(prd);
            }else {
                alert('현재 선택된 제품입니다.')
            }
            // console.log(e.target.value);
        },
        deleteModalHandler(product) {
            const prd = product;
            // let prdData = this.sections.map(item => {
            //     return item;
            // })
            const data = this.sections.indexOf(prd)
            this.sections.splice(data, 1);
            
        },
        // num(){
        //     for(let i = 0; i < this.sections; i++){
        //         this.price*this.step[i]
        //     }
        // }
        
        // eachPrice(){
        //     for(let i = 0; i < this.sections; i++){
        //         let money = this.price * i
        //         console.log(money)
        //     }
        // },
    },
    components: {
        Header : Header,
        Footer : Footer,
    },
  

}
</script>
