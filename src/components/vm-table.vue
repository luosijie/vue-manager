<template>
  <Row class="vm-table vm-panel">
    <div class="panel-heading">
      {{ title }}
    </div>
    <div class="panel-body">
      <Row type="flex" justify="space-between" class="control">
        <div class="table-style">
          显示斑马纹 
          <i-switch v-model="showStripe" style="margin: 0 30px 0 10px"></i-switch>
          表格尺寸
          <Radio-group v-model="tableSize" type="button" style="margin-left: 10px">
            <Radio label="large">大</Radio>
            <Radio label="default">中</Radio>
            <Radio label="small">小</Radio>
          </Radio-group>
        </div>
        <div class="search-bar">
          <Input placeholder="请输入..." v-model="keyword" style="width: 300px"></Input>
          <Button type="ghost" @click="search"><i class="fa fa-search"></i> 搜索</Button>
        </div>
      </Row>
      <div class="edit" v-if="type === 'edit'">
          <Button @click="modalAdd = true" ><i class="fa fa-plus"></i> 新增</Button>
          <Button  :disabled="deleteDisabled" @click="modalDelete = true"><i class="fa fa-trash"></i> 删除</Button>
        </div>
      <Table :stripe="showStripe"   :size="tableSize" :columns="showColumns" :data="dataShow" @on-selection-change="selectChange"></Table>
      <Row type="flex" justify="space-between" class="footer">
        <div class="info-bar">
          每页显示<Input-number class="input-number" v-model="showNum" :max="totalNum" :min="1" @on-change=" updateDataShow ">{{ showNum }}</Input-number>条
        </div>
        <Page :total="totalNum" :current="currentPage" :page-size="showNum" show-total @on-change=" pageChange "></Page>
      </Row>
    </div>
    <Modal
        v-model="modalEdit"
        title="编辑"
        v-on:on-ok="editOk">
        <Form :label-width="50">
          <Form-item v-for="(value, key) in dataEdit" :label="convertKey(key)" :key="item.id">
            <Input v-model="dataEdit[key]" :placeholder="'请输入' + key"></Input>
          </Form-item>
        </Form>
    </Modal>
    <Modal
        v-model="modalAdd"
        title="新增"
        v-on:on-ok="addOk">
        <Form :label-width="50">
          <Form-item v-for="item in columns" :label="item.title" :key="item.id">
            <Input v-model="dataAdd[item.key]" :placeholder="'请输入' + item.title"></Input>
          </Form-item>
        </Form>
    </Modal>
    <Modal
        v-model="modalDelete"
        title="删除"
        v-on:on-ok="deleteOk">
        您确认要删除数据吗
    </Modal>
  </Row>
</template>

<script>
  export default {
    name: 'VmTable',
    props: {
      title: {
        type: String,
        default: '可编辑表格'
      },
      type: String,
      columns: Array,
      data: Array
    },
    data () {
      return {
        deleteDisabled: true,
        dataShow: [],
        showNum: 10,
        totalNum: 0,
        showStripe: false,
        tableSize: 'default',
        currentPage: 1,
        keyword: '',
        modalEdit: false,
        modalAdd: false,
        modalDelete: false,
        dataEdit: {},
        dataDelete: [],
        dataAdd: {},
        formData: []
      }
    },
    methods: {
      editOk: function () {
        this.$emit('edit-ok', this.dataEdit)
      },
      addOk: function () {
        this.$emit('add-ok', this.dataAdd)
      },
      deleteOk: function () {
        this.$emit('delete-ok', this.dataDelete)
      },
      pageChange: function (page) {
        this.currentPage = page
        this.updateDataShow()
      },
      updateDataShow: function () {
        let startPage = (this.currentPage - 1) * this.showNum
        let endPage = startPage + this.showNum
        this.dataShow = this.data.slice(startPage, endPage)
      },
      search: function () {
        let that = this
        let tempData = that.data
        that.dataShow = []
        tempData.forEach(function (elem) {
          for (let i in elem) {
            if (elem[i].toString().indexOf(that.keyword) > -1) {
              that.dataShow.push(elem)
              return
            }
          }
        })
      },
      selectChange: function (data) {
        this.dataDelete = data
      },
      remove: function (index) {
        this.dataShow.splice(index, 1)
      },
      renderOperate: function (h, params) {
        return h('div', [
          h('Button', {
            props: {
              type: 'info',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                for (let i in params.row) {
                  this.dataEdit[i] = params.row[i]
                }
                delete this.dataEdit._index
                this.modalEdit = true
              }
            }
          }, '编辑'),
          h('Button', {
            props: {
              type: 'error',
              size: 'small'
            },
            on: {
              click: () => {
                this.dataDelete.push(params.row)
                this.modalDelete = true
              }
            }
          }, '删除')
        ])
      },
      convertKey: function (value) {
        let returnValue = value
        this.columns.forEach(function (elem) {
          for (let i in elem) {
            if (i === 'key' && elem[i] === value) {
              returnValue = elem.title
            }
          }
        })
        return returnValue
      }
    },
    computed: {
      showColumns: function () {
        let showColumn = this.columns.slice()
        showColumn.forEach(function (elem) {
          elem.sortable = true
        })
        if (this.type === 'edit') {
          showColumn.unshift({
            type: 'selection',
            width: 60,
            align: 'center'
          })
          showColumn.push({
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: this.renderOperate
          })
        }
        return showColumn
      }
    },
    watch: {
      data: function () {
        this.totalNum = this.data.length
        this.dataShow = this.data.slice(0, this.showNum)
      },
      dataDelete: function () {
        if (this.dataDelete.length === 0) {
          this.deleteDisabled = true
        } else {
          this.deleteDisabled = false
        }
      }
    },
    mounted: function () {
      this.totalNum = this.data.length
      this.dataShow = this.data.slice(0, this.showNum)
    }
  }
</script>
