<template>
  <ul class="vm-editor-fontcolor">
    <li @click="setColor('#1d8ce0')"></li>
    <li @click="setColor('#41b883')"></li>
    <li @click="setColor('#ffa000')"></li>
    <li @click="setColor('#f60000')"></li>
    <li @click="setColor('#f0e02f')"></li>
    <li @click="setColor('#00dc77')"></li>
    <li @click="setColor('#e6e41c')"></li>
    <li @click="setColor('#e026a0')"></li>
    <li @click="setColor('#555555')"></li>
    <li @click="setColor('#324057')"></li>
    <li @click="setColor('#8492a6')"></li>
    <li @click="setColor('#99a9bf')"></li>
  </ul>
</template>
<style lang="less">
  ul.vm-editor-fontcolor{
      margin: 3px;
      width: 107px;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li{
        float: left;
        width: 20px;
        height: 20px;
        background: black;
        margin: 3px;
        border-radius: 2px;
        &:nth-child(1){
          background-color: #1d8ce0;
        }
        &:nth-child(2){
          background-color: #41b883;
        }
        &:nth-child(3){
          background-color: #ffa000;
        }
        &:nth-child(4){
          background-color: #f60000;
        }
        &:nth-child(5){
          background-color: #f0e02f;
        }
        &:nth-child(6){
          background-color: #00dc77;
        }
        &:nth-child(7){
          background-color: #e6e41c;
        }
        &:nth-child(8){
          background-color: #e026a0;
        }
        &:nth-child(9){
          background-color: #555555;
        }
        &:nth-child(10){
          background-color: #324057;
        }
        &:nth-child(11){
          background-color: #8492a6;
        }
        &:nth-child(12){
          background-color: #99a9bf;
        }
      }
    }
</style>
<script>
export default {
  name: 'VmEditorFontcolor',
  methods: {
    setColor: function (valueArgument) {
      // let body = document.querySelector('.body');
      if (!valueArgument) {
        valueArgument = null
      }
      document.execCommand('foreColor', false, valueArgument)
    }
  }
}
</script>
