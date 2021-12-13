<template>
    <div @click="fire" :class="eachFilter" class="filter-item" :style="`background-image:url(${image})`"> 
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
        eachFilter : String,
    },
    methods: {
        fire(){
            this.emitter.emit('boxCilck', this.eachFilter)
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
    color : black;
    text-align: center;
    background-size: cover;
    background-position : center;
}
</style>