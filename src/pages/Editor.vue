<template>
  <div class="editor">
    <VmPanel title="Preview" class="vm-margin">
      <div v-html="bindHtml"></div>
    </VmPanel>
    <VmEditor class="vm-margin" @upload="setHtml"></VmEditor>
  </div>
</template>
<script>
import VmEditor from '@/components/vm-editor/vm-editor'
import VmPanel from '@/components/vm-panel'
export default {
  name: 'editor',
  components: {
    VmEditor,
    VmPanel
  },
  data: function () {
    return {
      bindHtml: 'Try upload button down right...'
    }
  },
  methods: {
    setHtml: function (data) {
      this.bindHtml = data
    }
  }
}
</script>
