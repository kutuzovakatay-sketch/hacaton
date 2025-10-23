<script>
   
</script>

<template>
    <div class="start-info">
        <div class="buttons">
            <a href="#/login"><div class="start-button">Войти</div></a>
            <a href="#/signup"><div class="start-button">Зарегистрироваться</div></a>
        </div>
    </div>

</template>

<style scoped>

    .start-button{
        background: #e94dc9;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 500ms ease;
        width: 241px;
        height: 44px;
        font-size: 20px;
    }

    a .start-button{
        color: black;
    }

    .start-button:hover{
        transform: scale(1.1) translateY(-5px);
    }
    .buttons{
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    a{
    text-decoration: none;
    } 
</style>
