const create_form = document.getElementById("create_form");

const url = "http://127.0.0.1:5000/children-event";

create_form.addEventListener('submit', async(event) => {
    event.preventDefault()
    let date = {
            name: create_form.name.value,
            contact_number: create_form.tel.value,
            price_in_uah: create_form.price.value,
            max_quantity_of_children: create_form.max_count.value,
            duration_in_minutes: create_form.duration.value,
        }
        // let json_data = JSON.stringify(date);
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    });
    if (!response.ok) {
        alert("Ошибка HTTP: " + response.status);
    } else {
        window.location.href = 'http://127.0.0.1:5500';
    }
});