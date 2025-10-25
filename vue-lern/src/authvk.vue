<template>
  {# Проверка работоспособности второй ветви SashaEdit #}
    <div class="start-info">
      <a href="#/login"><button class="back-button buttons">Назад</button></a>
      <span class="vk-login">
        <img src="../assets/vk-1-logo-svgrepo-com.svg" alt="VK logo" />
        <p>Вход c VK ID</p>
      </span>
  
      <div class="inputs">
        <div class="text1">
          <p>Почта / Номер телефона</p>
          <input type="text" class="style-input" placeholder="Введите..." />
        </div>  
      </div>
  
      <div class="buttons">
        <button class="button1">Войти</button>
        <div class="divider"><p>или</p></div>
        <button class="button1">Войти по QR-коду</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .start-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  /* Кнопка назад */
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

.vk-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
  gap: 10px;
  margin-top: 30px;
}
  
.vk-login img {
    width: 60px;             /* фиксированный размер */
    height: 60px;
    object-fit: contain;
}
  
.inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    margin-bottom: 2rem;
}
  
.buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
}
  
.divider {
    align-items: center;
    margin-top: 3%;
}
  
.text1 {
    font-size: 16px;
}
  
.button1 {
    width: 241px;
    height: 39px;
}
  
.button2 {
    width: 241px;
    height: 44px;
}
.back-button {
    width: 80px;
    height: 39px;
}
  
.button1,
.button2,
.back-button {
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
  
  .style-input {
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
    box-shadow: 0 0 8px rgba(74,144,226,0.6);
    background-color: #fff;
  }
  
  p {
    margin-bottom: 0.5rem;
  }
  </style>
  