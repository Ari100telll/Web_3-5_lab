export function countTotalPrice(data) {
    let count = 0;
    const contents = document.getElementsByClassName("content_block");
    for (let i = 0; i < data.length; i++) {
        if (contents[i].style.display == "flex") {
            count += parseInt(data[i]["price_in_uah"]);
        }
    }
    const total = document.getElementsByClassName('total_text');
    total[0].innerHTML = `Total expensive: ${count}`;
}