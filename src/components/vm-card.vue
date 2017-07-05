<template>
  <div :class="[type === 'horizantal' ? 'vm-card-horizantal' : 'vm-card-vertical' , 'vm-panel']">
    <div class="card-img">
      <img :src="img" alt="">
    </div>
    <div class="card-desc panel-body">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <a :href="to">
        查看详情
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'VmCard',
    props: {
      type: {
        type: String,
        default: 'vertical'
      },
      title: {
        type: String,
        default: '这是一个标题'
      },
      img: {
        type: String,
        default: require('@/assets/img/img-1.jpg')
      },
      desc: {
        type: String,
        default: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎'
      },
      to: {
        type: String,
        default: '#'
      }
    }
  }
</script>
