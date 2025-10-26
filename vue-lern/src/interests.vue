<template>
    <div class="interests-page">
      <button class="back-button">
        <img src="../assets/L Arrow Up Left.svg" alt="Назад">
      </button>
  
      <div class="header">
        <h2>Укажите интересы</h2>
        <p>(не более 3)</p>
      </div>
  
      <div class="interests-grid">
        <button class="interest">Бег</button>
        <button class="interest">Ходьба</button>
        <button class="interest">Вязание</button>
        <button class="interest">Кулинария</button>
        <button class="interest">Фотографии</button>
        <button class="interest">Чтение</button>
        <button class="interest">Рисование</button>
        <button class="interest">История</button>
        <button class="interest">Другое</button>
      </div>
  
      <!-- Кнопки действий -->
      <div class="actions">
        <button class="skip">Пропустить</button>
        <button class="continue">Продолжить</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .interests-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    height: 100vh;
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
  }
  
  /* Кнопка "назад" */
  .back-button {
    position: absolute;
    top: 1.2rem;
    left: 1rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  .back-button img {
    width: 22px;
    height: 22px;
  }
  
  /* Заголовок */
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
  
  /* Интересы */
  .interests-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem 0.8rem;
    max-width: 300px;
    margin-bottom: 3rem;
  }
  .interest {
    border: 1.5px solid #4CAF50;
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 15px;
    color: #4CAF50;
    background: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .interest:hover {
    background: #4CAF50;
    color: white;
  }
  
  /* Кнопки внизу */
  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    max-width: 280px;
  }
  .skip,
  .continue {
    width: 100%;
    height: 42px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
  }
  .skip {
    background-color: #333;
    color: white;
  }
  .continue {
    background-color: #4CAF50;
    color: white;
  }
  .skip:hover {
    background-color: #000;
  }
  .continue:hover {
    background-color: #45a047;
  }
  </style>
  