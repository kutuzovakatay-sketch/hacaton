<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const error = ref(null);
const isProcessing = ref(true);

onMounted(async () => {
  try {
    const token = route.query.token;

    if (!token) router.push('/');

    localStorage.setItem('access_token', token);
    await new Promise(resolve => setTimeout(resolve, 500));

    router.push('/interests');
  } catch (err) {
    console.error('Ошибка при обработке авторизации:', err);
    router.push('/')
  }
});
</script>

<template>
  <div class="auth-callback">
    <div v-if="isProcessing && !error" class="processing">
      <h1>Авторизация</h1>
      <p>Обработка данных авторизации...</p>
      <div class="loader"></div>
    </div>

    <div v-if="error" class="error">
      <h1>Ошибка авторизации</h1>
      <p>{{ error }}</p>
      <button @click="router.push('/')">Вернуться на главную</button>
    </div>
  </div>
</template>

<style scoped>
.auth-callback {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

.processing,
.error {
  padding: 2rem;
}

.loader {
  margin: 2rem auto;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  color: #e74c3c;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>