<script setup lang="ts">
import {NInputGroup, NInput, NButton} from 'naive-ui'
</script>

<template>
  <div>
    <h1 class="text-5xl text-center text-gray-500 font-bold mt-20 mb-15">《幽梦影》数字平台</h1>
    <div class="mx-auto w-100">
      <n-input-group>
        <n-input placeholder="请输入关键词" size="large"/>
        <n-button type="primary" size="large">
          搜索
        </n-button>
      </n-input-group>
    </div>
  </div>
</template>
