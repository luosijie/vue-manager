<template>
  <div class="dashboard">
    <Row :gutter="16">
      <Col :lg="6" :md="12">
        <VmStateOverView color="#41b883" icon="fa fa-user" title="New Users" count="996"></VmStateOverView>
      </Col>
      <Col :lg="6" :md="12">
        <VmStateOverView color="#1d8ce0" icon="fa fa-eye" title="Page Views" count="109009"></VmStateOverView>
      </Col>
      <Col :lg="6" :md="12">
        <VmStateOverView color="#ffa000" icon="fa fa-pencil" title="Comments" count="1010"></VmStateOverView>
      </Col>
      <Col :lg="6" :md="12">
        <VmStateOverView color="#f60000" icon="fa fa-download" title="Downloads" count="9960"></VmStateOverView>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col :lg="6">
        <VmUserPreview :brief="dataUserPreview.brief" :property="dataUserPreview.property"></VmUserPreview>
      </Col>
      <Col :lg="18">
        <VmProgress title="Working Progress" :data="dataProgress"></VmProgress>
      </Col>  
    </Row>
    <Row :gutter="16">
      <Col :lg="16">
        <VmTimeline title="Timeline" :data="dataTimeline">
        </VmTimeline>
      </Col>
      <Col :lg="8">
        <VmTabs icon="fa fa-user" title="Briefs" content-height="200px">
          <VmTabsItem label="Social" name="01">
            <div class="demo-news">
              <h2>" Lorem ipsum dolor sit amet, consectetur adipiscing. "</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="Business" name="02">
            <div class="demo-news">
              <h2>" Phasellus massa urna, vehicula bibendum. "</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="Entertainment" name="03">
            <div class="demo-news">
              <h2>" Duis vitae dictum erat. In ut lorem turpis. "</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="Sport" name="04">
            <div class="demo-news">
              <h2>" Etiam sit amet urna feugiat, laoreet urna quis. "</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="Health" name="05">
            <div class="demo-news">
              <h2>" Fusce nec eleifend ligula. "</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="Education" name="06">
            <div class="demo-news">
              <h2>" Fusce commodo nunc justo, id mattis. "</h2>
            </div>
          </VmTabsItem>
        </VmTabs>
        <VmWeather class="vm-margin" :data="dataWeather">
        </VmWeather>
      </Col> 
    </Row>
  </div>
</template>

<script>
import VmStateOverView from '@/components/vm-state-overview.vue'
import VmUserPreview from '@/components/vm-user-preview.vue'
import VmProgress from '@/components/vm-progress.vue'
import VmTimeline from '@/components/vm-timeline.vue'
import VmTabs from '@/components/vm-tabs.vue'
import VmTabsItem from '@/components/vm-tabs-item.vue'
import VmWeather from '@/components/vm-weather.vue'
export default {
  name: 'Dashboard',
  components: {
    VmStateOverView,
    VmUserPreview,
    VmProgress,
    VmTimeline,
    VmTabs,
    VmTabsItem,
    VmWeather
  },
  data () {
    return {
      dataUserPreview: {
        brief: {
          photo: require('@/assets/img/photo.jpg'),
          name: 'Angla Cool',
          role: 'Administrator'
        },
        property: [
          {
            icon: 'fa fa-user',
            key: 'Sex',
            value: 'M'
          },
          {
            icon: 'fa fa-heart',
            key: 'Activity',
            value: '9.8'
          },
          {
            icon: 'fa fa-calendar',
            key: 'Register',
            value: '2017-8-9 8:00'
          },
          {
            icon: 'fa fa-calendar',
            key: 'Latest Login',
            value: '2017-9-9 9:10'
          }
        ]
      },
      dataProgress: [
        {
          name: 'Jesse Luo',
          tags: ['cool', 'funy'],
          value: 90
        },
        {
          name: 'Angla Cool',
          tags: ['nice', 'sexy', 'literature'],
          value: 30
        },
        {
          name: 'lele Wang',
          tags: ['mould', 'shy'],
          value: 80
        },
        {
          name: 'Jesse Ca',
          tags: ['funny', 'hardworking', 'learnd'],
          value: 20
        },
        {
          name: 'Jesse Lee',
          tags: ['nice', 'mould'],
          value: 100
        }
      ],
      dataTimeline: [
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        }
      ],
      dataWeather: {
        location: 'Beijing',
        weather: 'cloudy',
        temprature: '30°',
        humidity: '56%',
        percip: '1.50in',
        winds: '10mph'
      }
    }
  }
}
</script>

<style lang="less">
  
</style>
