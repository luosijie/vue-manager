<template>
  <div class="vm-chart-bar vm-panel">
    <div class="panel-body" :id="this.id" :style="{ height: height + 'px'}">
    </div>
  </div>
</template>
<script>
  import chartTheme from '@/theme/chartTheme.js'
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/radar')
  // 引入提示框和标题组件
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')

  export default {
    name: 'VmChartRadar',
    props: {
      // 图表区域高度
      title: {
        type: String,
        default: '饼状图'
      },
      height: {
        type: Number,
        default: 400
      },
      // 图表形状颜色, ecahrts依次选择颜色渲染
      color: {
        type: Array,
        default: function () {
          return chartTheme.color
        }
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: '#fff'
      },
      // 雷达图indicator值 和data的value一一对应
      indicator: {
        type: Array,
        required: true,
        default: function () {
          return ['AQI', 'PM2.5', 'PM10', 'CO', 'NO2', 'SO2']
        }
      },
      // 雷达图的值
      data: {
        type: Array,
        required: true,
        default: function () {
          return [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销'
            }
          ]
        }
      }
    },
    data: function () {
      return {
        // 刻度颜色
        axisColor: '#797979',
        // 分割线颜色
        splitLineColor: '#dcdcdc',
        chart: null
      }
    },
    computed: {
      // 生成一个随机id, 实现图表组件的复用
      id: function () {
        return parseInt(Math.random() * 1000000)
      },
      legendData: function () {
        let legendData = []
        this.data.forEach(function (elem) {
          legendData.push(elem.name)
        })
        return legendData
      },
      indicatorData: function () {
        let tempArray = []
        this.indicator.forEach(function (elem) {
          let tempObj = {}
          tempObj.name = elem
          tempArray.push(tempObj)
        })
        return tempArray
      }
    },
    methods: {
      renderChart: function () {
        if (this.chart) {
          this.chart.dispose()
        }
        // 初始化echart
        this.chart = echarts.init(document.getElementById(this.id))
        // 自定义eChart样式 官方配置指南(http://echarts.baidu.com/option.html#yAxis.splitLine.lineStyle.color)
        this.chart.setOption({
          title: { text: this.title },
          grid: {
            left: 30,
            right: 30,
            bottom: 100
          },
          legend: {
            data: this.legendData,
            icon: 'circle',
            bottom: 0
          },
          radar: {
            indicator: this.indicatorData
          },
          color: this.color,
          series: {
            type: 'radar',
            label: {
              emphasis: {
                show: true
              }
            },
            data: this.data
          }
        })
      }
    },
    watch: {
      data: function () {
        this.renderChart()
      }
    },
    mounted: function () {
      this.renderChart()
    }
  }
</script>
