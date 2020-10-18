export let data = [];
export let names = ['Пінна Вечірка', 'День Народження', 'Повітрянні кульки', 'Аніматори', 'Батут'];

export function createData() {
    for (let i = 0; i < 5; i++) {
        let name = names[i];
        let tel_num = generateTelNum();
        let duration = getRandomInt(300);
        let price = getRandomInt(1500);
        let max_quantity_of_people = getRandomInt(40);
        let event = { 'id': i, 'name': name, 'tel_num': tel_num, 'duration': duration, 'price': price, 'max_quantity_of_people': max_quantity_of_people };
        data[i] = event;
    }
    data.forEach(element => push_event(element));
}

const shemaEventCreate = ({ id, name, tel_num, duration, price, max_quantity_of_people }) => `
<div class="content_img">
    <img src="IMG/Event_${id}.jpg" alt="">
</div>
<div class="content_Name">
    <h2>${name}</h2>
</div>
<div class="content_tel_num">Тел.: ${tel_num}</div>
<div class="content_duration">Тривалість: ${duration}</div>
<div class="content_prise">Ціна: ${price} UAH</div>
<div class="content_children_Quantity">Максимум людей: ${max_quantity_of_people}</div>
<div class="content_buttons">
    <button class="Edit" id ="btn_edit_${id}">
        Edit
    </button>
    <button class="Remove" id = "btn_rm_${id}">
        Remove
    </button>
</div>`;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateTelNum() {
    let tel = "+380"
    for (let i = 0; i < 9; i++) {
        tel += getRandomInt(10);
    }
    return tel;
}

export function push_event(event) {
    const element = document.createElement('div');
    element.classList.add("content_block");
    element.style.display = "flex"
    element.innerHTML = shemaEventCreate(event);
    content.appendChild(element);
}