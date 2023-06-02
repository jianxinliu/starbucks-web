<template>
    mian: {{ name }} <br>
    upper: {{ upperName }} <br>
    myInfo: <br>
    name: {{ myInfo.name }}<br>
    age: {{ myInfo.age }}<br>
    city: {{ myInfo.city }}<br>
    <el-button @click="change">change</el-button>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from "vue";
import { MainModel } from '@/types/Main'

const name = ref('hahah')
const myInfo = reactive<MainModel>({
    name: '',
    age: 14,
    city: 'beijing'
})

const upperName = computed(() => name.value.toUpperCase())

function change() {
    myInfo.age++
    myInfo.city += '_sd '
}

onMounted(() => {
    console.log('log on mounted');
})
</script>

<style lang="scss" scoped></style>