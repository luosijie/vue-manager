<template>
  <div class="dashboard">
    <Row :gutter="16">
      <Col span="6">
        <VmStateOverView color="#41b883" icon="fa fa-user" title="新用户" count="996"></VmStateOverView>
      </Col>
      <Col span="6">
        <VmStateOverView color="#1d8ce0" icon="fa fa-eye" title="浏览量" count="109009"></VmStateOverView>
      </Col>
      <Col span="6">
        <VmStateOverView color="#ffa000" icon="fa fa-pencil" title="评论数" count="1010"></VmStateOverView>
      </Col>
      <Col span="6">
        <VmStateOverView color="#f60000" icon="fa fa-download" title="下载量" count="9960"></VmStateOverView>
      </Col>
    </Row>
    <Row :gutter="16" class="vm-margin">
      <Col span="6">
        <VmUserPreview :brief="dataUserPreview.brief" :property="dataUserPreview.property"></VmUserPreview>
      </Col>
      <Col span="18">
        <VmProgress title="工作进度" :data="dataProgress"></VmProgress>
      </Col>  
    </Row>
    <Row :gutter="16" class="vm-margin">
      <Col span="16">
        <VmTimeline :data="dataTimeline">
        </VmTimeline>
      </Col>
      <Col span="8">
        <VmTabs icon="fa fa-user" title="资讯简报" content-height="200px">
          <VmTabsItem label="社会" name="01">
            <div class="demo-news">
              <h2>“ 人生没有梦想，和咸鱼有什么区别 ”</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="经济" name="02">
            <div class="demo-news">
              <h2>“ 经济基础决定上层建筑 ”</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="娱乐" name="03">
            <div class="demo-news">
              <h2>“ 娱乐至死 ”</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="体育" name="04">
            <div class="demo-news">
              <h2>“ 身体是革命的本钱 ”</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="财经" name="05">
            <div class="demo-news">
              <h2>“ 没钱是万万不能的 ”</h2>
            </div>
          </VmTabsItem>
          <VmTabsItem label="教育" name="06">
            <div class="demo-news">
              <h2>“ 十年育树，百年育人 ”</h2>
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
          photo: require('@/assets/img/avatar1.jpg'),
          name: 'Angla Cool',
          role: '普通用户'
        },
        property: [
          {
            icon: 'fa fa-user',
            key: '性别',
            value: '女'
          },
          {
            icon: 'fa fa-heart',
            key: '活跃度',
            value: '9.8'
          },
          {
            icon: 'fa fa-calendar',
            key: '注册时间',
            value: '2017-8-9 8:00'
          },
          {
            icon: 'fa fa-calendar',
            key: '最近登录时间',
            value: '2017-9-9 9:10'
          }
        ]
      },
      dataProgress: [
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
      ],
      dataWeather: {
        location: '北京',
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
