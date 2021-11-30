<template>
    <ul class="items col-group">
        <li  v-for="(a,i) in 5" :key="i" :Item = 'Item'>
            <a href="">
                <div class="img-box">
                    <img :src="Item[i].userImage" alt="">
                </div>
                <div>
                    <h3 class="name">{{Item[i].name}}</h3>
                    <h4 class="price">{{Item[i].price}}</h4>
                </div>
            </a>
        </li>
    </ul> 
</template>
<script>
export default {
    name: 'Post',
    props: {
        Item: Array,
    }
}
</script>
<style>

</style>