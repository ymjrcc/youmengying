<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useRoute } from 'vue-router'
import original from '@/assets/data/original.json'

interface IOriginal {
    id: number;
    title?: string;
    author?: string;
    text: string[];
    comments?: string[];
}

const curOriginal: Ref<IOriginal | null> = ref(null)

const route = useRoute()

onMounted(() => {
  if(!route.query || !route.query.id){
    curOriginal.value = original[0]
    return
  }
  const value = original.find(i => i.id===Number(route.query.id))
  curOriginal.value = value || original[0]
})

const handleClick = (item: IOriginal) => {
  curOriginal.value = item
}
</script>

<template>
  <div class="flex h-full">
    <div class="w-60">
      <ul class="border mr-10 h-full overflow-auto">
        <li 
          v-for="item in original" 
          :key="item.id" 
          class="py-6px px-6 cursor-pointer hover:bg-green-100"
          :class="{cur: item.id===(curOriginal && curOriginal.id)}"
          @click="handleClick(item)"
        >
          {{ item.title || `第 ${item.id} 则` }}
        </li>
      </ul>
    </div>
    <div class="flex-1" v-if="curOriginal">
      <p class="text-lg font-bold text-center mt-2 mb-4">
        幽梦影 {{ curOriginal.title || `第 ${curOriginal.id} 则` }}
      </p>
      <p v-if="curOriginal.author" class="text-center mb-4">{{ curOriginal.author }}</p>
      <p v-for="p in curOriginal.text" :key="p" class="indent-lg mb-4">{{ p }}</p>
      <div v-if="curOriginal.comments">
        <p class="mb-4 font-bold mt-8">【评论】</p>
        <p v-for="comment in curOriginal.comments" :key="comment" class="indent-lg mb-4">{{ comment }}</p>
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
