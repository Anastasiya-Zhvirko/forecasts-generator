/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const sendButton = document.querySelector('.forecast-btn');

sendButton.addEventListener('click', generatePrediction);

function generatePrediction() {

  const newTitle = document.querySelector('.current-forecast h1');
  const newProbability = document.querySelector('.current-forecast p');
  const oldTitle = newTitle.textContent;
  const oldProbability = newProbability.textContent;
  const probability = getRandomInt(0, 101);

  newTitle.textContent = getForecast();
  newProbability.textContent = `Вероятность: ${probability} %`;

  if (oldTitle != "") {
    const itemsContainer = document.querySelector('.forecasts');
    const template = document.querySelector('#forecast-item');
    const item = template.content.cloneNode(true);
    item.querySelector('h3').textContent = oldTitle;
    item.querySelector('p').textContent = oldProbability;
    itemsContainer.prepend(item);
  }
}


function getForecast() {
  const newPrediction = getRandomInt(1, 6);
  if (newPrediction == 1) {
    return "Тебя ждет захватывающее путешествие";
  }
  else if (newPrediction == 2) {
    return "Следующий день принесет приятные новости";
  }
  else if (newPrediction == 3) {
    return "Заветное желание исполнится";
  }
  else if (newPrediction == 4) {
    return "Повышение не за горами";
  }
  else if (newPrediction == 5) {
    return "Неожиданный сюрприз";
  };
}




/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
