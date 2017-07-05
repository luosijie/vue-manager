<template>
  <Dropdown :placement="placement" class="vm-msg-push">
      <Badge :count="data.length" class="vm-badge">
          <i class="fa fa-bell"></i>
      </Badge>
      <Dropdown-menu slot="list">
          <Dropdown-item>您有 {{ data.length }} 条未读消息</Dropdown-item>
          <Dropdown-item divided v-for="item in data" :key="item.id">
            <img :src="item.image" height="40" alt="">
            <div class="subject">
              <span class="title">
                <span class="from">{{ item.from }}</span>
                <span class="time">{{ item.time }}</span>
              </span>
              <p class="message">{{ item.message }}</p>
            </div>
          </Dropdown-item>
          <Dropdown-item divided>查看更多消息</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
</template>

<script>
  export default {
    name: 'VmMsgPush',
    props: {
      placement: {
        type: String,
        default: 'bottom-start'
      },
      data: Array
    }
  }
</script>
