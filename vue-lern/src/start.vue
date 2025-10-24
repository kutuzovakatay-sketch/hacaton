<script>
   
</script>

<template>
    <div class="start-info">
        <img src="../assets/logo.svg"/>
        <div class="buttons">
            <a href="#/login"><div class="start-button">Войти</div></a>
            <a href="#/signup"><div class="registration-button">Зарегистрироваться</div></a>
        </div>
    </div>

</template>

<style scoped>

    .buttons{
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
    img {
        width: 70%;            
        height: 70%;
        object-fit: contain;
    }
    .start-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 36px;
        gap: 50px;
        margin-top: 30px;
    }

    .start-button, 
    .registration-button{
        background: #7ACF63;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 500ms ease;
        width: 241px;
        height: 44px;
        font-size: 20px;
        color: white;
    }
    .registration-button{
        background: #3D3D3D;
    }
    .start-button:hover{
        transform: scale(1.1) translateY(-5px);
    }
    a {
        text-decoration: none;
    }

    
</style>
