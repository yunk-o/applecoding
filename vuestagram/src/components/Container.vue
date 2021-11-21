<template>
  <div>
    <div v-if="step==0">
        <Post v-for="(a, i) in vuestaData" :key="i" :vuestaData="vuestaData[i]" />
        <!-- <Post :vuestaData="vuestaData[0]"/>
            <Post :vuestaData="vuestaData[1]"/>
            <Post :vuestaData="vuestaData[2]"/> -->
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step==1">
        <div :style="`background-image:url(${image})`"></div>
        <div v-if="step==1" class="filters">
          <FilterBox></FilterBox>
        <!-- <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div> -->
        </div>
    </div>
  

    <!-- 글작성페이지 -->
    <div v-if="step==2">
        <div class="upload-image" :style="`background-image:url(${image})`"></div>
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
  props: {
    vuestaData: Array,
    step : Number,
    image : String,
  },
  components: {
    Post: Post,
    FilterBox : FilterBox,
  },
};
</script>

<style></style>
