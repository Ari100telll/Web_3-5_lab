import { data, createData, push_event } from "./create_elements.js";
import { sortFunction, desortFunction } from "./sort_script.js";
import { countTotalPrice } from "./counter_script.js";
import { cleanSearch, search } from "./search_script.js";

const checkbox = document.getElementById('checkbox');
const count_button = document.getElementById("count_button");
const search_bar = document.getElementById("search_bar");
const search_clean = document.getElementById("search_clean");

createData();


checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        sortFunction(data);
        search(data);
    } else {
        desortFunction(data);
        search(data);
    }
});

count_button.addEventListener("click", () => {
    countTotalPrice(data);
});

search_bar.addEventListener("keyup", () => {
    search(data);
})

search_clean.addEventListener("click", () => {
    cleanSearch();
    search(data);
});

function Remove() {
    alert(1);
}