<template>
    <div class="head_box">
        <div class="head_back">
          <span class="iconfont back">&#xe624;</span>
        </div>
      <router-link class="head_search" to="/search">
      <div class="">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      </router-link>
      <div class="head_down">
        北京<span class="iconfont">&#xe62b;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus">
  .head_box
    height:.88rem;
    line-height:.88rem;
    display:flex;
    background-color:#00bcd4
    .head_back
      width:.64rem;
      text-align:center;
      .back
        color:#fff;
        font-size:.36rem;
    .head_search
      flex:1;
      height:.64rem;
      line-height:.64rem;
      text-align:center;
      background-color:#fff;
      color:#e4e7ea
      border-radius:.08rem;
      margin-left: .2rem
      margin-top: .12rem
      padding:0 .2rem
    .head_down
      width:1.28rem;
      color: #ffffff;
      text-align:center;





</style>
