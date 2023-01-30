<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'
import jsondata from '@/assets/data/test.json'

onMounted(() => {
  console.log(jsondata)
  const chart1 = echarts.init(document.getElementById('chart1') as HTMLElement)
  
  chart1.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
})

</script>

<template>
  <div>
    可视化
    <div class="h-100 w-100 bg-gray-200" id="chart1"></div>
  </div>
</template>

<style lang="less">

</style>