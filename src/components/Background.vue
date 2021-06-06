<template>
  <div class="background"></div>
</template>

<script>
export default {
  name: 'Background'
}
</script>

<style scoped>
.background{
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index: -1;
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
}
.background::before{
  content: "";
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  opacity: 0.7;
  background-image: linear-gradient(45deg , rgb(0,3,38) 0%, rgb(39, 125, 201) 100%);
}
</style>
