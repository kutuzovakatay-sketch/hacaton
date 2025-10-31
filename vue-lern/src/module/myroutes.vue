<script setup>
import UserService from "@/api/user.js";
import AuthService from "@/api/auth.js";
import router from './../router'
import {onMounted, ref} from "vue";

const userRoutes = ref([]);
const isLoading = ref(true);

function navigate(){
  router.push({path: '/newroute'})
}

onMounted(async () => {
  if (!localStorage.getItem("access_token") || !(await AuthService.tokenIsValid())) {
    router.push("/");
    return;
  }

  try {
    isLoading.value = true;
    const data = await UserService.getUserRoutes();

    userRoutes.value = data;
    console.log('Маршруты пользователя:', data);

  } catch (error) {
    console.error('Ошибка при получении данных пользователя или маршрутов:', error);
    router.push('/');
  } finally {
    isLoading.value = false;
  }
})


</script>

<template>
    <button class="back-button" @click="router.push('/interests')">
      <img src="../../public/assets/L%20Arrow%20Up%20Left.svg" alt="Назад" />
    </button>
    <div class="route-page">
      <div class="header">
        <h1 class="title">Мои маршруты</h1>
      </div>
  
      <!-- Состояние загрузки -->
      <div v-if="isLoading" class="loading">
        <p>Загрузка маршрутов...</p>
      </div>

      <!-- Список маршрутов -->
      <div v-else-if="userRoutes.length > 0" class="routes-list">
        <div v-for="route in userRoutes" :key="route.id" class="route-card" @click="router.push({ path: '/readyroute', query: { id: route.id } })">
          <div class="route-header">
            <h3 class="route-id">Маршрут #{{ route.id }}</h3>
            <span class="transport-type">{{
                route.transport_type === 'walking' ? '🚶‍♂️ Пешком' :
                route.transport_type === 'bicycle' ? '🚴‍♂️ Велосипед' :
                route.transport_type === 'car' ? '🚗 Автомобиль' :
                route.transport_type === 'public_transport' ? '🚌 Общественный транспорт' :
                '🚶‍♂️ Пешком'
              }}</span>
          </div>

          <div class="route-info">
            <div class="route-stat">
              <span class="stat-label">Расстояние:</span>
              <span class="stat-value">{{ route.total_distance }} км</span>
            </div>
            <div class="route-stat">
              <span class="stat-label">Время:</span>
              <span class="stat-value">{{ Math.round(route.estimated_time_minutes / 60) }} ч {{ route.estimated_time_minutes % 60 }} мин</span>
            </div>
          </div>

          <div class="locations-preview">
            <h4>Достопримечательности:</h4>
            <div class="locations-list">
              <div v-for="location in route.locations.slice(0, 3)" :key="location.id" class="location-item">
                <span class="location-title">{{ location.title }}</span>
                <span class="location-category">{{ location.category_name }}</span>
              </div>
              <div v-if="route.locations.length > 3" class="more-locations">
                +{{ route.locations.length - 3 }} еще
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Пустое состояние -->
      <div v-else class="empty-state">
        <img src="../../public/assets/empty.svg" class="img-empty" alt="">
        <p class="empty-text">Тут пока пусто...</p>
      </div>

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
    min-height: 100vh;
    padding: 2rem;
    padding-bottom: 6rem;
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
  
  .loading {
    margin-top: 8rem;
    text-align: center;
    color: #666;
    font-size: 16px;
  }

  .routes-list {
    margin-top: 6rem;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .route-card {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 1rem;
    border: 1px solid #e9ecef;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .route-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .route-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .route-id {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: #333;
  }

  .transport-type {
    font-size: 14px;
    color: #666;
    background: #e9ecef;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
  }

  .route-info {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .route-stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stat-label {
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }

  .stat-value {
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }

  .locations-preview h4 {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  .locations-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .location-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #e9ecef;
  }

  .location-title {
    font-size: 13px;
    font-weight: 500;
    color: #333;
    flex: 1;
  }

  .location-category {
    font-size: 11px;
    color: #666;
    background: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }

  .more-locations {
    font-size: 12px;
    color: #666;
    text-align: center;
    padding: 0.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e9ecef;
  }

  .empty-state {
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-empty {
    width: 80%;
    max-width: 400px;
  }
  
  .empty-text {
    font-size: 18px;
    color: #555;
    margin-top: 0;
  }
  
  .plus-button {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 100;
  }
  
  .plus-button:hover {
    transform: scale(1.1);
  }
  </style>
  