<template>
  <div>
    <div v-if="step==0">
        <Post v-for="(a, i) in vuestaData" :key="i" :liked="liked" :vuestaData="vuestaData[i]" />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step==1">
        <div :class="filterBox" class="upload-image" :style="`background-image:url(${image})`" style="height:400px"></div>
        <div class="filters">
          <FilterBox :eachFilter="eachFilter" :image="image" v-for="eachFilter in filters" :key="eachFilter" >
            {{eachFilter}}
          </FilterBox>
        
        </div>
    </div>
    
  
  
    <!-- 글작성페이지 -->
    <div v-if="step==2">
        <div :class="filterBox" class="upload-image" :style="`background-image:url(${image})`"></div>
        <div class="write">
           <textarea @input="$emit('write', $event.target.value)" class="write-box" placeholder="글을 작성해주세요"></textarea> 
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
      filters : [ "normal","aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      filterBox : '',
      }
    },
    props: {
      vuestaData: Array,
      step : Number,
      image : String,
      liked : Number,
    },
    mounted(){
        this.emitter.on('boxCilck', (a)=>{
        this.filterBox = a
      });
    },
    components: {
      Post: Post,
      FilterBox : FilterBox,
    },
  };
</script>

<style></style>
