<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" ref="mycity">{{this.current_city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="(item,index) of hot" :key="index">
            <div class="button" @click="HandleCity(item.name)">{{item.name}} </div>
          </div>
        </div>
      </div>
      <div class="area"  v-for="(item,key) of cities" :key="'1'+key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="(innerItem,index) of item" :key="'i'+index">
              {{innerItem.name}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: "CityList",
  props:{
    hot:Array,
    cities:Object,
    letter:String
  },
  mounted(){
    this.scroll = new Bscroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })
  },
  methods:{
    HandleCity(value){
      // 派发一个citychange city的 action
      this.$store.commit('citychanged',value)
      this.$router.push('/')
    },
    ...mapMutations([
      'citychanged'
    ])
  },
  data() {
    return {
      data: []
    };
  },
  watch: {
    letter () {
      if(this.letter){
        const element = this.$refs[this.letter][0]
        //better-scroll方法，滚动区自动滚动到元素上
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: mapState({
    current_city: 'city'
  })
};
</script>
<style scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.title {
  line-height: 0.44rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  text-align: left;
  font-size: 0.26rem;
}
.border-topbottom::before,
.border-topbottom::after {
  border-color: rgb(141, 141, 141);
}
.border-bottom::before,
.border-bottom::after {
  border-color: rgb(141, 141, 141);
}
.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  text-align: center;
  margin: 0.1rem;
  border: 0.02rem solid #ccc;
  padding: 0.1rem 0;
  border-radius: 0.06rem;
}
.item-list {
  line-height: 0.6rem;
  color: #666;
  text-align: left;
  padding-left: 0.2rem;
}
</style>