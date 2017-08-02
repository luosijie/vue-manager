<template>
  <div class="vm-editor">
    <VmEditorMenu>
      <div class="global-control">
        <VmEditorButton icon="fa fa-cloud-upload" @click.native="uploadHtml"></VmEditorButton>
      </div>
    </VmEditorMenu>
    <div class="vm-editor-html" contenteditable="true">
      
        Please Enter ...
      
    </div>
  </div>
</template>
<style lang="less">
  .vm-editor{
    background-color: white;
    border-radius: 4px;
    border: 1px solid #eeeff1;
    width: 100%;
    .global-control{
      position: absolute;
      right: 15px;
    }
    .vm-editor-html{
      outline: 0;
      min-height: 350px;
      text-align: left;
      padding: 15px;
      font-size: 16px;
      ul,ol{
        margin: 10px 20px;
      }
      ul{
        list-style-type: square;
      }
      ol{
        list-style-type: decimal;
      }
      hr{
        margin: 15px 0;
        border-top: 1px solid #eeeff1;
      }
      pre{
        display: block;
        margin: 10px 0;
        padding: 8px;
        border-radius: 4px;
        background-color: #f2f2f2;
        color: #656565;
        font-size: 14px;
      }
      blockquote{
        display: block;
        border-left: 4px solid #ddd;
        margin: 15px 0;
        padding: 0 15px;
      }
      img{
        margin: 20px 0;
      }
      a{
        color: #41b883;
      }
    }
  } 
</style>
<script>
import VmEditorMenu from '@/components/vm-editor/components/vm-editor-menu'
import VmEditorButton from '@/components/vm-editor/components/vm-editor-button'
export default {
  name: 'VmEditor',
  components: {
    VmEditorMenu,
    VmEditorButton
  },
  data: function () {
    return {
      html: 'Please Enter ...'
    }
  },
  methods: {
    uploadHtml: function () {
      let style = {
        ul: `
              margin: 10px 20px;
              list-style-type: square;
            `,
        ol: `
              margin: 10px 20px;
            `,
        hr: `
              margin: 15px 0;
              border-top: 1px solid #eeeff1;
            `,
        pre: `
              display: block;
              margin: 10px 0;
              padding: 8px;
              border-radius: 4px;
              background-color: #f2f2f2;
              color: #656565;
              font-size: 14px;
             `,
        blockquote: `
                      display: block;
                      border-left: 4px solid #ddd;
                      margin: 15px 0;
                      padding: 0 15px;
                    `,
        img: `
               margin: 20px 0;
             `,
        a: `
            color: #41b883;
           `
      }
      let html = document.getElementsByClassName('vm-editor-html')[0]
      let tagNames = Object.keys(style)
      for (let i = 0; i < tagNames.length; i++) {
        let _tagNames = html.getElementsByTagName(tagNames[i])
        if (_tagNames.length > 0) {
          for (let j = 0; j < _tagNames.length; j++) {
            _tagNames[j].style = style[tagNames[i]]
          }
        }
      }
      this.$emit('upload', html.innerHTML)
    }
  }
}
</script>
