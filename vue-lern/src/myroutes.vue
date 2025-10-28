<script setup>
import router from './router'

function navigate(){
  router.push({path: '/newroute'})
}
</script>

<template>
    <div class="nav">
      <button class="back-button">
        <a href="#/interests"><img src="../assets/L Arrow Up Left.svg" alt="Назад" /></a>
      </button>
      <!-- <div class="nav-info">
        <button class="user-style"><img src="/img/user.png" alt=""></button>
        <button class="user-style"><img src="/img/star.png" alt=""></button>
        <button class="user-style"><img src="/img/tema.png" alt=""></button>
      </div> -->
    </div>

    <div class="route-page">
      
      <div class="header">
        <h1 class="title">Мои маршруты</h1>
      </div>
  
      <img src="../assets/empty.svg" class="img-empty" alt="">
      <p class="empty-text">Тут пока пусто...</p>
  
      <button class="plus-button" @click="navigate()">
        <img src="../assets/plus button.svg" alt="Добавить маршрут"/>
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
    position: relative;
    box-sizing: border-box;
  }

  .nav{
    width: 100px;
    display: flex;
    justify-content: space-between;

  }
  .user-style{
    position: absolute;
  }
  .nav-info img{
    width: 28px;
    height: 28px;
    

    cursor: pointer;
  }
  .nav-info button{
    border: none;
  }
  .nav-info{
    display: flex;
    justify-content: center;
    gap: 10px;


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
    top: 1.2rem;
    left: 35px; 
    position: absolute;
  }
  
  .title {
    font-size: 20px;
    font-weight: 500;
    margin-top: 22px;

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
  