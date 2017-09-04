<template>
  <div class="editor">
    <div class="vm-panel vm-margin">
      <div class="panel-heading">
        Preview
      </div>
      <div v-html="bindHtml">
        
      </div>
    </div>
    <VmEditor width="100%" class="vm-margin" @upload="setHtml">
    </VmEditor>
  </div>
</template>
<script>
// import VmEditor from '@/components/vm-editor/vm-editor'
import VmEditor from 'vm-editor'
import VmPanel from '@/components/vm-panel'
export default {
  name: 'editor',
  components: {
    VmEditor,
    VmPanel
  },
  data: function () {
    return {
      bindHtml: ''
    }
  },
  methods: {
    setHtml: function (data) {
      this.bindHtml = data
    }
  }
}
</script>
