<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

</script>

<template>
    <div class="start-info">
        <p>Добро пожаловать!</p>
        <img src="/img/start.png" alt="">
        <a href="#/interests"><span class="buttons">
          <div class="start-button">Войти</div>
          <img src="/img/vk.png" alt="" class="vk">
        </span></a>

    </div>

</template>

<style scoped>

    .img{
        height: 347px;
        width: 374px;
    }
    p{
        font-size: 20px;
        font-weight: bold;
    }
    .buttons{
        display: flex;
        justify-content: center;
        gap: 6px;

        background: #CDCDCD;
        border-radius: 30px;
        align-items: center;
        cursor: pointer;
        transition: transform 500ms ease;
        width: 296px;
        height: 52px;
        font-size: 20px;
        color: rgb(255, 255, 255);
        background-color: #7ACF63;
    }
    .start-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 36px;
        gap: 36px;
        margin-top: 30px;

    }

    .buttons:hover{
        transform: scale(1.1) translateY(-5px);
    }

    a {
        text-decoration: none;
    }

</style>
    








