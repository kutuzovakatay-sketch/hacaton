<script setup>


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
  <div class="info">
    <div class="inf0-1">
      <p>Памятники</p>
      <div class="list">
        <p>пешком</p>
      </div>
    </div>
    <div class="km">
      <p>1,2км от 11мин</p>
    </div>
    <div class="opicanie">
      <p>Начните прогулку у Оленя — современного символа возрождения Нижнего Новгорода. Отсюда рукой подать до монументального Петра I, чей взгляд устремлен к Волге. Завершите маршрут у стен древнего Кремля, где установлена копия московского памятника Минину и Пожарскому.</p>
    </div>
    <div class="content">
      <div class="content-info">
        <p class="title">Олень</p>
        <p>историческая территория Старый Нижний Новгород</p>
      </div>
      <div class="content-info">
        <p class="title">Петр1</p>
        <p>Нижневоджская набережная</p>
      </div>
      <div class="content-info">
        <p class="title">Минину и Пожарскому</p>
        <p>ул. Рождественская</p>
      </div>
    </div>
    
  </div>
  <div class="button">Перейти</div>
</template>

<style scoped>
.info{
 margin: 43px 40px 94px 41px;
}

.inf0-1{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.list{
  width: 101px;
  height: 27px;
  border-radius: 20px;
  background-color: #7ACF63;
  padding-left: 10px;
}

</style>
