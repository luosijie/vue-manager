<template>
  <Row class="vm-login vm-panel">
   <Col span="10" class="login-form">
     <div class="login-header">
       <img src="../assets/img/logo.png" height="80" alt="">
       <p><span>VUE</span>MANAGER</p>
     </div>
     <div class="login-form">
        <Input v-model="username" placeholder="please enter username"></Input>
        <Input v-model="password" type="password" placeholder="Please enter password"></Input>
        <Button type="primary">Login</Button>
     </div>
     <div class="login-footer">
       <Checkbox v-model="remenber">Remenber</Checkbox>
       <span class="forget"><a href="#">Forget Password</a></span>
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
