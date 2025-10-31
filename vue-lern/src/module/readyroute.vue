<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import RouteService from '@/api/routes.js'
import AuthService from '@/api/auth.js'
import router from '@/router.js'

const route = useRoute()
const routeData = ref(null)
const isLoading = ref(true)
const error = ref(null)

const transportTypeDisplay = computed(() => {
  if (!routeData.value) return 'Пешком'

  const types = {
    'walking': 'Пешком',
    'bicycle': 'Велосипед',
    'public_transport': 'Транспорт',
    'car': 'Машина'
  }

  return types[routeData.value.transport_type] || 'Пешком'
})

const formattedTime = computed(() => {
  if (!routeData.value) return '0 мин'
  const hours = Math.floor(routeData.value.estimated_time_minutes / 60)
  const minutes = routeData.value.estimated_time_minutes % 60

  if (hours > 0) {
    return `${hours}ч ${minutes}мин`
  }
  return `${minutes}мин`
})

onMounted(async () => {
  if (!localStorage.getItem("access_token") || !(await AuthService.tokenIsValid())) {
    router.push("/");
    return;
  }

  const routeId = route.query.id

  if (!routeId) {
    error.value = 'ID маршрута не указан'
    isLoading.value = false
    return
  }

  try {
    isLoading.value = true
    routeData.value = await RouteService.getRouteById(routeId)
    console.log('Загружен маршрут:', routeData.value)
  } catch (err) {
    console.error('Ошибка при загрузке маршрута:', err)
    error.value = err.message || 'Не удалось загрузить маршрут'
  } finally {
    isLoading.value = false
  }
})

function openmap(){
  alert('Открываем карту на телефоне!') // TODO реализовать открытие карты @kurays
}
</script>

<template>
  <button class="back-button" @click="router.push('/myroutes')">
    <img src="../../public/assets/L%20Arrow%20Up%20Left.svg" alt="Назад" />
  </button>

  <!-- Состояние загрузки -->
  <div v-if="isLoading" class="loading">
    <p>Загрузка маршрута...</p>
  </div>

  <!-- Состояние ошибки -->
  <div v-else-if="error" class="error-state">
    <p>{{ error }}</p>
    <button class="button" @click="router.push('/myroutes')">Вернуться к маршрутам</button>
  </div>

  <!-- Основной контент -->
  <div v-else-if="routeData" class="info">
    <div class="inf0-1">
      <span class="route-title">
        Маршрут #{{ routeData.id }}
      </span>
      <div class="list">
        <div class="transport-display">
          <div class="var">
            {{ transportTypeDisplay }}
          </div>
        </div>
      </div>
    </div>
    <div class="km">
      <p>{{ routeData.total_distance }}км от {{ formattedTime }}</p>
    </div>
    <div class="opicanie" v-if="routeData.ai_description">
      <p>{{ routeData.ai_description }}</p>
    </div>
    <div class="content">
      <div
        v-for="location in routeData.locations"
        :key="location.id"
        class="content-info"
      >
        <p class="title">{{ location.title }}</p>
        <p class="addres-item">{{ location.address }}</p>
        <p class="description-item" v-if="location.description">{{ location.description }}</p>
      </div>
    </div>
  </div>
  <div v-if="routeData" class="button-inf">
    <button class="button" @click="openmap()">
      Перейти
      <img src="/assets/cart.png" alt="">
    </button>
  </div>
</template>

<style scoped>
  .loading, .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
    padding: 2rem;
  }

  .loading p {
    font-size: 16px;
    color: #666;
  }

  .error-state p {
    font-size: 16px;
    color: #d9534f;
    margin-bottom: 1rem;
  }

  .transport-display {
    display: flex;
    align-items: center;
  }

  .info {
    margin: 43px 40px 20px 41px;
    box-shadow: 0 4px 4px #0000001A;
    padding: 5px;
    border-radius: 20px;
  }

  .title {
    font-weight: bold;
    margin-bottom: 0;
  }

  .var {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 101px;
    height: 27px;
    border-radius: 20px;
    background-color: #7ACF63;
    padding-left: 10px;
  }

  .addres-item {
    margin-top: 2px;
    padding-bottom: 10px;
  }

  .description-item {
    margin-top: 2px;
    padding-bottom: 10px;
  }

  .back-button {
    background: none;
    border: none;
    cursor: pointer;
    top: 1.2rem;
    left: 35px;
    position: absolute;
  }

  .route-title {
    font-weight: bold;
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }

  .inf0-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    width: 294px;
    height: 39px;
    border-radius: 20px;
    background: #3d3d3d;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: center;
  }

  .button:hover {
    transform: scale(1.05);
  }

  .button-inf {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-info {
    padding-left: 30px;
    padding-top: 2px;
    border-left: 3px dotted #000000;
  }
</style>
