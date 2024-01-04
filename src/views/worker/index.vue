<template>
    <div>
        123456
        <el-button @click="test">测试</el-button>
        <el-button @click="test1">测试1</el-button>
        <el-button @click="test2">测试2</el-button>
        <div ref="xxx"></div>
        <el-button @click="test3">测试用web worker和不用两种情况的渲染时间</el-button>

        <div class="flex">
            <div>
            <aaa v-for="(item,index) in arr1" :key="index" :data="item" :type="1"/>
        </div>
        <div>
            <aaa v-for="(item,index) in arr2" :key="index" :data="item" :type="2"/>
        </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Worker from "./webWorker/test.worker.ts?worker"
import RenderWorker from "./webWorker/render.worker.ts?worker"
import aaa from './aaa.vue'
const renderWorker = new RenderWorker()
renderWorker.onmessage = function (e) {
    arr2.push(e.data.sum)
    console.log(new Date().valueOf(),'end')
};
const myWorker = new Worker()
myWorker.onmessage = function (e) {
    // console.log('total', e.data);
    // console.log(e.data)
    arr2.push(e.data.sum)
};

// const xxx = 123
const arr1:number[] = reactive([])
const arr2:number[] = reactive([])

const test2 = () => {
    console.log(myWorker)
    myWorker.postMessage('xxx');
}

const test = () => {
    let total = 1;
    for (let i = 0; i < 5000000000; i++) {
        total += i;
    }
    console.log('total', total);
}

const test1 = () => {
    myWorker.postMessage('total');
    // let total = 1;
    // for (let i = 0; i < 500; i++) {
    //     total += i;
    //     console.log(total)
    // }
}

const getRandomNum = () => {
    return Math.ceil(Math.random() * 1000000 + 10000000)
}

const test3 = () => {
    console.log(new Date().valueOf(),'start')
    for (let index = 0; index < 1; index++) {
        const randomNum = getRandomNum()
        workerRender(randomNum,index)
        simpleRender(randomNum)
    }
    // console.log(new Date().valueOf(),'end')
}

const simpleRender = (num:number) => {
    console.log(new Date().valueOf(),'a')
    let sum = 0
    for (let index = 1; index <= num; index++) {
        sum += index
        // console.log(sum,'xxxxxxx')
    }
    console.log(new Date().valueOf(),'a')
    arr1.push(sum)
}

const workerRender = (num:number,index:number) => {
    console.log()
    renderWorker.postMessage({val: num,index:index})
}
</script>