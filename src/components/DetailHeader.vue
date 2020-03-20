<template>
  <div>
    <router-link v-show="showAbs" tag="div" to="/" class="header-abs">
      <div class="iconfont header-abs-back">&#xe621;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe621;</div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated () {
    /**
     * [lang description]
     * 页面被隐藏或者是被刷新的时候，这个函数会被执行，
     * 接着上面的展示，该页面隐藏的时候，对这个页面进行一个事件的解绑
     */
    window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>

<style scoped>
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
}
.header-abs-back {
  color: #ffffff;
  font-size: 0.4rem;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  color: #ffffff;
  background: #00bcd4;
  text-align: center;
  font-size: 0.32rem;
}
.header-fixed-back {
  color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
}
</style>