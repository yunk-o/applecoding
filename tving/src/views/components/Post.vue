<template>
    <div class="item">
        <a href="">
            <div class="img-box">
                <img :src="Item.userImage" alt="">
            </div>
            <div class="col-group txt-box">
                <div class="best">{{Item.id}}</div>
                <div class="txt">
                    <h3 class="name">{{Item.name}}</h3>
                    <h4 class="price">{{Item.price}}</h4>
                </div>
            </div>
        </a>
    </div>
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