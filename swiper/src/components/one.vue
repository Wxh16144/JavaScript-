<template>
<div id="one" class="swiper-slide" >
  <div class="title" >
    <span class="ani animated" 
    swiper-animate-effect="fadeInLeft" 
    swiper-animate-duration="1s" >Hello</span>
    <span class="ani animated" 
    swiper-animate-effect="fadeInRight" 
    swiper-animate-duration="1s" 
    swiper-animate-delay="1s">World</span>
  </div>
  <!-- <h1>WuXiaohong</h1> -->
</div>
</template>
<script>
export default {
  created() {},
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
#one {
  width: 100vw;
  height: 100vh;
  background: #355c7d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    45deg,
    #c06c84,
    #6c5b7b,
    #355c7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    45deg,
    #c06c84,
    #6c5b7b,
    #355c7d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: rgba(255, 255, 255, 0.8);
  }
  .title {
    position: relative;
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      font-size: 6vmax;
      color: white;
    }
  }
}
</style>

