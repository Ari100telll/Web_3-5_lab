const remove_button = document.getElementById("remove");
const back_button = document.getElementById("back");


url = "http://127.0.0.1:5000/children-event/";

remove_button.addEventListener("click", async() => {
    let location = window.location;
    let url_n = new URL(location);
    let search_params = url_n.searchParams;
    let id = search_params.get('id');
    let response = await fetch(url + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    if (!response.ok) {
        alert("Ошибка HTTP: " + response.status);
    } else {
        window.location.href = 'http://127.0.0.1:5500';
    }
});

back_button.addEventListener("click", async() => {
    window.location.href = 'http://127.0.0.1:5500';
});