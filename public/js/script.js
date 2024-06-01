const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

menuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('open');
    body.classList.toggle("disabledScroll");
})

window.onscroll = () => {
    this.scrollY > 20 ? navigation.classList.add("sticky") : navigation.classList.remove("sticky");
}