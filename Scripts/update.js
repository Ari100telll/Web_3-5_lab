const update_form = document.getElementById("update_form");

const url = "http://127.0.0.1:5000/children-event/";


update_form.addEventListener('submit', async(event) => {
    let location = window.location;
    let url_n = new URL(location);
    let search_params = url_n.searchParams;
    let id = search_params.get('id');
    event.preventDefault()
    let date = new Object();
    if (update_form.name.value) {
        date["name"] = update_form.name.value;
    }
    if (update_form.tel.value) {
        date["contact_number"] = update_form.tel.value;
    }
    if (update_form.price.value) {
        date["price_in_uah"] = update_form.price.value;
    }
    if (update_form.max_count.value) {
        date["max_quantity_of_children"] = update_form.max_count.value;
    }
    if (update_form.duration.value) {
        date["duration_in_minutes"] = update_form.duration.value;
    }
    let response = await fetch(url + id, {
        method: 'PUT',
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