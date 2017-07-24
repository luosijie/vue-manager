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
  <img src="https://img.shields.io/badge/Dependency-iView2.0.0-blue.svg?style=flat">
  <img src="https://img.shields.io/badge/Dependency-ECharts3.6.2-red.svg?style=flat">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat">
</div>

<br>

## Install
1. install node / npm(cnpm)
2. git clone "https://github.com/luosijie/vue-manager"
3. cnpm install
4. npm run dev
5. visit localhost:8080

## Dependency
1. Vue2.0
2. iView
3. ECharts

## Global style
> You can define your own style by overriding less file theme/index.less

![theme](https://github.com/luosijie/Front-end-Blog/blob/master/img/theme.PNG?raw=true)

![index.less](https://github.com/luosijie/Front-end-Blog/blob/master/img/them-index.PNG?raw=true)

## Usage of componets

### Components list

![组件目录](https://github.com/luosijie/Front-end-Blog/blob/master/img/vm-componets.PNG?raw=true)

### Example
#### vm-progress

![vm-progress](https://github.com/luosijie/Front-end-Blog/blob/master/img/vm-progress.PNG?raw=true)

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
