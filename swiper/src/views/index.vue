<template>
    <div id='hello' class="swiper-wrapper">
        <one></one>
        <two></two>
        <three></three>
        <four></four>
        <five></five>
        <six></six>
        <seven></seven>     
    </div>
</template>
<script>
import one from "../components/one.vue";
import two from "../components/one.1.vue";
import three from "../components/one.2.vue";
import four from "../components/one.3.vue";
import five from "../components/one.4.vue";
import six from "../components/one.5.vue";
import seven from "../components/one.6.vue";
export default {
  components: {
    one,
    two,
    three,
    four,
    five,
    six,
    seven
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
$color: red;
h1 {
  color: $color;
}

</style>
