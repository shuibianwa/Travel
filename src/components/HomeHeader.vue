<template>
<div class='header'>
  <div class="header-left">
    <span class="iconfont back-icon">&#xe624;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入城市/景点/游玩主题
  </div>
  <div class="header-right">
    {{this.city}}
    <span class="iconfont arrow-icon">&#xe64a;</span> 
    </div>
</div>
</template>

<script>

export default {
  name:'HomeHeader',
  props:{
    city:String
  },
//import引入的组件需要注入到对象中才能使用
data() {
  return {

  };
},
components: {},
//方法集合
methods: {

},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
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
  }
</style>