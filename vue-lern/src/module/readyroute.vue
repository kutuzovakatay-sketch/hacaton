<script setup>
import { ref } from 'vue'
const selectedTransport = ref('Пешком')
</script>

<template>
  <button class="back-button">
    <a href="#/newroute">
      <img src="../../public/assets/L%20Arrow%20Up%20Left.svg" alt="Назад" />
    </a>
  </button>
  <div class="info">
    <div class="inf0-1">
      <span>
        <p>Памятники</p>
      </span>
      <div class="list">
        <div class="dropdown">
          <select v-model="selectedTransport" class="select">
            <option value="Пешком">Пешком</option>
            <option value="Велосипед">Велосипед</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Машина">Машина</option>
          </select>
        </div>
      </div>
    </div>
    <div class="km">
      <p>1,2км от 11мин</p>
    </div>
    <div class="opicanie">
      <p>
        Начните прогулку у Оленя — современного символа возрождения Нижнего Новгорода. Отсюда рукой подать до монументального Петра I, чей взгляд устремлен к Волге. Завершите маршрут у стен древнего Кремля, где установлена копия московского памятника Минину и Пожарскому.
      </p>
    </div>
    <div class="content">
      <div class="content-info">
        <p class="title">Олень</p>
        <p class="opicanie-item">историческая территория Старый Нижний Новгород</p>
      </div>
      <div class="content-info">
        <p class="title">Петр1</p>
        <p class="opicanie-item">Нижневоджская набережная</p>
      </div>
      <div class="content-info">
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
  .info {
    margin: 43px 40px 20px 41px;
    box-shadow: 0px 4px 4px #0000001A;
    padding: 5px;
    border-radius: 20px;
  }
  .select {
    background-color: #7ACF63;
    color: black;
    border: none;
    border-radius: 45px;
    padding: 8px 25px;
    font-size: 14px;
    appearance: none;
    cursor: pointer;
    text-align: center;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path fill='black' d='M0 0l5 6 5-6z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10px 6px;
  }

  .select:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(122, 207, 99, 0.4);
  }

  .title {
    font-weight: bold;
    margin-bottom: 0px;
  }

  .var {
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

  .opicanie-item {
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

  span {
    font-weight: bold;
  }

  span p {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }

  .inf0-1 {
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

  .button-inf {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-info {
    padding-left: 30px;
    padding-top: 2px;
    border-left: 3px dotted #000000;
  }
</style>
