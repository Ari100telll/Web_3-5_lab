import { push_event } from "./create_elements.js";

export function sortFunction(data) {
    content.innerHTML = "";
    let new_data = data.slice();
    new_data.sort((first, second) => (first['price_in_uah'] - second['price_in_uah']));
    new_data.forEach(element => push_event(element));
}

export function desortFunction(data) {
    content.innerHTML = "";
    data.forEach(element => push_event(element));
}