<template>
    <div>
        <div v-for="(blog,i) in blogTxt" :key="i">
            <h5 @click="$router.push('/detail/0')">{{blogTxt[i].title}}</h5>
            <p>{{blogTxt[i].date}}</p>
        </div>

        <!-- <div>
            <h5 @click="$router.push('/detail/0')">{{blogTxt[i].title}}zz</h5>
            <p>{{blogTxt[i].date}}</p>
        </div>
        <div>
            <h5 @click="$router.push('/detail/1')">{{blogTxt[i].title}}zz</h5>
            <p>{{blogTxt[i].date}}</p>
        </div>
        <div>
            <h5 @click="$router.push('/detail/2')">{{blogTxt[i].title}}zz</h5>
            <p>{{blogTxt[i].date}}</p>
        </div> -->
        
    </div>
    
</template>

<script>
export default {
    name:"list",
    props: {
        blogTxt : Array,
    }
}
</script>

<style>

</style>