<script setup>
import auth from "@/api/auth.js";
import {settings} from "@/api/env.js";
import router from './../router'

function navigate(){
  router.push({path: '/newroute'})
}

// Проверка токена при загрузке страницы, добавить во все страницы, требующие авторизацию
onMounted(async () => {
  const token = localStorage.getItem('access_token');
  if (!token || !(await auth.validateToken(token))) {
    router.push("/");
  }

  try {
    const userResponse = await fetch(`${settings.API_BASE_URL}/auth/me`, {
      mathod: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (!userResponse.ok) throw new Error('Не удалось получить данные пользователя')

    const userData = await userResponse.json()
    const userId = userData.id

    const routesResponse = await fetch(`${settings.API_BASE_URL}/api/routes/user/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!routesResponse.ok) throw new Error('Не удалось получить маршруты пользователя')

    const data = await routesResponse.json()
    routesSummary.value = data
    console.log('Маршруты пользователя:', data)
  } catch (error) {
    console.error('Ошибка при получении данных пользователя или маршрутов:', error)
    router.push('/')
  }
}) 


</script>

<template>
    <button class="back-button">
      <a href="#/interests"><img src="../../public/assets/L%20Arrow%20Up%20Left.svg" alt="Назад" /></a>
    </button>
    <div class="route-page">
      <div class="header">

        <h1 class="title">Мои маршруты</h1>
      </div>
  
      <img src="../../public/assets/empty.svg" class="img-empty" alt="">
      <p class="empty-text">Тут пока пусто...</p>
  
      <button class="plus-button" @click="navigate()">
        <img src="../../public/assets/plus button.svg" alt="Добавить маршрут"/>
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
  position: absolute;
  top: 1.2rem;
  left: 35px; 

  background: none;
  border: none;
  font-size: 20px;
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
  