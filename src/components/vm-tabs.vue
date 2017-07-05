<template>
  <div class="vm-tabs vm-panel">
    <div class="heading">
      <span class="icon">
        <i :class="icon"></i>
      </span>
      <span class="title">
        {{ title }}
      </span>
    </div>
    <div class="body" :style="{ height: contentHeight }">
      <ul>
        <slot></slot>
      </ul>
    </div>
    <div class="footer">
      <ul>
        <li v-for="(item, index) in navList" @click="getActiveName(index)" :class="{ active: item.active }" :key="item.id"> {{ item.label }} </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'VmTabs',
    props: ['icon', 'title', 'contentHeight'],
    data: function () {
      return {
        navList: [],
        activeName: String
      }
    },
    methods: {
      getActiveName: function (index) {
        this.activeName = this.navList[index].name
      },
      updateNavList: function () {
        this.navList = []
        let itemList = this.$children
        let that = this
        itemList.forEach(function (item) {
          let obj = {}
          obj.label = item.label
          obj.name = item.name
          that.activeName === item.name ? obj.active = true : obj.active = false
          that.navList.push(obj)
        })
      }
    },
    watch: {
      activeName: function () {
        this.updateNavList()
      }
    },
    mounted: function () {
      this.activeName = this.$children[0].name
      this.updateNavList()
    }
  }
</script>
