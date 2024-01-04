<script setup lang="ts">
import debounce from '@/utils/debounce'
// import { test, test11, test22 } from "@/api/test";
// test({ a: "123", b: 678 }).then((res: any) => {
//   console.log(res);
// });

// test11().then((res: any) => {
//   console.log(res);
// });
// test22().then((res: any) => {
//   console.log(res);
// });
const aaa = debounce((val:any) => {
  console.log(val)
})
</script>

<template>
  <div>123456</div>
  <el-button @click="aaa('xxx')">11111</el-button>
</template>