function toggleMenu() {
    var sideNav = document.getElementById("side-nav");
    var mainContent = document.getElementById("main-content");

    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        mainContent.style.marginLeft = "0";
    } else {
        sideNav.style.width = "250px";
        mainContent.style.marginLeft = "250px";
    }
}