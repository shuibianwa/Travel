<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
import HomeIcons from '@/components/HomeIcons.vue'
import HomeRecommend from '@/components/HomeRecommend.vue'
import HomeWeekend from '@/components/HomeWeekend.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/js/index.json')
          .then(this.getHomeInfoSucc)
      },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
        }
      }
    },
    mounted(){
      this.LastCity = this.city
      this.getHomeInfo()
    },
    activated () {
    // 当页面加载时，进行判断，城市发生了改变
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      // 更新上一城市
      this.lastCity = this.city
    }
  }
}
</script>
