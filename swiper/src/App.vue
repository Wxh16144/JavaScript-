<template>
  <div id="app" class="swiper-container">
    <router-view/>
    <img id="array" src="./assets/arrow.png" alt="">
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "App",
  mounted() {
    new Swiper(".swiper-container", {
      direction: "vertical", //垂直
      mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
      grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
      // effect: "fade", //slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
      on: {
        init: function() {
          swiperAnimateCache(this); //隐藏动画元素
          swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function() {
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
      }

      // autoHeight: true, //高度随内容变化

      // height:667
      // loop: true,
      // // 如果需要分页器
      // pagination: ".swiper-pagination",
      // // 如果需要前进后退按钮
      // nextButton: ".swiper-button-next",
      // prevButton: ".swiper-button-prev",
      // // 如果需要滚动条
      // scrollbar: ".swiper-scrollbar"
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* @import url("./assets/swiper.min.css"); */
@import url("./assets/animate.min.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
}

.swiper-wrapper {
  height: 100vh;
}
.swiper-container {
  overflow: hidden;
}
#array {
  position: fixed;
  bottom: 5vmin;
  width: 6vmin;
  z-index: 999;
  animation: start 1.5s infinite ease-in-out;
}

@keyframes start {
  0%,
  30% {
    opacity: 0;
    transform: translate(0, 10px);
  }
  60% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0.1;
    transform: translate(0, -8px);
  }
}
</style>
