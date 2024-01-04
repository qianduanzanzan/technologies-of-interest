<script lang="ts" setup>
import hook from '@/hooks/test.hooks'
const {num,addNum} = hook(2)
</script>

<template>
    <div>
        hooks2
    </div>
    <div>{{num}}</div>
    <el-button @click="addNum()">add</el-button>
</template>