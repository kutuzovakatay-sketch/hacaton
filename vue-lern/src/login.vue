<script setup>
import { ref } from 'vue'
import router from './router'

const activeTab = ref('login')

function switchTab(tab) {
  activeTab.value = tab
}
function navigate(){
  router.push({path: '/authvk'})
}
</script>

<template>
  <div class="container">
    <a href="#/start"><button class="back-button">← Назад</button></a>

    <div class="form-box">
      <div class="tabs">
        <button
          :class="['tab', { active: activeTab === 'login' }]"
          @click="switchTab('login')"
        >
          Вход
        </button>
        <button
          :class="['tab', { active: activeTab === 'register' }]"
          @click="switchTab('register')"
        >
          Регистрация
        </button>
      </div>

      <!-- === Вход === -->
      <div v-if="activeTab === 'login'" class="form-content">
        <div class="inputs">
          <div class="text1">
            <input type="text" class="style-input" placeholder="Введите логин" />
          </div>
          <div class="text1">
            <input
              type="password"
              class="style-input"
              placeholder="Введите пароль"
            />
          </div>
          <label class="remember">
            <input type="checkbox" />
            Запомнить меня
          </label>
        </div>

        <div class="buttons">
          <button class="vk-btn" @click="navigate()">Войти с помощью VK ID</button>
          <button class="main-btn">Войти</button>
          <a href="#" class="forgot">Забыли пароль?</a>
        </div>
      </div>

      <!-- === Регистрация === -->
      <div v-else class="form-content">
        <div class="inputs">
          <input type="text" class="style-input" placeholder="Введите имя" />
          <input type="email" class="style-input" placeholder="Введите email" />
          <input
            type="password"
            class="style-input"
            placeholder="Введите пароль"
          />
        </div>

        <div class="buttons">
          <button class="main-btn">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  padding-left: 0px;
}

.form-box {
  width: 300px;
  min-height: 380px;
  background: #eaf6e8;
  border-radius: 20px;
  padding: 30px 20px 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.tab {
  background: none;
  border: none;
  font-size: 20px;
  color: #555;
  cursor: pointer;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab.active {
  border-bottom: 2px solid #4a4a4a;
  color: #000;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.style-input {
  width: 100%;
  height: 37px;
  padding: 10px 14px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.style-input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 8px rgba(74, 144, 226, 0.6);
}

.remember {
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 6px;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.vk-btn {
  background: #0077ff;
  color: #fff;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.vk-btn:hover {
  transform: scale(1.05);
}

.main-btn {
  background: #333;
  color: #fff;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.main-btn:hover {
  transform: scale(1.05);
}

.forgot {
  color: #555;
  font-size: 14px;
  text-decoration: none;
  margin-top: 4px;
}

.forgot:hover {
  text-decoration: underline;
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

.back-button:hover {
  color: #0077ff;
  transform: translateX(-3px);
}
</style>
