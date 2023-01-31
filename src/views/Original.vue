<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useRoute } from 'vue-router'
import xu from '@/assets/data/xu.json'
import original from '@/assets/data/original.json'

interface IXu {
  id: number;
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

const curXu: Ref<IXu | null> = ref(null)
const curOriginal: Ref<IOriginal | null> = ref(null)

const route = useRoute()

onMounted(() => {
  if(!route.query || !route.query.id){
    curXu.value = xu[0]
    return
  }
  if(Number(route.query.id) > 0){
    const value = original.find(i => i.id===Number(route.query.id))
    if(value){
      curOriginal.value = value
    }
  }else{
    const value = xu.find(i => i.id===Number(route.query.id))
    if(value){
      curXu.value = value
    }
  }
})

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
  <div class="flex h-full">
    <div class="w-60">
      <ul class="border mr-10 h-full overflow-auto">
        <li 
          v-for="item in xu" 
          :key="item.id" 
          class="py-2 px-6 cursor-pointer hover:bg-green-100"
          :class="{cur: item.id===(curXu && curXu.id)}"
          @click="handleClick(item, 1)"
        >{{ item.title }}</li>
        <li 
          v-for="item in original" 
          :key="item.id" 
          class="py-2 px-6 cursor-pointer hover:bg-green-100"
          :class="{cur: item.id===(curOriginal && curOriginal.id)}"
          @click="handleClick(item, 2)"
        >
          <span v-if="item.id===220">跋一</span>
          <span v-else-if="item.id===221">跋一</span>
          <span v-else-if="item.id===222">跋一</span>
          <span v-else>第{{ item.id }}则</span>
        </li>
      </ul>
    </div>
    <div class="flex-1" v-if="curXu">
      <p class="text-lg font-bold text-center mt-2 mb-4">幽梦影 {{ curXu.title }}</p>
      <p v-for="p in curXu.text" :key="p" class="indent-lg mb-4">{{ p }}</p>
    </div>
    <div class="flex-1" v-if="curOriginal">
      <p class="text-lg font-bold text-center mt-2 mb-4">幽梦影 第{{ curOriginal.id }}则</p>
      <p v-for="p in curOriginal.text" :key="p" class="indent-lg mb-4">{{ p }}</p>
      <div>
        <p class="mb-4 font-bold mt-8">【评论】</p>
        <p v-for="p in curOriginal.comments" :key="p.author" class="indent-lg mb-4">{{ p.author }}曰：{{ p.comment }}</p>
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
