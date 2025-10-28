<script>
import router from '../router.js'

function navigate(){
  router.push({path: '/login'})
}
</script>

<template>
    <div class="start-info">
      <a href="#/login" class="back-button"><img src="../../public/assets/L%20Arrow%20Up%20Left.svg"></a>
      <span class="vk-login">
        <img src="../../public/assets/vk%20id.svg" alt="VK logo" />
        <p>Вход c VK ID</p>
      </span>
  
      <span>
        <div class="inputs">
        <div class="text1">
          <input type="text" class="style-input" placeholder="Телефон или почта" />
        </div>  
      </div>
  
      <div class="buttons">
        <button class="button1">Войти</button>
        <div class="divider"><p>или</p></div>
        <button class="button2">Войти по QR-коду</button>
      </div>
      </span>
      <button class="buttons button3" @click="navigate()">Зарегистрироваться</button>
    </div>
  </template>
  
  <style scoped>
  .start-info {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  
  .back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #4a4a4a;
  transition: transform 0.2s ease, color 0.2s ease;
}

.vk-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
  gap: 20px;
  margin-top: 30px;
}
  
.vk-login img {
    width: 40%;             
    object-fit: contain;
}
  
.inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    margin-bottom: 1rem;
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
    font-size: 14px;
}
  
.button1 {
    width: 295px;
    height: 40px;
    background: #0077FF;
    
}
  
.button2,
.button3 {
    width: 295px;
    height: 40px;
    background: #3D3D3D;
}

.button3{
  margin-top: 10rem;
}
  
.button1,
.button2,
.button3 {
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 500ms ease;
    font-size: 20px;
    border: none;
    color:white;
  }
  
  .button1:hover,
  .button2:hover,
  .back-button:hover {
    transform: scale(1.1) translateY(-5px);
  }
  
  .style-input {
    width: 295px;
    height: 33px;
    padding: 12px 20px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 10px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    background-color: #E3E3E3;
  }
  
  .style-input:focus {
    border-color: #4A90E2;
    box-shadow: 0 0 8px rgba(74,144,226,0.6);
    background-color: #fff;
  }
  </style>
  