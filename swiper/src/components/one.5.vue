<template>
<div id="six"  class="swiper-slide">
<h1 class="ani animated" 
    swiper-animate-effect="bounceIn" 
    swiper-animate-duration="1s" 
    swiper-animate-delay="0s">Over</h1>
</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#six {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a8c0ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #3f2b96,
    #a8c0ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #3f2b96,
    #a8c0ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  h1 {
    font-size: 6vmax;
    color: green;
  }
}
</style>

