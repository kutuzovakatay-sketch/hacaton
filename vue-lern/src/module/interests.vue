<script setup>
import AuthService from "@/api/auth.js";
import UserService from "@/api/user.js";
import { ref, onMounted } from 'vue'
import router from './../router'

const interests = [
  { id: 1, name: 'Памятники' },
  { id: 2, name: 'Парки' },
  { id: 3, name: 'Достопримечательности' },
  { id: 4, name: 'Набережная' },
  { id: 5, name: 'Здания' },
  { id: 6, name: 'Культурные места' },
  { id: 7, name: 'Музеи' },
  { id: 8, name: 'Театры' },
  { id: 9, name: 'Германия' },
  { id: 10, name: 'Искусство' }
]

const selected = ref([])

// Проверка токена при загрузке страницы, добавить во все страницы, требующие авторизацию
onMounted(async () => {
  if (!localStorage.getItem("access_token") || !(await AuthService.tokenIsValid())) {
    router.push("/");
  }
})

function toggleInterest(interest) {
  const index = selected.value.findIndex(item => item.id === interest.id)

  if (index !== -1) {
    selected.value.splice(index, 1)
  } else if (selected.value.length < 3) {
    selected.value.push(interest)
  } else {
    alert('Вы уже выбрали 3 предпочитаемых элемента, вы можете изменить свой выбор!')
  }
}

async function sendToServer() {
  try {
    const selectedIds = selected.value.map(interest => interest.id)
    console.log(selectedIds)
    await UserService.sendCategoriesToServer(selectedIds)
    router.push('/myroutes')
  } catch (error) {
    alert(error.message)
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
        :key="interest.id"
        :class="['interest', { active: selected.some(item => item.id === interest.id) }]"
        @click="toggleInterest(interest)"
      >
        {{ interest.name }}
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
