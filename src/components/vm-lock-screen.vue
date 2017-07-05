<template>
  <div class="vm-lock-screen vm-panel">
   <div class="company">
     <img src="../assets/img/logo.png" height="18" alt="">
     <span>VUE</span>MANAGER
   </div>
   <div class="user">
     <img src="../assets/img/photo.jpg" height="100" alt="">
     <p class="name">JesseLuo</p>
   </div>
   <Input v-model="password" placeholder="请输入解锁密码" :style="{ width: 300 + 'px' }"></Input>
   <Button type="primary">登录</Button>
  </div>
</template>
<script>
  export default {
    name: 'VmLockScreen',
    data: function () {
      return {
        password: ''
      }
    }
  }
</script>
