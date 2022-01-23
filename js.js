$(document ).ready(function(){
    $(".header-burger").click(function(event){
    $(".header-burger, .firstNavigation").toggleClass("active");
    $("body").toggleClass("lock");
    })
})