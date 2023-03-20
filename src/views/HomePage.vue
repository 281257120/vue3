<template>
  <div>
    homepage
    <HelloWorld>
    </HelloWorld>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { accountLogin } from '@/api/home'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
let para = { "login_account": "user", "password": "111111" }
accountLogin({ para: JSON.stringify(para) }).then(res => {
  console.log(res)
})
</script>
