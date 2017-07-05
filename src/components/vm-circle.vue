<template>
  <Row class="vm-circle vm-panel">
    <Col span="12">
      <i-circle :percent="percent">
        <span class="demo-i-circle-inner" style="font-size:24px">{{ percent }}%</span>
      </i-circle>
    </Col>
    <Col span="12">
      <div class="desc">
        <h2 class="title">{{ title }}</h2>
        <p>{{ usedName }}：{{ usedValue }}</p>
        <p>{{ restName }}：{{ restValue }}</p>
      </div>
    </Col>
  </Row>
</template>
<script>
  export default {
    name: 'VmCircle',
    props: {
      title: {
        type: String,
        default: '圆环进度标题'
      },
      usedName: {
        type: String,
        default: '已使用'
      },
      usedValue: {
        type: Number,
        default: 80
      },
      restName: {
        type: String,
        default: '未使用'
      },
      restValue: {
        type: Number,
        default: 20
      }
    },
    computed: {
      percent: function () {
        return parseInt(this.usedValue / (this.usedValue + this.restValue) * 100)
      }
    }
  }
</script>
