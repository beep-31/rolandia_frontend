$(document).ready(function(){
    $("#search_icon").click(function(){
        if($('#searchbox').css("left")=='-300px'){
            $("#searchbox").animate({left:'0px'}, 300);
        } else{
            $("#searchbox").animate({left:'-300px'}, 300);
        }
        
    });
});