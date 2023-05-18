// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from "lodash.throttle";

//variables
const form = document.querySelector('.feedback-form');
const KEY_USER_DATA = "feedback-form-state";

// events
form.addEventListener('input', throttle(onSave, 500));
window.addEventListener('load', onLoad);
form.addEventListener('submit', onSubmit)
// function

function onSave(event) {
    event.preventDefault();
    const data = getUserData();
    saveToLocal(data);
    return;
}

function onLoad (event) {
    const dataString = localStorage.getItem(KEY_USER_DATA);
    if (dataString) {
        const parsedData = JSON.parse(dataString);
        form.email.value = parsedData.email;
        form.message.value = parsedData.message;
    }
    return;
}

function onSubmit (event) {
    event.preventDefault();
    const parsedData = JSON.parse(localStorage.getItem(KEY_USER_DATA));
    console.log(parsedData);
    localStorage.removeItem(KEY_USER_DATA);
    event.target.reset()
}

function getUserData () {
    const userData = {
        email: form.email.value,
        message: form.message.value
    };
    return userData;

    // if (event.target.name === 'email') {
    //     userData.email = event.target.value;
    // }
    // if(event.target.name === 'message') {
    //     userData.message = event.target.value;
    // }

    // userData[event.target.name] = event.target.value
}

function saveToLocal(data) {
    localStorage.setItem(KEY_USER_DATA, JSON.stringify(data));
    return;
}