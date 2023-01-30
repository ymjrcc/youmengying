<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'

const route = useRoute()
onMounted(() => {
  console.log(route.name)
})

watch(route, (newVal, oldVal) => {
  console.log(newVal.name)
})

</script>

<template>
  <div class="h-16 from-green-500 to-green-600 bg-gradient-to-r flex items-center justify-between text-white px-5 fixed top-0 left-0 right-0 z-10 shadow-lg shadow-gray-300">
    <div class="text-2xl font-bold">《幽梦影》数字平台</div>
    <ul class="text-xl flex h-full">
      <li class="mx-4 cursor-pointer h-full flex items-center border-b-transparent border-b-4" :class="{cur: route.name==='home'}">
        <RouterLink to="/">首页</RouterLink>
      </li>
      <li class="mx-4 cursor-pointer h-full flex items-center border-b-transparent border-b-4" :class="{cur: route.name==='author'}">
        <RouterLink to="/author">作者张潮</RouterLink>
      </li>
      <li class="mx-4 cursor-pointer h-full flex items-center border-b-transparent border-b-4" :class="{cur: route.name==='original'}">
        <RouterLink to="/original">作品原文</RouterLink>
      </li>
      <li class="mx-4 cursor-pointer h-full flex items-center border-b-transparent border-b-4" :class="{cur: route.name==='comments'}">
        <RouterLink to="/comments">文友评论</RouterLink>
      </li>
      <li class="mx-4 cursor-pointer h-full flex items-center border-b-transparent border-b-4" :class="{cur: route.name==='visualization'}">
        <RouterLink to="/visualization">数据可视化</RouterLink>
      </li>
    </ul>
  </div>
  <div class="min-h-screen bg-gray-100">
    <div class="fixed top-20 bottom-5 p-5 w-1280px bg-white left-1/2 overflow-auto" style="transform: translateX(-50%)">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="less">
.cur{
  border-bottom: 4px solid #fff;
  a{
    font-weight: bold;
  }
}
</style>
