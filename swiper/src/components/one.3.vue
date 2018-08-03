<template>
<div id="four"  class="swiper-slide">
   <h1 class="ani animated" 
    swiper-animate-effect="rotateIn" 
    swiper-animate-duration="1s" 
    swiper-animate-delay="0s">Swiper</h1>
</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#four {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #636363; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #a2ab58,
    #636363
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #a2ab58,
    #636363
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  h1 {
    color: aqua;
    font-size: 6vmax;
  }
}
</style>

