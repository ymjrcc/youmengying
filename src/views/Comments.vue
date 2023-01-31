<script setup lang="ts">
import {ref} from 'vue'
import { RouterLink } from 'vue-router'
import comments from '@/assets/data/comments.json'

interface IComment {
  name: string;
  hometown: string;
  brief: string;
  list: number[];
}

const curComment = ref(comments[0])

const handleClick = (item: IComment) => {
  curComment.value = item
}
</script>

<template>
  <div class="flex h-full">
    <div class="w-60">
      <ul class="border mr-10 h-full overflow-auto">
        <li 
          v-for="item in comments" 
          :key="item.name"
          class="py-2 px-6 cursor-pointer hover:bg-green-100"
          :class="{cur: item.name===(curComment && curComment.name)}"
          @click="handleClick(item)"
        >{{ item.name }}</li>
      </ul>
    </div>
    <div class="flex-1" v-if="curComment && curComment.name">
      <div class="text-3xl mb-4">{{ curComment.name }}</div>
      <div class="text-gray-500 mb-2">【籍贯/常住地】</div>
      <div class="indent-lg mb-4">{{ curComment.hometown }}</div>
      <div class="text-gray-500 mb-2">【简介】</div>
      <div class="indent-lg mb-4">{{ curComment.brief }}</div>
      <div class="text-gray-500 mb-2">【原文】</div>
      <div class="indent-lg pb-4">
        <div v-for="id in curComment.list" :key="id" class="mb-1">
          <RouterLink :to="`/original?id=${id}`" class="text-green-500 underline">
            <span v-if="id===-1">序一</span>
            <span v-else-if="id===-2">序二</span>
            <span v-else-if="id===-3">序三</span>
            <span v-else-if="id===220">跋一</span>
            <span v-else-if="id===221">跋二</span>
            <span v-else-if="id===222">跋三</span>
            <span v-else>第 {{ id }} 则</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cur{
  background-color: #a7f3d0;
  font-weight: bold;
}
</style>