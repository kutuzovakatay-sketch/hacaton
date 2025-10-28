<script setup>
import router from '../router.js'

function navigate(){
  router.push({path: '/newroute'})
}
</script>

<template>
    <div class="route-page">
      <div class="header">
        <button class="back-button">
          <img src="../../public/assets/L%20Arrow%20Up%20Left.svg" alt="Назад" />
        </button>
        <h1 class="title">Мои маршруты</h1>
      </div>
  
      <img src="../../public/assets/empty.svg" class="img-empty" alt="">
      <p class="empty-text">Тут пока пусто...</p>
  
      <button class="plus-button" @click="navigate()">
        <img src="../../public/assets/plus%20button.svg" alt="Добавить маршрут"/>
      </button>
    </div>
  </template>
  
  <style scoped>
  .route-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 2rem;
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
  }
  
  .header {
    position: absolute;
    top: 2rem;
    left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .back-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .title {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
  
  .img-empty {
    width: 80%;
    max-width: 400px;
    margin-top: 10rem;
  }
  
  .empty-text {
    font-size: 18px;
    color: #555;
    margin-top: 0rem;
  }
  
  .plus-button {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .plus-button:hover {
    transform: scale(1.1);
  }
  </style>
  