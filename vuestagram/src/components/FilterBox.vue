<template>
    <div @click="fire" :class="필터" class="filter-item" :style="`background-image:url(${image})`"> 
        <slot></slot>    
    </div> 
</template>

<script>
export default {
    name:'filterbox',
    data(){
        return{

        }
    },
    props : {
        image :String,
        필터 : String,
    },
    methods: {
        fire(){
            this.emitter.emit('박스클릭함', this.필터)
        }   
    }
}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
}
</style>