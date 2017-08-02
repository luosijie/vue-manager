<template>
  <div class="vm-editor-menu">
        <VmEditorButton icon="fa fa-paragraph" @click.native="execCommand('formatBlock', '<p>')"></VmEditorButton>
        <VmEditorButton>
          <VmEditorDropdown>
            <ul class="vm-editor-ul">
              <li @click="execCommand('formatBlock', '<h1>')">
                <h1>H1</h1>
              </li>
              <li @click="execCommand('formatBlock', '<h2>')">
                <h2>H2</h2>
              </li>
              <li @click="execCommand('formatBlock', '<h3>')">
                <h3>H3</h3>
              </li>
              <li @click="execCommand('formatBlock', '<h4>')">
                <h4>H4</h4>
              </li>
              <li @click="execCommand('formatBlock', '<h5>')">
                <h5>H5</h5>
              </li>
            </ul>
          </VmEditorDropdown>
        </VmEditorButton>
        <VmEditorButton icon="fa fa-font">
          <VmEditorDropdown>
            <ul class="vm-editor-ul">
              <li @click="execCommand('fontSize', 7)">
                <span style="font-size: 20px">7</span>
              </li>
              <li @click="execCommand('fontSize', 6)">
                <span style="font-size: 20px">6</span>
              </li>
              <li @click="execCommand('fontSize', 5)">
                <span style="font-size: 20px">5</span>
              </li>
              <li @click="execCommand('fontSize', 4)">
                <span style="font-size: 18px">4</span>
              </li>
              <li @click="execCommand('fontSize', 3)">
                <span style="font-size: 16px">3</span>
              </li>
              <li @click="execCommand('fontSize', 2)">
                <span style="font-size: 14px">2</span>
              </li>
              <li @click="execCommand('fontSize', 1)">
                <span style="font-size: 12px">1</span>
              </li>
            </ul>
          </VmEditorDropdown>
        </VmEditorButton>
        <VmEditorButton icon="fa fa-bold" @click.native="execCommand('bold')"></VmEditorButton>
        <VmEditorButton icon="fa fa-italic" @click.native="execCommand('italic')"></VmEditorButton>
        <VmEditorButton icon="fa fa-underline" @click.native="execCommand('underline')"></VmEditorButton>
        <VmEditorButton icon="fa fa-strikethrough" @click.native="execCommand('strikeThrough')"></VmEditorButton>
        <VmEditorButton icon="fa fa-adjust">
          <VmEditorDropdown>
            <VmEditorFontcolor></VmEditorFontcolor>
          </VmEditorDropdown>
        </VmEditorButton>

        <span class="line"></span>

        <VmEditorButton icon="fa fa-list-ol" @click.native="execCommand('insertOrderedList')"></VmEditorButton>
        <VmEditorButton icon="fa fa-list-ul" @click.native="execCommand('insertUnorderedList')"></VmEditorButton>
        <VmEditorButton icon="fa fa-quote-left"  @click.native="execCommand('formatBlock', '<blockquote>')"></VmEditorButton>
        <VmEditorButton icon="fa fa-code" @click.native="execCommand('formatBlock', '<pre>')"></VmEditorButton>
        <!-- <VmEditorButton icon="fa fa-table"></VmEditorButton> -->

        <span class="line"></span>

        <VmEditorButton icon="fa fa-image">
          <VmEditorDropdown>
            <VmEditorAddimage></VmEditorAddimage>
          </VmEditorDropdown>
        </VmEditorButton>
        
        <VmEditorButton icon="fa fa-link">
          <VmEditorDropdown>
            <VmEditorAddlink></VmEditorAddlink>
          </VmEditorDropdown>
        </VmEditorButton>
        <VmEditorButton icon="fa fa-minus" @click.native="execCommand('insertHorizontalRule')"></VmEditorButton>

        <span class="line"></span>
        
        <VmEditorButton icon="fa fa-align-center" @click.native="execCommand('justifyCenter')"></VmEditorButton>
        <VmEditorButton icon="fa fa-align-left" @click.native="execCommand('justifyLeft')"></VmEditorButton>
        <VmEditorButton icon="fa fa-align-right" @click.native="execCommand('justifyRight')"></VmEditorButton>
        <VmEditorButton icon="fa fa-align-justify" @click.native="execCommand('justifyFull')"></VmEditorButton>

        <span class="line"></span>
        
        <VmEditorButton icon="fa fa-eraser" @click.native="execCommand('removeFormat')"></VmEditorButton>
        <VmEditorButton icon="fa fa-trash" @click.native="execCommand('delete')"></VmEditorButton>
        <slot></slot>
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
      position: relative;
      .line{
        display: inline-block;
        width: 1px;
        height: 40px;
        margin: 0 10px;
        background-color: #eeeff1;
      }
    }
    ul.vm-editor-ul{
      li{
        padding: 10px 30px;
        &:hover{
          background: #f8f8f8;
        }
      }
    }
</style>
<script>
import VmEditorButton from '@/components/vm-editor/components/vm-editor-button'
import VmEditorDropdown from '@/components/vm-editor/components/vm-editor-dropdown'
import VmEditorAddlink from '@/components/vm-editor/components/vm-editor-addlink'
import VmEditorAddimage from '@/components/vm-editor/components/vm-editor-addimage'
import VmEditorFontcolor from '@/components/vm-editor/components/vm-editor-fontcolor'
export default {
  name: 'VmEditorMenu',
  components: {
    VmEditorButton,
    VmEditorDropdown,
    VmEditorAddlink,
    VmEditorAddimage,
    VmEditorFontcolor
  },
  methods: {
    execCommand: function (commandName, valueArgument) {
      // let body = document.querySelector('.body');
      if (!valueArgument) {
        valueArgument = null
      }
      document.execCommand('styleWithCSS', null, true)
      document.execCommand(commandName, false, valueArgument)
    },
    setHtml: function (type) {
      let selection = window.getSelection().anchorNode.data
      let selectionText
      let innerHtml
      if (selection) {
        selectionText = selection.replace(/(^\s*)|(\s*$)/g, '')
      } else {
        selectionText = '请输入内容'
      }
      innerHtml = '<' + type + '>' + selectionText + '</' + type + '>'
      this.execCommand('insertHTML', innerHtml)
    },
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
