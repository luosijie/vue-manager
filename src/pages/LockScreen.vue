<template>
  <div class="lock-screen">
    <VmLockScreen>
    </VmLockScreen>
  </div>
</template>
<script>
  import VmLockScreen from '@/components/vm-lock-screen'
  export default {
    name: 'LockScreen',
    components: {
      VmLockScreen
    }
  }
</script>
