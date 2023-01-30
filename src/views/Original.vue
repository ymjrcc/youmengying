<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import xu from '@/assets/data/xu.json'
import original from '@/assets/data/original.json'

interface IXu {
  id: string;
  title: string;
  author: string;
  text: string[];
}

interface IOriginal {
    id: number;
    text: string[];
    comments: {
        author: string;
        comment: string;
    }[];
}

const curXu: Ref<IXu | null> = ref(xu[0])
const curOriginal: Ref<IOriginal | null> = ref(null)

const handleClick = (item: IXu | IOriginal, type: number) => {
  if(type===1){
    curOriginal.value = null
    curXu.value = item as IXu
  }else if(type===2){
    curXu.value = null
    curOriginal.value = item as IOriginal
  }
}
</script>

<template>
  <div class="flex">
    <div class="w-50">
      <ul class="border mr-10">
        <li 
          v-for="item in xu" 
          :key="item.id" 
          class="py-2 px-4 cursor-pointer hover:bg-green-100"
          :class="{cur: item.id===(curXu && curXu.id)}"
          @click="handleClick(item, 1)"
        >{{ item.title }}</li>
        <li 
          v-for="item in original" 
          :key="item.id" 
          class="py-2 px-4 cursor-pointer hover:bg-green-100"
          :class="{cur: item.id===(curOriginal && curOriginal.id)}"
          @click="handleClick(item, 2)"
        >第{{ item.id }}则</li>
      </ul>
    </div>
    <div class="flex-1" v-if="curXu">
      <p v-for="p in curXu.text" :key="p" class="indent-lg mb-4">{{ p }}</p>
    </div>
    <div class="flex-1" v-if="curOriginal">
      <p v-for="p in curOriginal.text" :key="p" class="indent-lg mb-4">{{ p }}</p>
      <div>
        <p class="mb-4">评论</p>
        <p v-for="p in curOriginal.comments" :key="p.author" class="indent-lg mb-4">{{ p.author }}曰：{{ p.comment }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cur{
  background-color: #a7f3d0;
}
</style>
