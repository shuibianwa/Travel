<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of list" :key="index">
        <div>
        <img
          alt="item.title"
          :src="item.imgUrl"
          class="item-img"
        />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}} </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    list:Array
  }
};
</script>
<style scoped>
.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  text-align: left;
}
.item-img {
  width: 100%;
}
.item-info {
  padding-bottom: .1rem;
  text-align: left;
}
.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc {
  line-height: 0.4rem;
  color: rgb(255, 31, 31);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>