<template>
  <Row class="vm-login vm-panel">
   <Col span="10" class="login-form">
     <div class="login-header">
       <img src="../assets/img/logo.png" height="80" alt="">
       <p><span>VUE</span>MANAGER</p>
     </div>
     <div class="login-form">
        <Input v-model="username" placeholder="请输入邮箱或手机号"></Input>
        <Input v-model="password" placeholder="请输入密码"></Input>
        <Button type="primary">登录</Button>
     </div>
     <div class="login-footer">
       <Checkbox v-model="remenber">记住密码</Checkbox>
       <span class="forget"><a href="#">忘记密码</a></span>
     </div>
   </Col>
   <Col span="14" class="login-ad">
     <span class="photo-author">Photo: Jure Kravanja</span>
   </Col>
  </Row>
</template>
<script>
  export default {
    name: 'VmLogin',
    data: function () {
      return {
        username: '',
        password: '',
        remenber: false
      }
    }
  }
</script>
