<template>
    <div>
        <div class="container">
            <div class="main-slide">
                <Carousel :autoplay="4000" :wrap-around="true">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">
                    
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
                </Carousel>
            </div>
        </div>
        <section class="sec sec01">
            <div class="container">
                <h2>
                    <strong>인기 급상승</strong>
                    <span class="title-bg"></span>
                    <a class="more" href="#none">더보기</a>
                </h2>
                <div class="items col-group">
                    <Post  v-for="(a,i) in 5" :key="i" :Item = 'Item[i]'/>
                </div>
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
                <div class="items col-group">
                    <Post  v-for="(a,i) in 5" :key="i" :Item = 'Item[i]'/>
                </div> 
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
                <div class="items col-group">
                    <Post  v-for="(a,i) in 10" :key="i" :Item = 'Item[i]'/>
                </div>
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
                            <button @click="step=i">
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
                                    <div class="items col-group">
                                        <Post  v-for="(a,i) in 3" :key="i" :Item = 'Item[i]'/>
                                    </div>
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
                    <li v-for="(a,i) in Goods02" :key='i' @click="currentTab = i" :class="{active: currentTab === i}">
                        <button @click="step=i">
                            <h3 class="col-group">&nbsp;#{{Goods02[i].leftTitle}}&nbsp;·&nbsp;#{{Goods02[i].rightTitle}}&nbsp;</h3>
                        </button>
                    </li>
                </ul>
                <div>
                    <div v-for="(a,i) in Goods02" :key='i'>
                        <div class="col-group both" v-if="step==i">
                            <div class="left">
                                <div class="img-box">
                                    <img :src="Goods02[i].leftImage" alt="">   
                                </div>
                                <div class="txt-box">
                                    <h3>{{Goods02[i].leftDescription}}</h3>
                                    <p>{{Goods02[i].leftContents}}</p>
                                </div>
                                <div class="items col-group">
                                    <Post  v-for="(a,i) in 4" :key="i" :Item = 'Item[i]'/>
                                </div>
                            </div>
                            <!-- //left -->
                            <div class="right">
                                <div class="img-box">
                                    <img :src="Goods02[i].rightImage" alt=""> 
                                </div>
                                <div class="txt-box">
                                    <h3>{{Goods02[i].rightDescription}}</h3>
                                    <p>{{Goods02[i].rightContents}}</p>
                                </div>
                                <div class="items col-group">
                                    <Post  v-for="(a,i) in 4" :key="i" :Item = 'Item[i]'/>
                                </div>
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
                <div class="items col-group">
                    <Post  v-for="(a,i) in 5" :key="i" :Item = 'Item[i]'/>
                </div>
            </div>
        </section>
        <!-- //클리언런스 세일 sec06-->
        <section class="review">
            <div class="col-group top">
                <img src="https://mall-image.tving.com/media/image/default/2021/06/a2eaa9e5c13e608ca87ee2d516e2ae4f.png" alt="">
                <img src="https://mall-image.tving.com/media/image/default/2021/06/0ae54ea980215c97b8f54597e16cdc57.png" alt="">
            </div>
            <div class="col-group bottom">
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
                <div class="items col-group">
                    <div class="item" v-for="(a,i) in 4" :key="i">
                        <div class="img-box">
                            <img :src="Item[i].userImage" alt="">
                        </div>
                        <div class="txt-box">
                            <div class="box">
                                <div class="col-group">
                                    <img v-for="a in 5" :key='a'  class="star" src="../../assets/images/star.png" alt="">
                                </div>
                                <h3>상품후기</h3>
                                <p>아이가 좋아하네요. 가격도 착하고 잘 산것 같습니다.아이가 좋아하네요. 가격도 착하고 잘 산것 같습니다.</p>
                                <span>심**</span>
                            </div>

                            <div class="col-group mini-item">
                                <div class="left"><img :src="Item[i].userImage" alt=""></div>
                                <div class="txt">
                                    <h3 class="name">{{Item[i].name}}</h3>
                                    <h4 class="price">{{Item[i].price}}</h4>
                                </div>
                            </div>
                            <!-- //mini-item -->
                        </div>
                        <!-- //txt-box -->
                    </div>
                </div>
                <!-- //items -->
            </div>
        </section>
        <!-- //베스트 리뷰 sec07-->
        <div class="btn-insta">
            <a href="https://www.instagram.com/tvingmall.official/" class="col-group">
                <img src="../../assets/images/insta.png" alt="">
                <p>티빙몰 인스타그램 바로가기</p>
            </a>
        </div>
    </div>
</template>
<script>
import Post from "./Post.vue"
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
// import Goods01 from "./Goods01.vue"
export default defineComponent({
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
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
})
</script>
<style>
 
</style>