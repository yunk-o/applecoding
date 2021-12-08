<template>
  <div>
    <div v-if="step==0">
        <Post v-for="(a, i) in vuestaData" :key="i" :좋아요="좋아요" :vuestaData="vuestaData[i]" />
        <!-- <Post :vuestaData="vuestaData[0]"/>
            <Post :vuestaData="vuestaData[1]"/>
            <Post :vuestaData="vuestaData[2]"/> -->
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step==1">
        <div :class="선택한필터" class="upload-image" :style="`background-image:url(${image})`" style="height:400px"></div>
        <div class="filters">
          <FilterBox :필터="필터" :image="image" v-for="필터 in 필터들" :key="필터" >
            {{필터}}
          </FilterBox>
        
        </div>
    </div>
    
  
  
    <!-- 글작성페이지 -->
    <div v-if="step==2">
        <div :class="선택한필터" class="upload-image" :style="`background-image:url(${image})`"></div>
        <div class="write">
           <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea> 
        </div>
    </div>

  
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container",
  data(){
    return  {
      필터들 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      선택한필터 : '',
      }
    },
    props: {
      vuestaData: Array,
      step : Number,
      image : String,
      좋아요 : Number,
    },
    mounted(){
        this.emitter.on('박스클릭함', (a)=>{
        this.선택한필터 = a
      });
    },
    components: {
      Post: Post,
      FilterBox : FilterBox,
    },
  };
</script>

<style></style>
