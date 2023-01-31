<script setup lang="ts">
import {ref} from 'vue'
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
      <div class="text-3xl mb-4">
        {{ curComment.name }}
      </div>
      <div>
        {{ curComment.hometown }}
      </div>
      <div>
        {{ curComment.brief }}
      </div>
      <div>
        {{ curComment.list }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cur{
  background-color: #a7f3d0;
}
</style>