<script lang="ts" setup>
import { ref,reactive } from 'vue';
import draggable from 'vuedraggable'
const list1 = reactive([
    {
        a:1
    },
    {
        a:2
    },
    {
        a:3
    },
    {
        a:4
    },
    {
        a:5
    },
    {
        a:6
    }
])

const list2 = reactive([
    {
        a:7
    },
    {
        a:8
    },
    {
        a:9
    },
    {
        a:10
    },
    {
        a:11
    },
    {
        a:12
    }
])
function aaa(){
    console.log(...arguments)
}
let bbb = () => {}
eval(`
    bbb = () => {
        console.log(3333333)
    }
`)

</script>

<template>
    <div style="display: flex;width: 100%;height: 100%">
        <div style="flex:1">
            <draggable 
                :list="list1" 
                :group="{name: 'people',pull: true,put:true}" 
                :sort="false"
                style="height: 100%"
                @change="aaa"
                item-key="a">
                <template #item="{element}">
                    <div style="height: 25px;border: 1px solid #000000;margin:10px">{{element.a}}</div>
                </template>
            </draggable>
        </div>
        <div style="flex:1">
            {{list1}}

            <el-button @click="bbb">aaa</el-button>
        </div>
        <div style="flex:1">
            <draggable 
                :list="list2" 
                style="height: 100%"
                :group="{name: 'people',pull: true,put:true}" 
                :sort="true"
                @change="aaa"
                item-key="a">
                <template #item="{element}">
                    <div style="height: 25px;border: 1px solid #000000;margin:10px">{{element.a}}</div>
                </template>
            </draggable>
        </div>
        <div style="flex:1">
            {{list2}}
        </div>
    </div>
</template>