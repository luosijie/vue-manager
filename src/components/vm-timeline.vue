<template>
  <Row class="vm-panel vm-timeline">
    <Row type="flex" justify="center" class="panel-heading">
     {{ title }}
    </Row>
    <ul class="panel-body">
      <li v-for="(item, index) in data">
        <Row v-if="index%2 == 0" type="flex" justify="space-around">
          <div class="left">
            <div class="panel-body">
              <h4>{{ item.date }}</h4>
            </div>
          </div>
          <div class="split">
            <span class="dot-left"></span>
          </div>
          <div class="right">
            <div class="content panel-body">
              <h3>{{ item.time }}</h3>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </Row>

        <Row v-else type="flex" justify="space-around">
          <div class="left">
            <div class="content panel-body">
              <h3>{{ item.time }}</h3>
              <p>{{ item.content }}</p>
            </div>
          </div>
          <div class="split">
            <span class="dot-right"></span>
          </div>
          <div class="right">
            <div class="panel-body">
              <h4>{{ item.date }}</h4>
            </div>
          </div>
        </Row>
      </li>
    </ul>
  </Row>
</template>

<script>
  export default {
    name: 'VmTimeline',
    props: {
      title: {
        type: String,
        default: '时间轴'
      },
      data: {
        type: Array,
        default: function () {
          return [
            {
              date: '2017年6月26日',
              time: '11:58 am',
              content: '完成VmManager时间轴组件'
            }
          ]
        }
      }
    }
  }
</script>
