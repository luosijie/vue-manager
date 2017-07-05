<template>
  <Row class="vm-weather vm-panel">
   <Row class="top" type="flex" justify="space-around" align="middle">
     <div>
       <i class="fa fa-cloud"></i>
       <p class="location">{{ data.location }}</p>
     </div>
     <div class="temprature">
       {{ data.temprature }}
     </div>
   </Row>
   <Row class="bottom" type="flex" justify="space-around">
     <Col span="8">
       <span>湿度</span>
       <p>{{ data.humidity }}</p>
     </Col>
     <Col span="8">
       <span>雨量</span>
       <p>{{ data.percip }}</p>
     </Col>
     <Col span="8">
       <span>风力</span>
       <p>{{ data.winds }}</p>
     </Col>
   </Row>
  </Row>
</template>

<script>
  export default {
    name: 'VmWeather',
    props: ['data']
  }
</script>
