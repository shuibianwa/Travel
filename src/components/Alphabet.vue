<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      // console.log(e);
      //获取对应字母
      this.$emit("change", e.target.innerHTML);
    },
    handleTouchStart(e) {
      this.touchStatus = true;
      console.log(this.touchStatus);
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if(this.timer){
          clearTimeout(this.time)
        }
        this.timer = setTimeout(() => {
        // A 字母距离搜索栏底部的距离
        const touchY = e.touches[0].clientY - 82;
        const index = Math.floor(touchY - this.startY) / 21;
        if (index >= 0 && index < this.letters.length) {
          this.$emit("change", this.letters[index]);
        }
        },17)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  updated (){
    this.startY = this.$refs["A"][0].offsetTop;
  }
};
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
}
.item {
  line-height: 0.4rem;
  color: #00bcd4;
  font-weight: bold;
}
</style>