<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of list" :key="index">
        <img
          alt="item.title"
          :src="item.imgUrl"
          class="item-img"
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}} </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
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
.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
}
.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}
.item-info {
  flex: 1;
  text-align: left;
  padding: 0.1rem;
  min-width: 0;
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

.item-button {
  line-height: 0.44rem;
  margin-top: 0.16rem;
  background: #ff9300;
  padding: 0 0.1rem;
  border-radius: 0.06rem;
  color: #fff;
}
</style>