<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },

  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  //监控data中的数据变化
  watch: {}
};
</script>
<style>
.icons > .swiper-container {
  height: 0;
  padding-bottom: 45%;
}
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 45%;
}
.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 22%;
}
.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}
.icon-img-content {
  height: 100%;
  display: block;
  margin: 0 auto;
}
.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>