<template>
  <div class="widget">
    <Row class="vm-margin">
      <VmStateGroup :data="dataStateGroup">
      </VmStateGroup>
    </Row>
    <Row :gutter="16">
      <Col :lg="12">
        <VmCircle class="demo-circle" title="Oil capacity (L)" usedName="Consumed" :usedValue="70" restName="Rest" :restValue="20">
        </VmCircle>
      </Col>
      <Col :lg="12">
        <VmCircle class="demo-circle" title="Oil capacity (L)" usedName="Consumed" :usedValue="70" restName="Rest" :restValue="0">
        </VmCircle>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col :lg="12">
        <VmMessageCarousel :data="dataMessageCarouse1">
        </VmMessageCarousel>
      </Col>
      <Col :lg="12">
        <VmMessageCarousel :data="dataMessageCarouse1" :autoplay="false">
        </VmMessageCarousel>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col :lg="6" :md="12" v-for="item in dataCards1" :key="item.id">
        <VmCard :title="item.title" :img="item.img" :desc="item.desc" :detailUrl="item.detailUrl"></VmCard>  
      </Col>
    </Row>
    <Row :gutter="16">
      <Col :lg="12" v-for="item in dataCards2" :key="item.id">
        <VmCard type="horizantal" :title="item.title" :img="item.img" :desc="item.desc" :detailUrl="item.detailUrl"></VmCard>  
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
            id: '1234567981',
            title: 'Title',
            img: require('@/assets/img/img-1.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          },
          {
            id: '1234567982',
            title: 'Title',
            img: require('@/assets/img/img-2.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          },
          {
            id: '1234567983',
            title: 'Title',
            img: require('@/assets/img/img-3.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          },
          {
            id: '1234567984',
            title: 'Title',
            img: require('@/assets/img/img-4.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          }
        ],
        dataCards2: [
          {
            id: '6541231',
            title: 'Title',
            img: require('@/assets/img/img-l-1.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          },
          {
            id: '6541232',
            title: 'Title',
            img: require('@/assets/img/img-l-2.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          }
        ],
        dataStateGroup: [
          {
            title: 'Page Views',
            icon: 'fa fa-eye',
            value: '666',
            color: '#41b883'
          },
          {
            title: 'New Users',
            icon: 'fa fa-user',
            value: '666',
            color: '#428bca'
          },
          {
            title: 'Comments',
            icon: 'fa fa-pencil',
            value: '666',
            color: '#f60000'
          },
          {
            title: 'Downloads',
            icon: 'fa fa-download',
            value: '666',
            color: '#ffa000'
          },
          {
            title: 'Images',
            icon: 'fa fa-photo',
            value: '666',
            color: '#656565'
          }
        ],
        dataMessageCarouse1: [
          {
            title: 'Hello Everyone',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
            photo: require('@/assets/img/photo.jpg'),
            name: 'Millian Li'
          },
          {
            title: 'Thank you very much',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
            photo: require('@/assets/img/photo.jpg'),
            name: 'Micle jay'
          }
        ]
      }
    }
  }
</script>
