<template>
<div id="seven" class="swiper-slide">
<input type="text" 
    name="username" 
    id="username" 
    required 
    autocomplete="off"
    oninvalid="setCustomValidity('请输入有效的电话号码');"
    oninput="setCustomValidity('');"
    placeholder="我应该怎么称呼您"
    maxlength="8"
    pattern="^[A-Za-z0-9\u4e00-\u9fa5_]+">
</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#seven {
  width: 100vw;
  height: 100vh;
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #8f94fb,
    #4e54c8
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #8f94fb,
    #4e54c8
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    height: 10vmin;
    border: none;
    font-size: 4vmin;
    outline: none;
    text-indent: 0.3rem;
    color: #333;
    width: 60vw;
    border-radius: 5px;
    text-align: center;
    background-color: rgba(255, 255, 2555, 0.6);
  }
}
</style>

