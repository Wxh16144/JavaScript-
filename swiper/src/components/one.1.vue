<template>
<div id="two"  class="swiper-slide">
<h1 class="ani animated" 
    swiper-animate-effect="bounceInDown" 
    swiper-animate-duration="1s" >我是吴大龙</h1>
</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#two {
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #74ebd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #acb6e5,
    #74ebd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #acb6e5,
    #74ebd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  h1{
    font-size: 6vmax;
  }
}
</style>

