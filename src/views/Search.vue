<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import {NInputGroup, NInput, NButton, NEmpty} from 'naive-ui'
import original from '@/assets/data/original.json'
import commentsOriginal from '@/assets/data/comments.json'

const route = useRoute()
const router = useRouter()

const inputValue = ref<any>(route.query.keyword || '')
const searchWord = ref<any>('')

const texts = ref<any>([])
const comments = ref<any>([])
const friends = ref<any>([])

const handleSearch = () => {
  if(!inputValue.value) return

  searchWord.value = inputValue.value
  
  router.replace({
    query: {
      keyword: inputValue.value
    }
  })

  texts.value = original.filter(i => i.text.join('').includes(searchWord.value))
  comments.value = original.filter(i => i.comments && i.comments.join('').includes(searchWord.value))
  friends.value = commentsOriginal.filter(i => i.name.includes(searchWord.value))
}

onMounted(() => {
  handleSearch()
})
</script>

<template>
  <div class="root">
    <div class="w-100">
      <n-input-group>
        <n-input v-model:value="inputValue" clearable placeholder="请输入关键词" size="large" @change="handleSearch"/>
        <n-button type="primary" size="large" @click="handleSearch">
          搜索
        </n-button>
      </n-input-group>
    </div>
    <div class="pt-5 mt-5 border-t-1">
      <n-empty v-if="!(texts.length || comments.length || friends.length)" description="没有匹配的结果" />
      <div v-if="texts.length">
        <div class="text-gray-600 mb-2">【原文】({{ texts.length }})</div>
        <div v-for="item in texts" :key="item.id" class="mb-5 indent">
          <RouterLink :to="`/original?id=${item.id}`" class="text-green-500 underline mb-2 block">
            {{  item.title || `第 ${item.id} 则` }}
          </RouterLink>
          <div class="truncate text-gray-400">{{ item.text.find((i:any) => i.includes(searchWord)) }}</div>
        </div>
      </div>
      <div v-if="comments.length">
        <div class="text-gray-600 mb-2">【评论】({{ comments.length }})</div>
        <div v-for="item in comments" :key="item.id" class="mb-5 indent">
          <RouterLink :to="`/original?id=${item.id}`" class="text-green-500 underline mb-2 block">
            {{  item.title || `第 ${item.id} 则` }}
          </RouterLink>
          <div class="truncate text-gray-400">{{ item.comments.find((i:any) => i.includes(searchWord)) }}</div>
        </div>
      </div>
      <div v-if="friends.length">
        <div class="text-gray-600 mb-2">【文友】({{ friends.length }})</div>
        <div v-for="item in friends" :key="item.name" class="mb-5 indent">
          <RouterLink :to="`/comments?name=${item.name}`" class="text-green-500 underline mb-2 block">
            {{  item.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped></style>