<template>
<div class="wrapper" >
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) of list" :key="index">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>


    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div> 
</template> 


<script>
export default {
  name: 'HomeSwiper',
  props:{
    list: Array
  },
  data (){
    return {
      swiperOption:{
        pagination: {
          el:'.swiper-pagination',
        },
        loop: true,
        observer:true,
        boserveParents:true,
        autoplay:{
          delay:2000,
          stopOnLastSlide:false,
          disableOnInteraction:false
        },
      },
    }
  },
  computed: {
    showSwiper(){
      return this.list.length
    }
  }
}
</script>

<style scoped>
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
}

.swiper-img{
  width: 100%;
}
*{
   touch-action: none;
}
</style>
