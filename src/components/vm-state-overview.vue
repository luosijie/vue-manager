<template>
  <Row class="vm-state-overview" type="flex">
    <Col span="10" class="symbol" :style="{ backgroundColor: color }">
      <i :class="icon"></i>
    </Col>
    <Col span="14" class="value">
      <h1 class="count">{{ count }}</h1>
      <p>{{ title }}</p>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'StateOverView',
  props: ['color', 'icon', 'title', 'count']
}
</script>
