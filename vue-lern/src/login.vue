<script>
   
</script>

<template>
    <div class="start-info">
        <span><p>Вход</p></span>
        <div class="inputs">
            <div class="text1">
                <p>Почта / Номер телефона</p>
                <input type="text" class="style-input" placeholder="Введите...">
            </div>
            <div class="text1">
                <p>Пароль</p>
                <input type="text" class="style-input" placeholder="Введите...">
            </div>
        </div>
        
        <div class="buttons">
            <button class="button1 text1">Войти с помощью ВК ID</button>
            <button class="button2">Войти</button>
        </div>
    </div>

</template>

<style scoped>
    .start-info{
        display: flex;
        flex-direction: column;
        gap: 78px;
    }
    .inputs{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
    }
    .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }
    
    span{
        font-size: 36px;
        display: flex;
        justify-content: center;
    }
    .text1{
        font-size: 16px;

    }
    .button2{
        font-size: 20px;
    }
    .button1{
        width: 241px;
        height: 39px;
    }
    .button2{
        width: 241px;
        height: 44px;
    }

    .button1,
    .button2{
        background: #e94dc9;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 500ms ease;
        font-size: 20px;
        border: none;
    }
    
    .button1:hover{
        transform: scale(1.1) translateY(-5px);
    }
    .button2:hover{
        transform: scale(1.1) translateY(-5px);
    }
    .style-input{

        width: 287px;
        height: 37px;
        padding: 12px 20px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 8px;
        outline: none;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    }

    .style-input:focus {
        border-color: #4A90E2;
        box-shadow: 0 0 8px rgba(74, 144, 226, 0.6);
        background-color: #fff;
    }
    
    
</style>
