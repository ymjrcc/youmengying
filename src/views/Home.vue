<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {NInputGroup, NInput, NButton} from 'naive-ui'

const router = useRouter()

const inputValue = ref('')

const handleSearch = () => {
  if(!inputValue.value) return
  router.push({path: '/search', query: {keyword: inputValue.value}})
}
</script>

<template>
  <div>
    <h1 class="text-5xl text-center text-gray-500 font-bold mt-20 mb-15">《幽梦影》数字平台</h1>
    <div class="mx-auto w-100">
      <n-input-group>
        <n-input v-model:value="inputValue" clearable placeholder="请输入关键词" size="large" @change="handleSearch"/>
        <n-button type="primary" size="large" @click="handleSearch">
          搜索
        </n-button>
      </n-input-group>
    </div>
  </div>
</template>
