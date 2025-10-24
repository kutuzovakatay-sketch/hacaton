<script>
   
</script>

<template>
    <div class="start-info">
        <a href="#/start"><button class="back-button buttons">Назад</button></a>
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
            <a href="#/authvk">
                <button class="button1 text1">Войти с помощью ВК ID</button>
            </a>
            <button class="button2">Войти</button>
        </div>
    </div>

</template>

<style scoped>
    .back-button {
      position: absolute;
      top: 10px;
      left: 10px;
      background: none;
      border: none;
      color: #4a4a4a;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: transform 0.2s ease, color 0.2s ease;
    }
    .start-info{
        display: flex;
        flex-direction: column;
        gap: 78px;
    }
    .inputs{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px; 
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
    .button1{
        width: 241px;
        height: 39px;
    }
    .button2{
        width: 241px;
        height: 44px;
        font-size: 20px;
    }

    .back-button {
    width: 80px;
    height: 39px;
    }

    .button1,
    .button2,
    .back-button{
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
    
    .button1:hover,
    .button2:hover,
    .back-button:hover {
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

    a {
    text-decoration: none;
    }   
    p {
        margin-bottom: 0.5rem;
    }  
</style>
