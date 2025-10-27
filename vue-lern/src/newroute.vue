<script setup>
import router from './router'
</script>

<template>
    <div class="new-route-page">
        <h1 class="title">Укажите свободное<br> время и адрес</h1>

    </div>
    
</template>

<style scoped>
    .new-route-page{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem;
        height: 100vh;
        background-color: #fff;
        position: relative;
        box-sizing: border-box;
    }

    .title{
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        margin-top: 15vh;
    }
</style>