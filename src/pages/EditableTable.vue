<template>
  <VmTable title="Editable Table" 
           type="edit" 
           :columns="dataColumns" 
           :data="dataTable"
           v-on:add-ok="add"
           v-on:edit-ok="edit"
           v-on:delete-ok="deletefn"
           class="vm-margin">
  </VmTable>
</template>

<script>
  import VmTable from '@/components/vm-table'
  export default {
    name: 'EditableTable',
    components: {
      VmTable
    },
    methods: {
      add: function (data) {
        this.dataTable.unshift(data)
      },
      edit: function (data) {
        this.dataTable.forEach(function (elem) {
          if (elem.id === data.id) {
            for (let i in data) {
              elem[i] = data[i]
            }
          }
        })
      },
      deletefn: function (data) {
        for (let i = 0; i < this.dataTable.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (this.dataTable[i].id === data[j].id) {
              this.dataTable.splice(i, 1)
            }
          }
        }
      }
    },
    data () {
      return {
        dataColumns: [
          {
            id: '20156541',
            title: '编号',
            key: 'id'
          },
          {
            id: '20156542',
            title: '姓名',
            key: 'name'
          },
          {
            id: '20156543',
            title: '年龄',
            key: 'age'
          },
          {
            id: '20156544',
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
          {
            id: '65416843f194',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '6541g6843150',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '6541h6843150',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            id: '65416v843114',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65416843g114',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '254168431d54',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65456843d154',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '654168431d14',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            id: '65416343s154',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
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
</script>
