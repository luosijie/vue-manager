<template>
  <Row class="vm-user-preview vm-panel">
    <div class="panel-heading">
      <img :src="brief.photo" height="90" alt="photo">
      <span class="title">
        <span class="name">{{ brief.name }}</span>
        <p class="role">{{ brief.role }}</p>
      </span>
    </div>
    <ul class="content">
      <li v-for="item in property" :key="item.id">
        <span>
          <i :class="item.icon"></i>
        </span>
        <span>
          {{ item.key }}
        </span>
        <span>
          {{ item.value }}
        </span>
      </li>
    </ul>
  </Row>
</template>
<script>
  export default {
    name: 'VmUserPreview',
    props: {
      brief: {
        type: Object,
        default: function () {
          return {
            photo: require('@/assets/img/photo.jpg'),
            name: 'Angla Cool',
            role: '普通用户'
          }
        }
      },
      property: {
        type: Array,
        default: function () {
          return [
            {
              icon: 'fa fa-user',
              key: '性别',
              value: '女'
            }
          ]
        }
      }
    }
  }
</script>
