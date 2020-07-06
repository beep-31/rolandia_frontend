$(document).ready(function(){
    $("#search_icon").click(function(){
        $("#searchbox").toggleClass('search-input--active');
    });

    $("#burger").click(function(){
        if ($("#burger").hasClass('header__burger--closed')){
            $("#burger").removeClass('header__burger--closed');
            $("#burger").addClass('header__burger--opened');
        } else{
            $("#burger").removeClass('header__burger--opened');
            $("#burger").addClass('header__burger--closed');
        }
    });
});