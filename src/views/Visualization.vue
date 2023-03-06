<script setup lang="ts">
import { ref, watch } from 'vue'
import ChartWords from '@/components/chart-words.vue'
import ChartComments from '@/components/chart-comments.vue'
import useMap from './use-map'

const curTab = ref(1)

watch(curTab, (newVal, oldVal) => {
  if(newVal===3){
    useMap()
  }
})

</script>

<template>
  <div class="flex h-full">
    <div class="w-60">
      <ul class="border mr-10 h-full overflow-auto">
        <li class="py-2 px-6 cursor-pointer hover:bg-green-100" :class="{cur: curTab===1}" @click="curTab=1">
          原文词频统计
        </li>
        <li class="py-2 px-6 cursor-pointer hover:bg-green-100" :class="{cur: curTab===2}" @click="curTab=2">
          文友评论统计
        </li>
        <li class="py-2 px-6 cursor-pointer hover:bg-green-100" :class="{cur: curTab===3}" @click="curTab=3">
          交游图
        </li>
      </ul>
    </div>
    <div class="flex-1" v-if="curTab===1">
      <ChartWords />
    </div>
    <div class="flex-1" v-if="curTab===2">
      <ChartComments />
    </div>
    <div class="flex-1" v-if="curTab===3">
        <div id="map" class="w-full h-full"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cur{
  background-color: #a7f3d0;
  font-weight: bold;
}
</style>