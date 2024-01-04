<template>
    <div>
        装饰器
    </div>
</template>

<script lang="ts" setup>
import {log} from './ts/test'

log()
function getData() {
    console.log('获取数据')
}

getData()
</script>
