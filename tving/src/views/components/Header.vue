<template>
  <header>
      <div class="top col-group">
        <h1 class="logo"><img src="../../assets/logo.png" alt=""></h1>
        <div class="search-box">
          <input type="text" placeholder="검색어를 입력해 주세요">
          <button><img src="../../assets/icon_search.png" alt=""></button>
        </div>
        <div class="col-group btn-box">
          <router-link to="./login">로그인</router-link>
          <a href="">회원가입</a>
          <a href=""><img src="../../assets/icon_cart.png" alt=""></a>
        </div>
      </div>
      <div class="menu col-group">
        <div class="left col-group">
          <a href="">PROGRAM</a>
          <a href="">#EMERGENCY</a>
          <a href="">#유미의 세포들</a>
          <a href="">#술도녀</a>
        </div>
        <div class="right col-group">
          <a href=""><img src="../../assets/logo_tving_original.png" alt=""></a>
          <a href="">드라마</a>
          <a href="">예능</a>
          <a href="">애니/캐릭터</a>
          <a href="">아티스트</a>
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