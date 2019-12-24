<template>
  <div class="btn" @click="goWindows">
    CLICK ON TO LOGIN NOW!
  </div>
</template>

<script>
  export default {
    methods: {
      goWindows()  {
        // VuePress会自动把文件夹里的 'README.md' 转换为 'index.html' 文件
        this.$router.push({ path: '/windows/index.html'});
      }
    }

  }
</script>

<style scoped>
.btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 2px dashed #bd93f9;
  border-radius: 10px;
  font-size: 80px;
  text-align: center;
  color: #bd93f9;
  cursor: pointer;
}
</style>