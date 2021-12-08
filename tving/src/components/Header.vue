<template>
  <header>
      <div class="top col-group">
        <h1 class="logo"><img src="../assets/logo.png" alt=""></h1>
        <div class="search-box">
          <input type="text" placeholder="검색어를 입력해 주세요">
          <button><img src="../assets/icon_search.png" alt=""></button>
        </div>
        <div class="col-group btn-box">
          <router-link to="./login">로그인</router-link>
          <router-link >회원가입</router-link>
          <router-link ><img src="../assets/icon_cart.png" alt=""></router-link>
        </div>
      </div>
      <div class="menu col-group">
        <div class="left col-group">
          <router-link >PROGRAM</router-link>
          <router-link >#EMERGENCY</router-link>
          <router-link >#유미의 세포들</router-link>
          <router-link >#술도녀</router-link>
        </div>
        <div class="right col-group">
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