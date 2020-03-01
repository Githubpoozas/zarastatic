$(document).ready(function(){

    $(".sidebar__menu__category-name").on("click",function(){
        console.log('click');

            console.log($(this).parent().next().toggleClass('showmenu'))
        
    })

    $(".header__menu").on("mouseenter",function(){
        $(".sidebar").addClass("sidebar-show")
    })

    $(".sidebar").on("mouseleave",function(){
        $(".sidebar").removeClass("sidebar-show")
    })

})