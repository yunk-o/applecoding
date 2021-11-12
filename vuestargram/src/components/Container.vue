<template>
    <div>
        <Post v-for="(a,i) in vuestaData" :key="i" :vuestaData="vuestaData[i]"/>
        <!-- <Post :vuestaData="vuestaData[0]"/>
        <Post :vuestaData="vuestaData[1]"/>
        <Post :vuestaData="vuestaData[2]"/> -->
    </div>
</template>

<script>
import Post from "./Post.vue"

export default {
    name:"Container",
    props: {
        vuestaData : Array,
    },
    components:{
        Post:Post
    }
}
</script>

<style>

</style>