<script lang="ts" setup>
import { reactive } from 'vue';
import { login as loginApi } from '@/api/mock/login'
import { useRouter, useRoute } from 'vue-router';
import { LoginFormInterface } from './interface'
const router = useRouter(), route = useRoute();
const jump2admin = () => {
    router.push({ name: 'admin' })
}

const loginForm:LoginFormInterface = reactive({
    account: 'admin',
    password: '123456'
})

const login = () => {
    loginApi(loginForm).then(res => {
        console.log(res)
    }).catch((e) => {
        console.log(e,888)
    })
}
</script>

<template>
    <div>
        213123
    </div>
    <el-button @click="jump2admin">跳转</el-button>
    <el-input v-model="loginForm.account"></el-input>
    <el-input type="password" v-model="loginForm.password"></el-input>
    <el-button @click="login">跳转</el-button>
</template>
