<template>
    <div>
        {{$route.params.id}}
        <h4>상세페이지</h4>
        <h5>{{blogTxt[$route.params.id].title}}</h5>
        <p>{{blogTxt[$route.params.id].content}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Detail",
    props : {
       blogTxt : Array,
    }
}
</script>

<style>

</style>