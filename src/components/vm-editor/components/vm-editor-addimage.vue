<template>
  <div class="add-img">  
    Add Imgage
    <input type="file" accept="image/gif, image/jpeg, image/png" @change="setImage">
  </div>
</template>
<style lang="less">
  .add-img{
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &:hover{
      background-color: #f8f8f8;
    }
    input{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
</style>
<script>
export default {
  name: 'VmEditorAddimage',
  methods: {
    setImage: function (evt) {
      let reader = new FileReader()
      let file = evt.target.files[0]
      reader.readAsDataURL(file)
      reader.onload = function (evt) {
        let base64Image = evt.target.result
        document.execCommand('insertImage', false, base64Image)
      }
    }
  }
}
</script>
