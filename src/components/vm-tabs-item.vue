<template>

  <li v-show="show">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'VmTabsItem',
    props: ['name', 'label'],
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      updateShow: function () {
        if (this.$parent.activeName === this.name) {
          this.show = true
        } else {
          this.show = false
        }
      }
    },
    updated: function () {
      this.updateShow()
    },
    mounted: function () {
      this.updateShow()
    }
  }
</script>
