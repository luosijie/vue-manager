<template>
  <Row class="vm-progress vm-panel">
    <Row type="flex"  align="middle" justify="space-between" class="panel-heading">
      {{ title }}
      <Radio-group v-model="order" type="button" size="large" @on-change="handleSortData">
        <Radio label="0"><i class="fa fa-bars"></i></Radio>
        <Radio label="1"><i class="fa fa-sort-amount-asc"></i></Radio>
        <Radio label="-1"><i class="fa fa-sort-amount-desc"></i></Radio>
      </Radio-group>
    </Row>
    <table> 
      <tbody> 
        <tr v-for="(item, index) in rebuildData" :key="item.id">
          <td>  
           {{ index | indexPlus }}
          </td>
          <td>  
            {{ item.name }}
          </td>
          <td v-if="item.tags" :key="item.id">  
            <Tag v-for="item in item.tags" :key="item.id">{{ item }}</Tag>
          </td>
          <td>  
            <Progress :percent="item.value" status="active"></Progress>
          </td>
        </tr>
      </tbody>
    </table>
  </Row>
</template>
<script>
  export default {
    name: 'VmUserPreview',
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
    },
    data: function () {
      return {
        order: '0',
        rebuildData: []
      }
    },
    filters: {
      indexPlus: function (value) {
        return ++value
      }
    },
    methods: {
      sortData: function (data, type) {
        if (type === 1) {
          data.sort((a, b) => {
            return a.value - b.value
          })
        } else if (type === -1) {
          data.sort((a, b) => {
            return b.value - a.value
          })
        }
      },
      handleSortData: function () {
        if (this.order === '0') {
          this.rebuildData = this.data.slice(0)
        } else if (this.order === '1') {
          this.sortData(this.rebuildData, 1)
        } else if (this.order === '-1') {
          this.sortData(this.rebuildData, -1)
        }
        console.log(this.data[0].value)
        console.log(this.rebuildData[0].value)
      }
    },
    created () {
      this.rebuildData = this.data.slice(0)
    }
  }
</script>
