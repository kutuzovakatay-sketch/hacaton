<script setup>
// import { ref } from 'vue'

// const activeTab = ref('login')

// function switchTab(tab) {
//   activeTab.value = tab
// }



import { reactive, ref, nextTick } from 'vue';

const activeTab = ref('login');

const loginInputs = reactive({ username: '', password: '' });
const registerInputs = reactive({ username: '', password: '', passwordConfirm: '' });

const errors = reactive({
  login: { username: false, password: false },
  register: { username: false, password: false, passwordConfirm: false }
});

function switchTab(tab) {
  activeTab.value = tab;
  clearErrors();
}

function clearErrors() {
  errors.login.username = false;
  errors.login.password = false;
  errors.register.username = false;
  errors.register.password = false;
  errors.register.passwordConfirm = false;
}

function shakeField(fieldName, form) {
  // триггерим анимацию окрашивания и "пошатывания"
  nextTick(() => {
    const refName = '${form}'-'${fieldName}';
    const el = document.querySelector([ref='${refName}']);
    if (el) {
      el.classList.remove('shake');
      // триггер повторной анимации
      void el.offsetWidth;
      el.classList.add('shake');
    }
  });
}

function validateAndSubmit() {
  clearErrors();
  let valid = true;

  if (activeTab.value === 'login') {
    if (!loginInputs.username?.trim()) {
      errors.login.username = true;
      shakeField('username', 'login');
      valid = false;
    }
    if (!loginInputs.password?.trim()) {
      errors.login.password = true;
      shakeField('password', 'login');
      valid = false;
    }
    if (valid) {
      // здесь ваша логика входа
      alert('Вход успешен!');
    }
  } else {
    // регистрация
    if (!registerInputs.username?.trim()) {
      errors.register.username = true;
      shakeField('username', 'register');
      valid = false;
    }
    if (!registerInputs.password?.trim()) {
      errors.register.password = true;
      shakeField('password', 'register');
      valid = false;
    }
    if (!registerInputs.passwordConfirm?.trim()) {
      errors.register.passwordConfirm = true;
      shakeField('passwordConfirm', 'register');
      valid = false;
    }
    if (valid) {
      // здесь ваша логика регистрации
      alert('Регистрация успешна!');
    }
  }
}
function navigate(){
  router.push({path: '/authvk'})
}
</script>

<template>
  <div class="tema">
    <!-- <a href="#/start"><button class="back-button">← Назад</button></a> -->
    <img src="/img/logo.png" alt="">
    <p>My way</p>
  </div>
  
  <div class="container">
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

                    <!-- Вход -->
            <div v-if="activeTab === 'login'" class="form-content">
                <div class="inputs">
                    <div class="text1">
                        <p>Логин</p>
                        <input
                            type="text"
                            class="style-input"
                            placeholder="Введите логин"
                            v-model="loginInputs.username"
                            :class="{ error: errors.login.username }"
                            ref="login-username"
                            :id="'login-username'"
                        />
                    </div>
                    <div class="text1">
                        <p>Пароль</p>
                        <input
                        type="password"
                        class="style-input"
                        placeholder="Введите пароль"
                        v-model="loginInputs.password"
                        :class="{ error: errors.login.password }"
                        ref="login-password"
                        :id="'login-password'"
                        />
                    </div>
                    <label class="remember">
                        <input type="checkbox" />
                        Запомнить меня
                    </label>
                </div>

            <div class="buttons">
                <button class="main-btn" @click="validateAndSubmit">Войти</button>
                <a href="#" class="forgot">Забыли пароль?</a>
                <a href="">
                <div class="inVK">
                    <p>Войти через</p>
                    <img src="/img/vk.png" alt="">
                </div>
                </a>
            </div>
            </div>

                <!-- Регистрация -->
            <div v-else class="form-content">
                <div class="inputs">
                    <p>Логин</p>
                    <input
                    type="text"
                    class="style-input"
                    placeholder="Введите номер телефона"
                    v-model="registerInputs.username"
                    :class="{ error: errors.register.username }"
                    ref="register-username"
                    />
                    <p>Пароль</p>
                    <input
                    type="password"
                    class="style-input"
                    placeholder="Введите"
                    v-model="registerInputs.password"
                    :class="{ error: errors.register.password }"
                    ref="register-password"
                    />
                    <p>Повторите пароль</p>
                    <input
                    type="password"
                    class="style-input"
                    placeholder="Введите"
                    v-model="registerInputs.passwordConfirm"
                    :class="{ error: errors.register.passwordConfirm }"
                    ref="register-passwordConfirm"
                    />
                </div>
                <div class="buttons">
                    <button class="main-btn" @click="validateAndSubmit">Зарегистрироваться</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.style-input.error {
  /* border: 2px solid red; */
  background-color: #FFD8D8;

}
.style-input.error::placeholder {
  color: #FF6969;
}

@keyframes shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
  100% { transform: translateX(0); }
}
.shake {
  animation: shake 0.3s;
}





.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.inputs p{
    font-size: 16px;
    margin-bottom: 2px;
}
a{
    color: #000000;
    text-decoration: none;
}
.inVK img{
    height: 30px;
    width: 30px;
}
.inVK{
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: center;
}
.inVK p{
    font-size: 14px;
    margin-bottom: 2px;
}
.text1 p{
    font-size: 16px;
    margin-bottom: 5px;
}
.display-light{
    border: none;
    top: 40px;
    right: 40px;
}
.tema{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
.tema p{
    font-size: 20px;
}
img{
    height: 100px;
    width: 100px;
}
.form-box {
  width: 295px;
  height: 417px;
  background: #7ACF6333;
  border-radius: 20px;
  padding: 20px 20px 40px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
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
  border-bottom: 2px solid #7ACF63;
  color: #000;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 9px;
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
  background: #7ACF63;
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
    width: 100px;
    height: 39px;
  position: absolute;
  /* top: 20px;
  left: 20px; */
  border: none; 
  font-size: 20px;
  cursor: pointer;
  color: #000000;
  transition: transform 0.2s ease, color 0.2s ease;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A5A5A5;
}


/* .back-button:hover {
  color: #2f2f2f;
  transform: translateX(-3px);
} */
</style>
