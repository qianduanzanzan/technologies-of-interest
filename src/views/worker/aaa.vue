<script lang="ts" setup>
import {onMounted,ref} from 'vue'
const randerTime = ref(0)
onMounted(() => {
    randerTime.value = new Date().valueOf()
})
const { data,type } = defineProps({
    data:{
        type: Number,
        default: 0
    },
    type: {
        type: Number,
        default: 1
    }
})
</script>

<template>
    <div style="width: 300px ;height: 100px;border: 1px solid red">
        <p>{{data}}</p>
        <p>{{randerTime}}</p>
        <p>{{type}}</p>
    </div>
</template>