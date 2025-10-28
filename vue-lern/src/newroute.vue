<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function getgeo(){
    alert('Запрашиваем ваше метоположение!')
}
function sendToServer() {
  router.push({ path: '/nextpage' })
}

function goback(){
    router.push({ path: '/myroutes' })
}
</script>

<template>
  <div class="new-route-page">
    <button class="back-button" @click="goback()">
      <img src="../assets/L Arrow Up Left.svg" alt="Назад" />
    </button>

    <h1 class="title">
      Укажите свободное<br />
      время и адрес
    </h1>

    <div class="inputs">
      <div class="field">
        <p>Свободное время (в часах)</p>
        <input type="text" class="style-input" placeholder="Введите время..." />
      </div>

      <div class="field">
        <p>Адрес</p>
        <input type="text" class="style-input" placeholder="Введите адрес..." />
      </div>

      <button class="share-button" @click="getgeo()">Поделиться местоположением</button>
      <button class="continue" @click="sendToServer">Вперёд</button>
    </div>
  </div>
</template>

<style scoped>
  .new-route-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    height: 100vh;
    background-color: #fff;
    position: relative;
    box-sizing: border-box; 
  }

  .back-button {
    position: absolute;
    top: 2rem;
    left: 1.5rem;
    background: none;
    border: none;
    cursor: pointer; 
  }

  .title {
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    margin-top: 8rem;
    margin-bottom: 2rem;
    line-height: 1.4;
 }

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
    max-width: 300px;
  }

  .field {
    width: 100%;
  }

  p {
    margin-bottom: 0.3rem;
    font-size: 14px;
    color: #333;
  }

  .style-input {
    width: 100%;
    height: 40px;
    padding: 10px 14px;
    font-size: 16px;
    border: 1.5px solid #ccc;
    border-radius: 10px;
    outline: none;
    transition: border-color 0.3s ease;
    background: #f7f7f7;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .style-input:focus {
    border-color: #7acf63;
    background: #fff;
  }

  .share-button {
    width: 295px;
    height: 40px;
    border-radius: 20px;
    background: #3d3d3d;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .share-button:hover {
    transform: scale(1.05);
  }

  .continue {
    width: 295px;
    height: 40px;
    border-radius: 20px;
    background: #7acf63;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .continue:hover {
    transform: scale(1.05);
  }
</style>
