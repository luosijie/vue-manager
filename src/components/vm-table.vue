<template>
  <Row class="vm-table vm-panel">
    <div class="panel-heading">
      {{ title }}
    </div>
    <div class="panel-body">
      <Row type="flex" justify="space-between" class="control">
        <div class="table-style">
          <h3>Stripe</h3>
          <i-switch v-model="showStripe" style="margin: 0 30px 0 10px"></i-switch>
          <h3>Size</h3>
          <Radio-group v-model="tableSize" type="button" style="margin-left: 10px">
            <Radio label="large">Large</Radio>
            <Radio label="default">Default</Radio>
            <Radio label="small">Small</Radio>
          </Radio-group>
        </div>
        <div class="search-bar">
          <Input placeholder="Please enter ..." v-model="keyword" style="width: 300px"></Input>
          <Button type="ghost" @click="search"><i class="fa fa-search"></i></Button>
        </div>
      </Row>
      <div class="edit" v-if="type === 'edit'">
          <Button @click="modalAdd = true" ><i class="fa fa-plus"></i> Add</Button>
          <Button  :disabled="deleteDisabled" @click="modalDelete = true"><i class="fa fa-trash"></i> Delete</Button>
      </div>
      <Table :stripe="showStripe" :size="tableSize" :columns="showColumns" :data="dataShow" @on-selection-change="selectChange"></Table>
      <Row type="flex" justify="space-between" class="footer">
        <div class="info-bar">
          Show<Input-number class="input-number" v-model="showNum" :max="data.length" :min="1" @on-change=" updateDataShow ">{{ showNum }}</Input-number>/ Page
        </div>
        <div class="page">
          <span class="total">Total {{ data.length }}</span>
          <Page :total="data.length" :current="currentPage" :page-size="showNum" @on-change="pageChange"></Page>
        </div>
      </Row>
    </div>
    <Modal
        v-model="modalEdit"
        title="Edit"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="editOk">
        <Form :label-width="50">
          <Form-item v-for="(value, key) in dataEdit" :label="convertKey(key)" :key="dataEdit.id">
            <Input v-model="dataEdit[key]" :placeholder="'Please enter' + key"></Input>
          </Form-item>
        </Form>
    </Modal>
    <Modal
        v-model="modalAdd"
        title="Add"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="addOk">
        <Form :label-width="50">
          <Form-item v-for="item in columns" :label="item.title" :key="item.id">
            <Input v-model="dataAdd[item.key]" :placeholder="'Please enter' + item.title"></Input>
          </Form-item>
        </Form>
    </Modal>
    <Modal
        v-model="modalDelete"
        title="Delete"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="deleteOk">
        Are you sure to delete this data?
    </Modal>
  </Row>
</template>

<script>
  export default {
    name: 'VmTable',
    props: {
      title: {
        type: String,
        default: 'Basic Table'
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
                  if (i !== '_index' && i !== '_rowKey') {
                    this.dataEdit[i] = params.row[i]
                  }
                }
                this.modalEdit = true
              }
            }
          }, 'Edit'),
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
          }, 'Delete')
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
      this.dataShow = this.data.slice(0, this.showNum)
    }
  }
</script>
