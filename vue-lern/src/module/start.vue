<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const loading = ref(false);
    const router = useRouter();

    function startLoading() {
      loading.value = true;

      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }

    return { loading, startLoading };
  },
};
</script>

<template>
    <div class="start-info">
        <p>Добро пожаловать!</p>
        <img src="/assets/start.png" alt="">
        <a href=""><div class="buttons">
            <div class="start-button">Войти</div>
            <img src="/assets/vk.png" alt="" class="vk">
        </div></a>
        <button @click="startLoading">Загрузить страницу</button>
    </div>



    <!-- Загрузочный экран с анимацией -->
    <transition name="fade">
        <div v-if="loading" class="loader-screen">
            <div class="spinner">
                <div class="dot" v-for="n in 9" :key="n"></div>
            </div>
            <p class="loading-text">Генерируем маршрут...</p>
        </div>
    </transition>

    <!-- Основной контент -->
    <div v-if="!loading" class="main-content">
        <router-view></router-view>
    </div>


</template>

<style scoped>

    .img{
        height: 347px;
        width: 374px;
    }
    p{
        font-size: 20px;
        font-weight: bold;
    }
    .buttons{
        display: flex;
        justify-content: center;
        gap: 6px;

        background: #CDCDCD;
        border-radius: 30px;
        align-items: center;
        cursor: pointer;
        transition: transform 500ms ease;
        width: 296px;
        height: 52px;
        font-size: 20px;
        color: rgb(255, 255, 255);
        background-color: #7ACF63;
    }
    .start-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 36px;
        gap: 36px;
        margin-top: 30px;

    }

    .buttons:hover{
        transform: scale(1.1) translateY(-5px);
    }

    a {
        text-decoration: none;
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
