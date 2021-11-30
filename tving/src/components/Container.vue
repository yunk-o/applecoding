<template>
    <div>
        <div class="container">
            <div class="main-slide">
                <a href="">
                    <img src="https://mall-image.tving.com/media/image/default/2021/11/a5f2d918f2ef870482d52dd106eb0a18.jpg" alt="">
                </a>
            </div>
        </div>
        <section class="sec sec01">
            <div class="container">
                <h2>
                    <strong>인기 급상승</strong>
                    <span class="title-bg"></span>
                    <a class="more" href="#none">더보기</a>
                </h2>
                <Post :Item = 'Item'/>
            </div>
        </section>
        <!-- //인기 급상승 sec01-->

        <section class="sec sec02">
            <div class="container">
                <h2>
                    <strong>오늘의 신상</strong>
                    <span class="title-bg"></span>
                    <a class="more" href="#none">더보기</a>
                </h2>
                <Post :Item = 'Item'/>
            </div>
        </section>
        <!-- //오늘의 신상 sec02-->

        <section class="sec sec03">
            <div class="container">
                <h2>
                    <strong>BEST 10</strong>
                    <span class="title-bg"></span>
                    <a class="more" href="#none">더보기</a>
                </h2>
                <Post v-for="(a,i) in 2" :key='i' :Item = 'Item'/>
            </div>
        </section>
        <!-- //BEST 10 sec03-->

        <section class="banner">
            <img src="https://mall-image.tving.com/media/image/default/2021/08/decba862124d9951d21f1ab6e634f7a5.jpg" alt="">
        </section>
        <!-- //banner -->

        <section class="sec sec04">
            <div class="container">
                <h2>
                    <strong>오리지널 굿즈</strong>
                    <span class="title-bg"></span>
                    <a class="more" href="#none">더보기</a>
                </h2>
                <div>
                    <ul class="col-group name">
                        <li v-for="(a,i) in Goods01" :key='i' @click="currentTab = i" :class="{active: currentTab === i}">
                            <button @click="step=i" id="click">
                                <img :src="Goods01[i].smallImage" alt="">
                            </button>
                            <h3 >{{Goods01[i].title}}</h3>
                        </li>
                    </ul>
                    <div v-for="(a,i) in Goods01" :key='i'>
                        <div class="col-group both" v-if="step==i" >
                            <div class="left">
                                <img :src="Goods01[i].bigImage" alt="">
                            </div>
                            <!-- //left -->
                            <div class="right">
                                <div class="profile col-group">
                                    <div class="col-group">
                                        <img :src="Goods01[i].smallImage" alt="">
                                        <div class="txt-box">
                                            <h3>{{Goods01[i].title}}</h3>
                                            <p>{{Goods01[i].description}}</p>
                                        </div>
                                    </div>
                                    <a href="">굿즈 더보기</a>
                                </div>
                                <div class="cont-box">
                                    <h4>{{Goods01[i].contents1}}</h4>
                                    <p>{{Goods01[i].contents2}}</p>
                                    <p>
                                        <span>{{Goods01[i].tag[0]}} {{Goods01[i].tag[1]}} {{Goods01[i].tag[2]}} {{Goods01[i].tag[3]}}</span>    
                                    </p>
                                    <Post :Item = 'Item'/>
                                </div>
                            </div>
                            <!-- //right -->
                        </div>
                    </div>   
                </div>
            </div>
        </section>
        <!-- //오리지널 굿즈 sec04-->

        <section class="sec sec05">
            <div class="container">
                <h2>
                    <strong>프로그램 굿즈</strong>
                    <span class="title-bg"></span>
                    <a class="more" href="#none">더보기</a>
                </h2>
                <ul class="col-group name">
                    <li v-for="(a,i) in Goods02" :key='i'>
                        <h3 class="col-group">#{{Goods02[i].leftTitle}}·#{{Goods02[i].rightTitle}}</h3>
                    </li>
                </ul>
                <div>
                    <div v-for="(a,i) in Goods02" :key='i'>
                        <div class="col-group both" v-if="step==i">
                            <div class="left">
                                <!-- <img :src="Goods01[0].bigImage" alt=""> -->
                                <div class="img-box">
                                    <img :src="Goods02[i].leftImage" alt="">   
                                </div>
                                <div class="txt-box">
                                    <h3>{{Goods02[i].leftDescription}}</h3>
                                    <p>{{Goods02[i].leftContents}}</p>
                                </div>
                                <!-- <Post :Item = 'Item'/> -->
                            </div>
                            <!-- //left -->
                            <div class="right">
                                <div class="img-box">
                                    <img src="https://mall-image.tving.com/media/image/default/2021/11/5c07426738c3b71e334667daaf612379.jpg" alt="">
                                </div>
                                <div class="txt-box">
                                    <h3>{{Goods02[i].leftDescription}}</h3>
                                    <p>'저마다 써 내려간 인생 드라마의 주연들, 어쩌면 당신의 이야기.' 자기님의. 자기님에 의한,
                                        자기님을 위한 긍정 에너지 가득 일기장! 2022 자기님들의 이야기를 담아보세요.
                                    </p>
                                </div>
                                <!-- <Post :Item = 'Item'/> -->
                            </div>
                            <!-- //right -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- //프로그램 굿즈 sec05-->
        <section class="sec sec06">
            <div class="container">
                <h2>
                    <strong>클리언런스 세일</strong>
                    <span class="title-bg"></span>
                    <a class="more" href="#none">더보기</a>
                </h2>
                <Post :Item = 'Item'/>
            </div>
        </section>
        <!-- //클리언런스 세일 sec06-->
        <section class="review">
            <div class="col-group">
                <img src="https://mall-image.tving.com/media/image/default/2021/06/a2eaa9e5c13e608ca87ee2d516e2ae4f.png" alt="">
                <img src="https://mall-image.tving.com/media/image/default/2021/06/0ae54ea980215c97b8f54597e16cdc57.png" alt="">
            </div>
            <div class="col-group">
                <p><img src="" alt="">REVIEW</p>
                <a href="">리뷰 쓰러 가기 ></a>
            </div>
        </section>
        <section class="sec sec07">
            <div class="container">
                <h2>
                    <strong>베스트 리뷰</strong>
                    <span class="title-bg"></span>
                    <a class="more" href="#none">더보기</a>
                </h2>
                <Post :Item = 'Item'/>
            </div>
        </section>
        <!-- //베스트 리뷰 sec07-->
        <div>
            <button class="col-group">
                <img src="" alt="">
                <p>티빙몰 인스타그램 바로가기</p>
            </button>
        </div>
    </div>
</template>
<script>
import Post from "./Post.vue"
// import Goods01 from "./Goods01.vue"
export default {
    name: 'Container',
    data(){
        return{
            step: 0,
            currentTab: 0,
        }
    },
    props: {
        Item: Array,
        Goods01 : Array,
        Goods02 : Array,
    },
    components:{
        Post : Post,
    },
    methods: {
           
    
        
    }
}
</script>
<style>
 
</style>