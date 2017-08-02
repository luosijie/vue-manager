<template>
  <div class="add-link">  
    <input type="text" v-model="link">
    <button @click="setLink">Add</button>
  </div>
</template>
<style lang="less">
  .add-link{
    display: flex;
    margin: 10px;
    input{
      border: 1px solid #eeeff1;
    }
    button{
      margin-left: 10px;
      width: 50px;
      background-color: #555;
      color: white;
      border: none;
      border-radius: 2px;
      outline: 0;
      cursor: pointer;
    }
  }
</style>
<script>
export default {
  name: 'VmEditorAddlink',
  data: function () {
    return {
      link: 'https://github.com/luosijie'
    }
  },
  methods: {
    setLink: function () {
      document.execCommand('createLink', false, this.link)
    }
  }
}
</script>
