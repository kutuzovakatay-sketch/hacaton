<script setup>
import auth from "@/api/auth.js";
import router from './../router'
import { ref, onMounted } from 'vue'

const interests = [
  'Памятники', 'Парки', 'Достопримечательности', 'Набережная',
  'Здания', 'Культурные места', 'Музеи', 'Театры', 'Германия', 'Искусство'
]

const selected = ref([])

// Проверка токена при загрузке страницы, добавить во все страницы, требующие авторизацию
onMounted(async () => {
  const token = localStorage.getItem('access_token');
  if (!token || !(await auth.validateToken(token))) {
    router.push("/");
  }
})

function toggleInterest(interest) {
  const index = selected.value.indexOf(interest)

  if (index !== -1) {
    selected.value.splice(index, 1)
  } else if (selected.value.length < 3) {
    selected.value.push(interest)
  } else {
    alert('Вы уже выбрали 3 предпочитаемых элемента, вы можете изменить свой выбор!')
  }
}

//
// ВЗАИМОДЕЙСТВИЕ С СЕРВЕРОМ !!!! -> Отправка выбранных интересов (хранятся в массиве selected в виде строк)
//
function sendToServer(){

  if(selected.value.length == 0){
    alert('Вы не выбрали ваши интересы!') // Уведомление для пользователя(оставить)
  } else {
    alert('Запрос был отправлен на Сервер!') // Логика работы сервера
    router.push({path: '/myroutes'}) // Перенаправление на следующую страницу
  }
  
}
</script>

<template>
    <button class="back-button">
      <a href="#/start"><img src="/assets/L Arrow Up Left.svg" alt="Назад" /></a>
    </button>
  <div class="interests-page">


    <div class="header">
      <h2>Укажите интересы</h2>
      <p>(не более 3)</p>
    </div>

    <div class="interests-grid">
      <button
        v-for="interest in interests"
        :key="interest"
        :class="['interest', { active: selected.includes(interest) }]"
        @click="toggleInterest(interest)"
      >
        {{ interest }}
      </button>
    </div>

    <div class="actions">
      <button class="continue" @click="sendToServer()">Продолжить</button>
    </div>
  </div>
</template>

<style scoped>
.interests-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  height: 100vh;
  /* background-color: #fff; */
  position: relative;
  box-sizing: border-box;

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

.header {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.header h2 {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}
.header p {
  color: #666;
  font-size: 14px;
  margin: 0.3rem 0 0;
}

.interests-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem 0.8rem;
  max-width: 300px;
  margin-bottom: 3rem;
}
.interest {
  border: 1.5px solid #4caf50;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 15px;
  color: #4caf50;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.interest.active {
  background-color: #4caf50;
  color: #fff;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  max-width: 280px;
}
.continue {
  width: 100%;
  height: 42px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
}
.continue {
  background-color: #4caf50;
  color: white;
}
</style>
