<script setup>
import router from './../router'

//
// ВЗАИМОДЕЙСТВИЕ С СЕРВЕРОМ !!!! -> Авторизация с помощью VK
//
function auth() {
  alert('Перенаправляем вас в VK ID') // Логика работы сервера
  router.push({ path: '/interests' }) // Перенаправление на следующую страницу
}
</script>

<template>
  <div class="start-info">
    <p>Добро пожаловать!</p>
    <img src="/assets/start.png" alt="Начальное изображение" class="main-img" />

    <button class="start-button" @click="auth()">
      Войти через VK
      <img src="/assets/vk.png" alt="VK" class="vk-icon" />
    </button>
  </div>
</template>

<style scoped>
.start-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
  gap: 36px;
  margin-top: 30px;
}

p {
  font-size: 20px;
  font-weight: bold;
}

.main-img {
  height: 347px;
  width: 374px;
  object-fit: contain;
}

.start-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 296px;
  height: 52px;

  background-color: #7acf63;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-direction: row;
}

.start-button:hover {
  transform: scale(1.05) translateY(-3px);
}

.vk-icon {
  width: 26px;
  height: 26px;
}
</style>
