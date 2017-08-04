<div align=center>
  <img width="400" height="400" src="https://github.com/luosijie/Front-end-Blog/blob/master/img/vm_logo.png?raw=true">
  <p>
    <strong>Vue Panel Framework,</strong> <a href="https://luosijie.github.io/vue-manager/">Live Demo</a>
  </p>
</div>
</div>
<br>
<div align=center>
  <img src="https://img.shields.io/badge/Dependency-Vue2.3.3-yellow.svg?style=flat">
  <img src="https://img.shields.io/badge/Dependency-iView2.0-blue.svg?style=flat">
  <img src="https://img.shields.io/badge/Dependency-ECharts3.6.2-red.svg?style=flat">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat">
</div>

<br>

## 安装
1. install node / npm(cnpm)
2. git clone "https://github.com/luosijie/vue-manager"
3. cnpm install
4. npm run dev
5. visit localhost:8080

## 依赖
1. Vue2.0
2. iView
3. ECharts

## 全局样式
> 你可以通过修改less文件 theme/index.less 来自定义全局样式

![theme](https://github.com/luosijie/Front-end-Blog/blob/master/img/theme.PNG?raw=true)

![index.less](https://github.com/luosijie/Front-end-Blog/blob/master/img/them-index.PNG?raw=true)

## 组件使用

### 组件列表

![组件目录](https://github.com/luosijie/Front-end-Blog/blob/master/img/vm-componets.PNG?raw=true)

### 例子
#### vm-progress

![vm-progress](https://github.com/luosijie/Front-end-Blog/blob/master/img/vm-progress.PNG?raw=true)

| 属性 | 描述 | 类型 | 默认 |
| ---- | ---- | ---- | ---- |
| title | 自定义标题 | String | Progress |
| data | 显示的结构化数据 | Array | 详见属性 |

**属性**
```
    props: {
      title: {
        type: String,
        default: 'Progress'
      },
      data: {
        type: Array,
        default: function () {
          return [
            {
              name: 'JesseLuo',
              tags: ['hansome', 'cool'],
              value: 100
            }
          ]
        }
      }
    }
```
**应用**

```
<VmProgress title="工作进度" :data="dataProgress"></VmProgress>
...
export default {
  data: function () {
   return dataProgress: [
      {
        name: 'Jesse Luo',
        tags: ['很帅', '逗比'],
        value: 90
      },
      {
        name: 'Angla Cool',
        tags: ['美丽', '感性', '文艺'],
        value: 30
      },
      {
        name: 'lele Wang',
        tags: ['气质', '厉害'],
        value: 80
      },
      {
        name: 'Jesse Ca',
        tags: ['才女', '努力', '博学'],
        value: 20
      },
      {
        name: 'Jesse Lee',
        tags: ['很帅', '牛逼'],
        value: 100
      }
    ],
  }
}

```
### vm-timeline

![vm-timeline](https://github.com/luosijie/Front-end-Blog/blob/master/img/vm-timeline.PNG?raw=true)

| 属性 | 描述 | 类型 | 默认 |
| ---- | ---- | ---- | ---- |
| title | 自定义标题 | String | 时间轴 |
| data | 显示的结构化数据 | Array | 详见属性 |

**属性**
```
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
```
**应用**

```
<VmTimeline :data="dataTimeline"></VmTimeline>
...

export default {
  data: function () {
    return {
      dataTimeline: [
        {
          date: '2017年7月15日',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017年7月15日',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017年7月15日',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017年7月15日',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017年7月15日',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        }
      ]
    }
  }
}
```
### vm-chart-bar-line

![vm-chart-bar-line](https://github.com/luosijie/Front-end-Blog/blob/master/img/vm-charts-bar-line.PNG?raw=true)

| 属性 | 描述 | 类型 | 默认 |
| ---- | ---- | ---- | ---- |
| title | 自定义标题 | String | 时间轴 |
| height | 图表高度 | Number | 400 |
| color | 图表渲染颜色,依次从颜色数组中提取 | Array | 详见属性 |
| bgColor | 图表背景色 | String | #fff |
| xAxisData | 横坐标的值 | Array | 详见属性 |
| series | 纵坐标的值 | Array | 详见属性 |

**属性**
```
   props: {
      // 图表区域高度
      title: {
        type: String,
        default: '柱形图'
      },
      height: {
        type: Number,
        default: 400
      },
      // 图表形状颜色, ecahrt依次选择颜色渲染
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
      // 横坐标数据
      xAxisData: {
        type: Array,
        required: true,
        default: function () {
          return ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        }
      },
      // 纵坐标数据
      series: {
        type: Array,
        required: true,
        default: function () {
          return [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    }
```
**应用**

```
<VmChartBarLine  title="二维柱形图" :xAxisData="dataBar2.xAxisData" :series="dataBar2.series">
</VmChartBarLine>
...

export default {
  data: function () {
    return {
      dataBar2: {
        xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [50, 200, 360, 100, 100, 200]
          },
          {
            name: '增长量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      },
    }
  }
}
```
### vm-table

![vm-table](https://github.com/luosijie/Front-end-Blog/blob/master/img/vm-table.PNG?raw=true)


| 属性 | 描述 | 类型 | 默认 |
| ---- | ---- | ---- | ---- |
| title | 自定义标题 | String | Basic Table |
| type | 可编辑和不可编辑,不可编辑值为 edit | String | null |
| columns | 表格列的配置描述 | Array | [] |
| data | 显示的结构化数据 | Array | [] |

**属性**
```
   props: {
      title: {
        type: String,
        default: 'Basic Table'
      },
      type: String,
      columns: Array,
      data: Array
    }
```
**事件** 编辑模式下可用

| 事件名 | 描述 | 返回值 |
| ---- | ---- | ---- |
| edit-ok | 编辑完成后触发 | 编辑表单的数据 |
| add-ok | 添加完成后触发 | 添加表单的数据 |
| delete-ok | 删除完成后触发 | 删除的数据集合 |

**应用**

```
<VmTable title="可编辑表格" 
         type="edit" 
         :columns="dataColumns" 
         :data="dataTable"
         v-on:add-ok="add"
         v-on:edit-ok="edit"
         v-on:delete-ok="deletefn">
</VmTable>
...

export default {
  methods: {
    add: function (data) {
      //...
    },
    edit: function (data) {
      //...
    },
    deletefn: function (data) {
      //...
    }
  },
  data: function () {
    return {
      dataColumns: [
        {
          title: '编号',
          key: 'id'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      dataTable: [
        {
          id: '65416s843154',
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          id: '6541684q6534',
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },

        ...

        {
          id: '65419843f154',
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    }
  }
}
```
