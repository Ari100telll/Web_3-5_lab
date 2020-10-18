export function cleanSearch() {
    const search_bar = document.getElementsByClassName("search_bar")[0];
    search_bar.value = "";
}

export function search(data) {
    const search_bar = document.getElementsByClassName("search_bar")[0];
    let filter = search_bar.value.toUpperCase();
    for (let i = 0; i < data.length; i++) {
        let event = document.getElementsByClassName("content_block")[i];
        let text = event.getElementsByClassName("content_Name")[0].innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            event.style.display = "flex";
        } else {
            event.style.display = "none";
        }
    }
}