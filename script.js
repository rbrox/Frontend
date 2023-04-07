const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            console.log(index)
            menu.dataset.activeIndex = index;
        }
    });