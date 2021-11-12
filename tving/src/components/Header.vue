<template>
  <header>
      <div class="top col-group">
        <h1><img src="../assets/logo.png" alt=""></h1>
        <div>
          <input type="text" placeholder="검색어를 입력해 주세요">
          <img src="../assets/icon_search.png" alt="">
        </div>
        <div>
          <router-link >로그인</router-link>
          <router-link >회원가입</router-link>
          <router-link ><img src="../assets/icon_cart.png" alt=""></router-link>
        </div>
      </div>
      <div class="menu col-group">
        <div class="left">
          <router-link >PROGRAM</router-link>
          <router-link >#EMERGENCY</router-link>
          <router-link >#유미의 세포들</router-link>
          <router-link >#환승연애</router-link>
        </div>
        <div class="right">
          <router-link ><img src="../assets/logo_tving_original.png" alt=""></router-link>
          <router-link >드라마</router-link>
          <router-link >예능</router-link>
          <router-link >애니/캐릭터</router-link>
          <router-link >아티스트</router-link>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>

</style>