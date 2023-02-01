<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'
import words from '@/assets/data/words.json'

const wordsList = words.map(i => ({
  name: i.word,
  value: i.count,
  percent: i.percent
})).reverse()

onMounted(() => {

  const chart = echarts.init(document.getElementById('chart-words') as HTMLElement)
  chart.setOption({
    title: {
      text: '词频统计'
    },
    grid: {
      left: 10,
      right: 50,
      bottom: 0,
      top: 50,
      containLabel: true
    },
    tooltip: {},
    legend: {
      data:['出现次数(百分比)']
    },
    yAxis: {
      data: wordsList.map(i => i.name),
    },
    xAxis: {},
    series: [{
      name: '出现次数(百分比)',
      type: 'bar',
      label: {
        show: true,
        position: 'right',
        formatter: (params: any) => `${params.value} (${params.data.percent}%)`
      },
      data: wordsList
    }]
  })
})

</script>

<template>
  <div class="pb-20">
    <div id="chart-words" class="h-300"></div>
  </div>
</template>