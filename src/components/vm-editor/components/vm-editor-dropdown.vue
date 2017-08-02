<template>
    <div class="vm-editor-dropdown" v-if="show" @mouseleave="hide">
      <slot></slot>
    </div>
</template>
<style lang="less">
    .vm-editor-dropdown{
      position: absolute;
      background: #fff;
      left: 0;
      top: 35px;
      border-radius: 4px;
      border: 1px solid #eeeff1;
      box-shadow: 0 0 4px rgba(0,0,0,.05);
      overflow: hidden;
    }
</style>
<script>
export default {
  name: 'VmEditorDropDown',
  data: function () {
    return {
      show: true
    }
  },
  methods: {
    hide: function () {
      this.show = false
    }
  }
}
</script>
