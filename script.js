    $(".p2").hide();
    $(".p3").hide();
    $(".p4").hide();
    $(".Liverpool").hide();
$(".UCL").click(function() {
    $(".Barca").show();
    $(".p2").hide();
    $(".p3").hide();
    $(".p4").hide();
    $(".p").show();
    $(".Liverpool").hide();
    
});
$(".p").click(function() {
    $(".Liverpool").hide();
    $(".p2").show();
    $(".Barca").hide();
});
$(".p").dblclick(function() {
    $(".Liverpool").show();
    $(".Barca").hide();
    $(".p3").show();
    $(".p2").hide();
    $(".p").hide();
    
});
$(".Liverpool").click(function() {
   $(".p4").show();
   $(".p3").hide();
});
