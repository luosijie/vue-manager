<div align=center>
  <img width="400" height="400" src="https://github.com/luosijie/Front-end-Blog/blob/master/img/vm_logo.png?raw=true">
  <p>
    <strong>Vue Panel Framework,</strong> <a href="https://luosijie.github.io/vue-manager/">Live Demo</a>
  </p>
</div>
</div>
<br>
<div align=center>
  <img src="https://img.shields.io/badge/Dependency-Vue2.0-yellow.svg?style=flat">
  <img src="https://img.shields.io/badge/Dependency-iView-blue.svg?style=flat">
  <img src="https://img.shields.io/badge/Dependency-ECharts-red.svg?style=flat">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat">
</div>

<br>

这是一个以Vue2.0为框架，结合 iView 和 ECharts 的后台组件， 可以说是在 iView 基础上的进一步组件化。

默认的主题沿用vue的官方主题绿, logo的设计也是用 vue的官方logo 简单变形得到 M 的形状。

希望可以帮助使用者快速搭建基于Vue2.0的管理后台。


## 安装
1. 安装 Node / npm(cnpm)
2. git clone "https://github.com/luosijie/vue-manager"
3. cnpm install
4. npm run dev
5. 访问 localhost:8080

## 依赖
1. Vue2.0
2. iView
3. ECharts

## 实现的功能
> 目前实现一些基本的信息展示和数据表格操作组件，希望以后有机会继续增加
1. 信息总览
2. 用户面板
3. 工作进度
4. 时间轴
5. 天气面板
6. 留言面板
7. 基本表格
8. 可编辑表格
9. 图表
10. ...

## 全局样式定义
> 全局样式的自定义沿用iView的主题定制方法, 可在文件夹src下的theme/index.less定义样式

![theme](https://github.com/luosijie/Front-end-Blog/blob/master/img/theme.PNG?raw=true)

![index.less](https://github.com/luosijie/Front-end-Blog/blob/master/img/them-index.PNG?raw=true)

## 组件使用
> 每个组件都有完整的UI样式和基本的交互，使用者只需要在组件外部绑定数据即可
### 目录

![组件目录](https://github.com/luosijie/Front-end-Blog/blob/master/img/vm-componets.PNG?raw=true)

### 举例
> 具体每个组件的使用可以查看Demo(项目文件夹的 Src目录) 和 vm-组件里的props属性
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
vm-table的可编辑模式可以实现数据的增删改,
分别通过

增: v-on:add-ok="add"

删: v-on:delete-ok="deletefn">

改: v-on:delete-ok="deletefn">

来实现

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
> 先这样了 欢迎大家star
