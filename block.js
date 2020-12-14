$(document).ready(function(){     
    //Dès qu'on clique sur .b1, on applique hide() au titre
    $(".b2").click(function(){
        $("#html-box").hide();
        $("#css-box").show();
    });
    
    //Dès qu'on clique sur .b1, on applique show() au titre
    $(".b1").click(function(){
        $("#html-box").show();
        $("#css-box").hide();
    });
});