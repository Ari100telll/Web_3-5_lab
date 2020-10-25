export let data = [];
export let names = ['Пінна Вечірка', 'День Народження', 'Повітрянні кульки', 'Аніматори', 'Батут'];
const url = "http://127.0.0.1:5000/children-event";


export async function createData() {

    let response = await fetch(url);

    if (response.ok) {
        let json = await response.json();
        data = json;
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    data.forEach(element => push_event(element));
}

const shemaEventCreate = ({ id, name, contact_number, price_in_uah, max_quantity_of_children, duration_in_minutes }) => `
<div class="content_img">
    <img src="IMG/Event_${id}.jpg" alt="">
</div>
<div class="content_Name">
    <h2>${name}</h2>
</div>
<div class="content_tel_num">Тел.: ${contact_number}</div>
<div class="content_duration">Тривалість: ${duration_in_minutes}</div>
<div class="content_prise">Ціна: ${price_in_uah} UAH</div>
<div class="content_children_Quantity">Максимум людей: ${max_quantity_of_children}</div>
<div class="content_buttons">
    <a href="http://127.0.0.1:5500/Edit.html?id=${id}" class="Edit">
        Edit
    </a>
    <a href="http://127.0.0.1:5500/Delete.html?id=${id}" class="Remove">
        Remove
    </a>
</div>`;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateTelNum() {
    let tel = "+380";
    for (let i = 0; i < 9; i++) {
        tel += getRandomInt(10);
    }
    return tel;
}

export function push_event(event) {
    const element = document.createElement('div');
    element.classList.add("content_block");
    element.style.display = "flex";
    element.innerHTML = shemaEventCreate(event);
    content.appendChild(element);
}