<script lang="ts" setup>
import hook from '@/hooks/test.hooks'
import { useEventListener } from "@vueuse/core";
import { onMounted,onUpdated } from 'vue';

onMounted(() => {
    console.log(3333333)
})
const {num,addNum} = hook(1)

onUpdated(() => {
    console.log('updated')
    hook(1)
})

const test = () => {
    localStorage.setItem('ddd','sdsdsd')
}

const test1 = () => {
    console.log(localStorage.getItem('ddd'))
}
</script>

<template>
    <div>
        hooks1
    </div>
    <div>{{num}}</div>
    <el-button @click="addNum()">add</el-button>
    <el-button @click="test()">ccc</el-button>
    <el-button @click="test1()">ddd</el-button>
</template>