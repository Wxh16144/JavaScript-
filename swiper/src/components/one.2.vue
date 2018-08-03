<template>
<div id="three"  class="swiper-slide">
  
   <h1 class="ani animated" 
    swiper-animate-effect="zoomIn" 
    swiper-animate-duration="1s" 
    swiper-animate-delay="0s">这是一个Demo</h1>
</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#three {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #005aa7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #fffde4,
    #005aa7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #fffde4,
    #005aa7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  h1{
    font-size: 6vmax; 
    color: pink;
  }
}
</style>

