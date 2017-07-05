<template>
  <div class="panel">
    <Row>
      <VmStateGroup :data="dataStateGroup">
      </VmStateGroup>
    </Row>
    <Row :gutter="16" class="vm-margin">
      <Col span="12">
        <VmCircle class="demo-circle" title="油量消耗 (单位：L)" usedName="已消耗" :usedValue="70" restName="还剩余" :restValue="20">
        </VmCircle>
      </Col>
      <Col span="12">
        <VmCircle class="demo-circle" title="油量消耗 (单位：L)" usedName="已消耗" :usedValue="70" restName="还剩余" :restValue="0">
        </VmCircle>
      </Col>
    </Row>
    <Row :gutter="16" class="vm-margin">
      <Col span="12">
        <VmMessageCarousel :data="dataMessageCarouse1">
        </VmMessageCarousel>
      </Col>
      <Col span="12">
        <VmMessageCarousel :data="dataMessageCarouse1" :autoplay="false">
        </VmMessageCarousel>
      </Col>
    </Row>
    <Row :gutter="16" class="vm-margin">
      <Col span="6" v-for="item in dataCards1" :key="item.id">
        <VmCard :title="item.title" :img="item.img" :desc="item.desc" :to="item.to"></VmCard>  
      </Col>
    </Row>
    <Row :gutter="16" class="vm-margin">
      <Col span="12" v-for="item in dataCards2" :key="item.id">
        <VmCard type="horizantal" :title="item.title" :img="item.img" :desc="item.desc" :to="item.to"></VmCard>  
      </Col>
    </Row>
  </div>
</template>

<script>
  import VmCard from '@/components/vm-card'
  import VmStateGroup from '@/components/vm-state-group'
  import VmMessageCarousel from '@/components/vm-message-carousel'
  import VmCircle from '@/components/vm-circle'
  export default {
    name: 'Widget',
    components: {
      VmCard,
      VmStateGroup,
      VmMessageCarousel,
      VmCircle
    },
    data: function () {
      return {
        dataCards1: [
          {
            title: '这是个标题',
            img: require('@/assets/img/img-1.jpg'),
            desc: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎',
            to: '#'
          },
          {
            title: '这是个标题',
            img: require('@/assets/img/img-2.jpg'),
            desc: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎',
            to: '#'
          },
          {
            title: '这是个标题',
            img: require('@/assets/img/img-3.jpg'),
            desc: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎',
            to: '#'
          },
          {
            title: '这是个标题',
            img: require('@/assets/img/img-4.jpg'),
            desc: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎',
            to: '#'
          }
        ],
        dataCards2: [
          {
            title: '这是个标题',
            img: require('@/assets/img/img-l-1.jpg'),
            desc: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎',
            to: '#'
          },
          {
            title: '这是个标题',
            img: require('@/assets/img/img-l-2.jpg'),
            desc: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎',
            to: '#'
          }
        ],
        dataStateGroup: [
          {
            title: '浏览量',
            icon: 'fa fa-eye',
            value: '666',
            color: '#41b883'
          },
          {
            title: '新用户',
            icon: 'fa fa-user',
            value: '666',
            color: '#428bca'
          },
          {
            title: '评论数',
            icon: 'fa fa-pencil',
            value: '666',
            color: '#f60000'
          },
          {
            title: '下载量',
            icon: 'fa fa-download',
            value: '666',
            color: '#ffa000'
          },
          {
            title: '图片',
            icon: 'fa fa-photo',
            value: '666',
            color: '#656565'
          }
        ],
        dataMessageCarouse1: [
          {
            title: 'Hello Everyone',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
            photo: require('@/assets/img/avatar1.jpg'),
            name: 'Millian Li'
          },
          {
            title: 'Thank you very much',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
            photo: require('@/assets/img/avatar2.jpg'),
            name: 'Micle jay'
          }
        ]
      }
    }
  }
</script>
