<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input iconfont" :placeholder='icon' />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <!--双向绑定keyword-->
      <ul>
        <!--遍历找到的城市-->
        <li
          class="search-item border-bottom"
          v-for="(city,index) in list"
          :key="index"
        >{{city}}</li>
        <!--没有找到时的显示-->
        <li class="search-item border-bottom" v-show="hasCity">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "CitySearch",
  props: ["cities"],
  data() {
    return {
      icon:'\ue61c请输入城市名或大写首字母',
      //关键字
      keyword: "",
      //城市列表
      list: [],
      //节流
      timer:null
    };
  },
  computed: {
    hasCity() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        if (!this.keyword) {
          this.cityList = []
          return
        }
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.pinyin.substr(0,1).indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value.name)
            }
          })
          this.list = result
        }
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style scoped>
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: #00bcd4;
}
.search-input {
  color: #666;
  width: 100%;
  height: 0.62rem;
  box-sizing: border-box;
  padding: 0 0.5rem;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.06rem;
}
.search-content {
  overflow: hidden;
  background: #eee;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  z-index: 1;
  bottom: 0;
}
.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  color: #666;
  background: #fff;
}
</style>