function responsiveMenu() {
    let menu = document.querySelector(".menu");
    let outMenu = document.querySelector('.out-menu')
    let section = document.getElementsByTagName('body')[0]
    if (window.screen.width <= 600) {
        if (menu.className === "menu") {
            menu.className += " responsive";
            outMenu.style.display = 'block';
            section.style.overflow = 'hidden'

        } else {
            menu.className = "menu";
            outMenu.style.display = 'none'
            section.style.overflow = 'auto'

        }
    }
}
document.querySelector('.menu-icon').addEventListener('click', () => {
    responsiveMenu()
})
document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', () => {
        responsiveMenu()
    })
})
document.querySelector('.out-menu').addEventListener('click', () => {
    responsiveMenu()
})