<template>
<div class='header'>
  <div class="header-left">
    <span class="iconfont back-icon">&#xe621;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe61c;</span>
    输入城市/景点/游玩主题
  </div>
  <router-link to="/city">
  <div class="header-right">
    {{this.city}}
    <span class="iconfont arrow-icon">&#xe6aa;</span> 
    </div>
  </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style scoped>
/* 1rem = html font-size = 50px */

  .header{
    display: flex;
    line-height: .86rem;
    background: #00bcd4;
    color: #fff;
  }  
  .back-icon{
    text-align: center;
    font-size: .4rem;
  }
  .arrow-icon{
    font-size: .24rem;
  }
  .header-left{
    width: .64rem;
    float: left;
  }
  .header-input{
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
  }
  .header-right{
    width: 1.24rem;
    float: right;
    color: rgb(255, 255, 255);
  }
</style>