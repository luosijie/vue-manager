<template>
  <Row class="vm-state-group vm-panel">
    <div class="item" v-for="item in data" :style="{ width: itemWidth }" :key="item.id">
      <span class="icon" :style="{ color: item.color }">
        <i :class="item.icon"></i>
      </span>
      <p>
        {{ item.title }} {{ item.value }}
      </p>
    </div>
  </Row>
</template>
<script>
  export default {
    name: 'VmStateGroup',
    props: {
      data: {
        type: Array,
        default: function () {
          return [
            {
              title: 'title',
              icon: 'fa fa-user',
              value: '666',
              color: '#41b883'
            }
          ]
        }
      }
    },
    computed: {
      itemWidth: function () {
        let p = 1 / this.data.length * 100 + '%'
        return p
      }
    },
    mounted: function () {
      console.log(1 / this.data.length * 100 + '%')
    }
  }
</script>
