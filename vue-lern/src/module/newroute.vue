<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthService from "@/api/auth.js";
import RouteService from "@/api/routes.js";
import {settings} from "@/api/settings.js";

const router = useRouter();

onMounted(async () => {
  if (!localStorage.getItem("access_token") || !(await AuthService.tokenIsValid())) {
    router.push("/");
  }
})



const loading = ref(false);
let progressText = ref("Загрузка...");
const available_time_hours = ref('');
const transport_type = ref('walking');
const address = ref('');
const latitude = ref(null);
const longitude = ref(null);


/*
  Обращение к службам геолокации за метсоположением пользователя
*/
async function getgeo() {
  //alert('Запрашиваем ваше местоположение!');
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      });
    });
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;

    let result = await RouteService.getAddressByCoordinates(latitude.value, longitude.value);
    address.value = result;
    console.log(result);
  } catch (e) {
    console.log(e);
    alert("Разрешите получение локации для корректной работы приложения.");
  }
}


function goback() {
  router.push({ path: '/myroutes' });
}

/*
  ВРОДЕ КАК ГЕНЕРАЦИЯ МАРШРУТА


  ПОДГОТОВИТЬ СЛЕДУЮЩИЕ ДАННЫЕ ЕГОР
  RouteRequers
  user_id
  latitude
  longitude
  transport_type
  available_time_hours
*/
async function startLoading() {
  if (!latitude.value || !longitude.value) {
    alert('Пожалуйста, укажите местоположение');
    return;
  }

  const lat = parseFloat(latitude.value);
  const lon = parseFloat(longitude.value);

  if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    alert('Некорректные координаты');
    return;
  }

  if (!available_time_hours.value || parseFloat(available_time_hours.value) <= 0) {
    alert('Пожалуйста, укажите корректное время (больше 0)');
    return;
  }

  loading.value = true;

  const userData = await AuthService.getUserData();

  let routeData = {
    user_id: userData.id,
    latitude: lat,
    longitude: lon,
    transport_type: transport_type.value,
    available_time_hours: parseFloat(available_time_hours.value)
  };

  console.log('Отправляемые данные:', routeData);

  try {
  const response = await RouteService.createRouteTask(routeData)

  const { task_id, status, message } = response;

  const eventSource = new EventSource(`${settings.API_BASE_URL}/routes/events/${task_id}`);

    eventSource.addEventListener('processing', (e) => {
      console.log("processing event:", e.data);
      progressText.value = 'Обработка запроса...';
    });

    eventSource.addEventListener('ai_response', (e) => {
      console.log("ai_response event:", e.data);
      progressText.value = 'Получение данных от AI...';
    });

    eventSource.addEventListener('route_building', (e) => {
      progressText.value = 'Построение маршрута...';
    });


    eventSource.addEventListener('completed', (e) => {
    eventSource.close();
    setTimeout(() => {
      loading.value = false;
      router.push('/readyroute');
    }, 2000);
  });

  eventSource.addEventListener('error', (e) => {
    const data = JSON.parse(e.data);
    loading.value = false;
    alert("ERROR: " + data.message);
    eventSource.close();
  });
  } catch (error) {
    loading.value = false;
    console.error('Ошибка:', error);
    alert('Ошибка при создании маршрута: ' + (error.response?.data?.detail || error.message));
  }
}

function handleButtonClick() {
  startLoading();
}

</script>


<template>
    <button class="back-button" @click="goback()">
      <img src="../../public/assets/L%20Arrow%20Up%20Left.svg" alt="Назад" />
    </button>
  <div class="new-route-page">


    <h1 class="title">
      Укажите данные <br> для маршрута
    </h1>

    <div class="inputs">
      <div class="field">
        <p>Свободное время (в часах)</p>
        <input type="number" v-model="available_time_hours" class="style-input" placeholder="Введите время..." />
      </div>

      <div class="field">
        <p>Тип транспорта</p>
        <select v-model="transport_type" class="style-input">
          <option value="walking">Пешком</option>
          <option value="bicycle">Велосипед</option>
          <option value="car">Машина</option>
          <option value="public_transport">Общественный транспорт</option>
        </select>
      </div>

      <button class="share-button" @click="getgeo()">Поделиться местоположением</button>
      <button class="continue" @click="handleButtonClick">Вперёд</button>
    </div>
  </div>

        <!-- Загрузочный экран с анимацией -->
  <transition name="fade">
    <div v-if="loading" class="loader-screen">
        <div class="spinner">
            <div class="dot" v-for="n in 9" :key="n"></div>
        </div>
        <p class="loading-text">{{ progressText }}</p>
    </div>
  </transition>

      <!-- Основной контент -->
    <div v-if="!loading" class="main-content">
      <router-view></router-view>
    </div>
</template>

<style scoped>
  .new-route-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    height: 100vh;
 
    position: relative;
    box-sizing: border-box; 
  }

  .back-button {
    position: absolute;
    top: 1.2rem;
    left: 35px; 
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







  .loader-screen {
  display: flex;
  flex-direction: column;
  gap: 57px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-text{
    font-size: 20px;
}

.spinner {
  position: relative;
  width: 170px;
  height: 170px;
}

.dot {
  position: absolute;
  border-radius: 50%;
  background: #7ACF63;
  animation: dotAnim 1.5s infinite ease-in-out;


   /* transform: translate(-50%, -50%); */
}

.dot:nth-child(1) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(0deg));
  left: calc(50% + 48.5% * cos(0deg));
  margin-left: 0;
  animation-delay: 0s;
  transform: translate(-50%, -50%);
}

.dot:nth-child(2) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(40deg));
  left: calc(50% + 48.5% * cos(40deg));
  animation-delay: 0.1s;
  transform: translate(-50%, -50%);
}

.dot:nth-child(3) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(80deg));
  left: calc(50% + 48.5% * cos(80deg));
  animation-delay: 0.2s;
  transform: translate(-50%, -50%);
}

.dot:nth-child(4) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(120deg));
  left: calc(50% + 48.5% * cos(120deg));
  animation-delay: 0.3s;
  transform: translate(-50%, -50%);
}

.dot:nth-child(5) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(160deg));
  left: calc(50% + 48.5% * cos(160deg));
  animation-delay: 0.4s;
  transform: translate(-50%, -50%);
}

.dot:nth-child(6) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(200deg));
  left: calc(50% + 48.5% * cos(200deg));
  animation-delay: 0.5s;
  transform: translate(-50%, -50%);
}

.dot:nth-child(7) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(240deg));
  left: calc(50% + 48.5% * cos(240deg));
  animation-delay: 0.6s;
  transform: translate(-50%, -50%);
}

.dot:nth-child(8) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(280deg));
  left: calc(50% + 48.5% * cos(280deg));
  animation-delay: 0.7s;
  transform: translate(-50%, -50%);
}

.dot:nth-child(9) {
  width: 30px; height: 30px;
  top: calc(50% + 48.5% * sin(320deg));
  left: calc(50% + 48.5% * cos(320deg));
  animation-delay: 0.8s;
  transform: translate(-50%, -50%);
}

@keyframes dotAnim {
  0%, 100% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.5);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
