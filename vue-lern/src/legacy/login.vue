<script setup>


// const activeTab = ref('login')

// function switchTab(tab) {
//   activeTab.value = tab
// }



// import { reactive, ref, nextTick } from 'vue';

// const activeTab = ref('login');

// const loginInputs = reactive({ username: '', password: '' });
// const registerInputs = reactive({ username: '', password: '', passwordConfirm: '' });

// const errors = reactive({
//   login: { username: false, password: false },
//   register: { username: false, password: false, passwordConfirm: false }
// });

// function switchTab(tab) {
//   activeTab.value = tab;
//   clearErrors();
// }

// function clearErrors() {
//   errors.login.username = false;
//   errors.login.password = false;
//   errors.register.username = false;
//   errors.register.password = false;
//   errors.register.passwordConfirm = false;
// }

// function shakeField(fieldName, form) {
//   // триггерим анимацию окрашивания и "пошатывания"
//   nextTick(() => {
//     const refName = '${form}'-'${fieldName}';
//     const el = document.querySelector([ref='${refName}']);
//     if (el) {
//       el.classList.remove('shake');
//       // триггер повторной анимации
//       void el.offsetWidth;
//       el.classList.add('shake');
//     }
//   });
// }

// function validateAndSubmit() {
//   clearErrors();
//   let valid = true;

//   if (activeTab.value === 'login') {
//     if (!loginInputs.username?.trim()) {
//       errors.login.username = true;
//       shakeField('username', 'login');
//       valid = false;
//     }
//     if (!loginInputs.password?.trim()) {
//       errors.login.password = true;
//       shakeField('password', 'login');
//       valid = false;
//     }
//     if (valid) {
//       // здесь ваша логика входа
//       alert('Вход успешен!');
//     }
//   } else {
//     // регистрация
//     if (!registerInputs.username?.trim()) {
//       errors.register.username = true;
//       shakeField('username', 'register');
//       valid = false;
//     }
//     if (!registerInputs.password?.trim()) {
//       errors.register.password = true;
//       shakeField('password', 'register');
//       valid = false;
//     }
//     if (!registerInputs.passwordConfirm?.trim()) {
//       errors.register.passwordConfirm = true;
//       shakeField('passwordConfirm', 'register');
//       valid = false;
//     }
//     if (valid) {
//       // здесь ваша логика регистрации
//       alert('Регистрация успешна!');
//     }
//   }
// }
// function navigate(){
//   router.push({path: '/authvk'})
// }

</script>

<template>
      <button class="back-button">
        <a href="#/newroute"><img src="../../public/assets/L Arrow Up Left.svg" alt="Назад" /></a>
      </button>
  <div class="info">
    <div class="inf0-1">
      <span><p>Памятники</p></span>
      <div class="list">
        <div class="dropdown">
          <button class="var btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Пешком
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Транспорт</button></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="km">
      <p>1,2км от 11мин</p>
    </div>
    <div class="opicanie">
      <p>Начните прогулку у Оленя — современного символа возрождения Нижнего Новгорода. Отсюда рукой подать до монументального Петра I, чей взгляд устремлен к Волге. Завершите маршрут у стен древнего Кремля, где установлена копия московского памятника Минину и Пожарскому.</p>
    </div>
    <div class="content">
      <div class="content-info ">
        <p class="title">Олень</p>
        <p class="opicanie-item">историческая территория Старый Нижний Новгород</p>
      </div>
      <div class="content-info ">
        <p class="title">Петр1</p>
        <p class="opicanie-item">Нижневоджская набережная</p>
      </div>
      <div class="content-info ">
        <p class="title">Минину и Пожарскому</p>
        <p class="opicanie-item">ул. Рождественская</p>
      </div>
    </div>
    
  </div>
  <div class="button-inf">
    <div class="button">
      <img src="/assets/cart.png" alt="">
      Перейти
    </div>
  </div>

</template>

<style scoped>
.info{
 margin: 43px 40px 20px 41px;
  box-shadow: 0px 4px 4px #0000001A;
  padding: 5px;
  border-radius: 20px;
 
}

    .dropdown-menu {
    min-width: 95px !important; 
    background-color: #ffffff;
  }

.title{
  font-weight: bold;
  margin-bottom: 0px;
}
.var{
  background-color: #7ACF63;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 101px;
  height: 27px;
  border-radius: 20px;
  background-color: #7ACF63;
  padding-left: 10px;
}
.opicanie-item{
  margin-top: 2px;
  padding-bottom: 69px;
}

  .back-button {
    background: none;
    border: none;
    cursor: pointer;
    top: 1.2rem;
    left: 35px; 
    position: absolute;
  }

span{
  font-weight: bold;

}
span p{

  font-size: 16px;
}
p{
  font-size: 12px;
}
.inf0-1{
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
  .button-inf{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-info{
    padding-left: 30px;
    padding-top: 2px;
    border-left: 3px dotted #000000;
  }





</style>
