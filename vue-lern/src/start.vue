<script>
   
</script>

<template>
    <div class="start-info">
        <p>Добро пожаловать!</p>
        <img src="/img/start.png" alt="">
        <div class="buttons">
            <a href="#/login"><div class="start-button">Войти</div></a>
            <a href="#/signup"><div class="registration-button">Зарегистрироваться</div></a>
        </div>
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
        flex-direction: column;
        gap: 18px;
    }
    .start-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 36px;
        gap: 36px;
        margin-top: 30px;

    }

    .start-button, 
    .registration-button{
        background: #CDCDCD;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 500ms ease;
        width: 295px;
        height: 40px;
        font-size: 20px;
        color: rgb(255, 255, 255);
        background-color: #7ACF63;
    }
    .registration-button{
        background: #3D3D3D;
    }
    .start-button:hover{
        transform: scale(1.1) translateY(-5px);
    }
    .registration-button:hover{
        transform: scale(1.1) translateY(-5px);
    }
    a {
        text-decoration: none;
    }

    
</style>
