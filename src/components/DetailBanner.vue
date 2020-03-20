<template>
  <div class="banner">
    <img
      v-show="!showGallary"
      @click="handleImgClick"
      src="http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_r_800x800_83a5fe3a.jpg"
      class="banner-img"
    />
    <div class="banner-info">
      <div class="banner-title">AAAA</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe612;</span>39
      </div>
    </div>
<common-gallary @close="HandleClose" :imgs="imgs" v-show="showGallary"></common-gallary> 
 </div>
</template>

<script>
import CommonGallary from '@/components/Gallary'
export default {
  name: "DetailBanner",
  data() {
  return {
     imgs: [
        'http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_r_800x800_83a5fe3a.jpg',
        'http://img1.qunarzz.com/sight/p0/1510/ca/ca60a080020329ef90.img.jpg_350x240_9ff2208e.jpg',
        'http://img1.qunarzz.com/sight/p0/1510/cc/ccafbdaac21bdbf790.img.jpg_350x240_c35f8451.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleImgClick () {
      console.log(this.showGallary)
      this.showGallary = true
    },
    HandleClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}

</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img {
  width: 100%;
}
.banner-info {
  position: absolute;
  color: #ffffff;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  display: flex;
}
.banner-title {
  font-size: 0.32rem;
  padding: 0 0.2rem;
  flex: 1;
  text-align:left;
}
.banner-number {
  margin: 0.1rem;
  padding:0 0.15rem 0.1rem 0.15rem;
  line-height: 0.4rem;
  height: 0.32rem;
  font-size: 0.24rem;
  border-radius: 0.2rem;
  border: 1px solid black;
}
.banner-icon {
  font-size: .36rem;
  padding: 0.02rem;
}
</style>