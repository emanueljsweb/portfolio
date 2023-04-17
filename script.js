function toggleMenu() {
    var menuContainer = document.getElementById("menu-container");
    var navigation = document.getElementById("navigation");
    var hamburgerButton = document.getElementById("main-menu-button");
    var menuLinkList = document.getElementById("main-menu");
    var contentBlock = document.getElementById("content-block");

    menuContainer.classList.toggle("is-active");
    navigation.classList.toggle("is-active");
    hamburgerButton.classList.toggle("is-active");
    menuLinkList.classList.toggle("is-active");
    contentBlock.classList.toggle("is-active");
}

function closeMenu() {
    var menuContainer = document.getElementById("menu-container");
    var navigation = document.getElementById("navigation");
    var hamburgerButton = document.getElementById("main-menu-button");
    var menuLinkList = document.getElementById("main-menu");
    var contentBlock = document.getElementById("content-block");

    menuContainer.classList.remove("is-active");
    navigation.classList.remove("is-active");
    hamburgerButton.classList.remove("is-active");
    menuLinkList.classList.remove("is-active");
    contentBlock.classList.remove("is-active");
}

var menuLinks = document.getElementById("main-menu").children;
for (let i = 0; i < menuLinks.length; i++) {
    const link = menuLinks[i];
    link.addEventListener("click", closeMenu);
}

var contentBlock = document.getElementById("content-block");
contentBlock.addEventListener("click", closeMenu);