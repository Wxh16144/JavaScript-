<template>
<div id="five"  class="swiper-slide">
  <div>
    <h1 class="ani animated" 
    swiper-animate-effect="zoomIn" 
    swiper-animate-duration=".5s" 
    swiper-animate-delay="0s">我</h1>
    <h1 class="ani animated" 
    swiper-animate-effect="zoomIn" 
    swiper-animate-duration=".5s" 
    swiper-animate-delay="0.5s">最</h1>
    <h1 class="ani animated" 
    swiper-animate-effect="zoomIn" 
    swiper-animate-duration=".5s" 
    swiper-animate-delay="1s">帅</h1>
  </div>
</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#five {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ad5389; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #3c1053,
    #ad5389
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #3c1053,
    #ad5389
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  h1 {
    font-size: 6vmax;
    color: white;
  }
}
</style>

