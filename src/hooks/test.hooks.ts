import {ref, Ref, onMounted, onUpdated} from "vue";

export default (addend: number = 1) => {
    const num: Ref<number> = ref(0)

    onMounted(() => {
        console.log(123456)
    })

    onUpdated(() => {
        console.log('hook-updated')
    })

    const addNum = () => {
        num.value += addend
        localStorage.setItem('aaa', '123456')
        console.log(localStorage.getItem('aaa'))
    }

    console.log(898989)

    return {
        num,
        addNum
    }
}
