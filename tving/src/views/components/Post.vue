<template>
    <div class="item">
        <router-link to="./detail">
            <div class="img-box">
                <img :src="Item.userImage" alt="">
            </div>
            <div class="col-group txt-box">
                <div class="best">{{Item.id}}</div>
                <div class="txt">
                    <h3 class="name">{{Item.name}}</h3>
                    <h4 id="price" class="price">{{post}}</h4>
                </div>
                <!-- {{post}} -->
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Post',
        props: {
        Item: Array,
    },
    data(){
        return{
            input:'',
            posts : this.Item.price,
            post : '',
        }
    },
    methods : {
      
    },
    mounted() {
        console.log(String(this.posts).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))
        this.post = String(this.posts).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    }
}
</script>
<style>

</style>