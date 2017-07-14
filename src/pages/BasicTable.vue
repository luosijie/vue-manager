<template>
  <div class="basic-table vm-margin">
    <VmTable title="Basic Table" :columns="dataColumns" :data="dataTable"></VmTable>
  </div>
</template>

<script>
  import VmTable from '@/components/vm-table'
  export default {
    name: 'BasicTable',
    components: {
      VmTable
    },
    data () {
      return {
        dataColumns: [
          {
            id: '2.140710',
            title: '编号',
            key: 'id',
            sortable: true
          },
          {
            id: '2.140711',
            title: '姓名',
            key: 'name',
            sortable: true
          },
          {
            id: '2.140712',
            title: '年龄',
            key: 'age',
            sortable: true
          },
          {
            id: '2.140713',
            title: '地址',
            key: 'address',
            sortable: true
          }
        ],
        dataTable: [
          {
            id: '65416843154',
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            id: '65416843654',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            id: '65416843194',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65416843150',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '65416843150',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            id: '65416843114',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65416843114',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '25416843154',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65456843154',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '65416843114',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            id: '65416343154',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65419843154',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>
