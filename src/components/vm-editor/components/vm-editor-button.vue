<template>
  <button class="vm-editor-button" :class="{ active: slot }">
    <i :class="icon" @click="showSlot"></i>
    <slot v-if="slot"></slot>
  </button>
</template>
<style lang="less">
  button.vm-editor-button{
    width: 24px;
    height: 24px;
    position: relative;
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
    }
    i{
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 15px;
      color: #858585;
    }
  }
  // .active{
  //   background-color: #eee!important;
  //   border: 1px solid #eeeff1!important;
  // }
</style>
<script>
export default {
  name: 'VmEditorButton',
  props: {
    icon: {
      type: String,
      default: 'fa fa-header'
    }
  },
  data: function () {
    return {
      slot: false
    }
  },
  methods: {
    showSlot () {
      this.slot === false ? this.slot = true : this.slot = false
    }
  }
}
</script>
