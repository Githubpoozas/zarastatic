$(document).ready(function(){

    if (window.matchMedia('(max-width: 768px)').matches){ 
        $('.smallImg').hide();
        $('.bigImg').show();

} else{
    $('.smallImg').show();
        $('.bigImg').hide();
}
    });