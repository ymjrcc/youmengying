<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'
import comments from '@/assets/data/comments.json'
import original from '@/assets/data/original.json'

const commentsList = comments.map(i => ({
  name: i.name,
  value: i.list.length
}))

const originalList = original.filter(i => i.comments).map(i => ({
  name: `第${i.id}则`,
  value: i.comments && i.comments.length
})).reverse()

onMounted(() => {
  const chart1 = echarts.init(document.getElementById('chart-comments-1') as HTMLElement)
  chart1.setOption({
    title: {
      text: '文友评论数统计'
    },
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 50,
      containLabel: true
    },
    tooltip: {},
    legend: {
      data:['评论数']
    },
    xAxis: {
      data: commentsList.map(i => i.name),
      axisLabel: {
        rotate: 90
      }
    },
    yAxis: {},
    series: [{
      name: '评论数',
      type: 'bar',
      label: {
        show: true,
        position: 'top',
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#6ee7b7' // 0% 处的颜色
          }, {
            offset: 1, color: '#10b981' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      },
      data: commentsList.map(i => i.value)
    }]
  })

  const chart2 = echarts.init(document.getElementById('chart-comments-2') as HTMLElement)
  chart2.setOption({
    title: {
      text: '原文评论数统计'
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
      data:['评论数']
    },
    yAxis: {
      data: originalList.map(i => i.name),
    },
    xAxis: {},
    series: [{
      name: '评论数',
      type: 'bar',
      label: {
        show: true,
        position: 'right',
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#fbbf24' // 0% 处的颜色
          }, {
            offset: 1, color: '#d97706' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      },
      data: originalList.map(i => i.value)
    }]
  })
})

</script>

<template>
  <div class="pb-20">
    <div id="chart-comments-1" class="h-100"></div>
    <div id="chart-comments-2" class="h-600 mt-20"></div>
  </div>
</template>