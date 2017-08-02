<template>
  <div class="vm-editor-code"> 
      <div class="content"> 
       
      </div>
      <div class="footer">  
        <button>取消</button>
        <button>提交</button>
      </div>
    </div>
</template>
<style lang="less">
    .vm-editor-menu{
      display: flex;
      height: 40px;
      align-items: center;
      padding: 0 15px;
      background-color: #fafbfc;
      border-bottom: 1px solid #eeeff1;
      .line{
        display: inline-block;
        width: 1px;
        height: 40px;
        margin: 0 10px;
        background-color: #eeeff1
      }
      button{
        width: 24px;
        height: 24px;
        border-radius: 4px;
        outline: 0;
        cursor: pointer;
        background-color: transparent;
        border: none;
        margin-left: 10px;
        &:first-child{
          margin-left: 0;
        }
        &:hover{        
         background-color: #eee;
         border: 1px solid #eeeff1;
        }
        i{
          font-size: 15px;
          color: #858585;
        }
      }
    }
</style>
<script>
export default {
  name: 'VmEditorCode',
  mounted: function () {
    this.activeName = this.$route.name
  },
  methods: {
    execCommand: function (commandName, valueArgument) {
      // let body = document.querySelector('.body');
      if (!valueArgument) {
        valueArgument = null
      }
      document.execCommand('insertBrOnReturn', false)
      document.execCommand(commandName, false, valueArgument)
    }
  }
}
</script>
