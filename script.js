const header = document.querySelector(".container");
const dark = document.querySelector(".dark");
const headerContent = document.querySelector(".header-content");
const image = document.querySelector(".image")

$(window).scroll(function () {
    if ($(window).scrollTop() >= 30 ) {
        $('nav').addClass("nav-white")
    } else {
        $('nav').removeClass("nav-white")
    }
})

$(window).scroll(function () {
    if ($(window).scrollTop() >= 722 && $(window).scrollTop() <= 1444) {
        dark.style.width = "0px";
        headerContent.style.color = "#000";
    } else {
        dark.style.width = "50vw";
        headerContent.style.color = "#fff";
    }
})

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1444 && $(window).scrollTop() <= 2166 + 722){
        $('.image').addClass("fixed")
    } else {
        $('.image').removeClass("fixed");

    }
})