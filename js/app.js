$(document).ready(function(){

     $(".buttons .btn").click(function(){

         var $element = $(this).data("id");
         $(this).toggleClass("active").prev("div .btn").toggleClass("no-active");

         $("#" + $element).prev("div").hide();
         $("#" + $element).next("div").hide();
         $("#" + $element).fadeIn();

    });


    $("#mail p").click(function(){
        $(this).next("p").fadeToggle();
    });
    $("#new p").click(function(){
        $(this).next("p").fadeToggle();
    });


     $(".panel .btn").click(function(){

         var $element = $(this).data("id");
         $(this).toggleClass("active").prev("div .btn").toggleClass("no-active");

         $("#" + $element).prev("div").hide();
         $("#" + $element).next("div").hide();
         $("#" + $element).fadeIn();

    });




    /*

    $("#new").addClass("display-it");

    $(".button .btn").click(function(){

        var id = $(this).data("id");

        $("#"+id).removeClass("display-it");

    })



    $("#new > p").click(function(){
        $(this).next("p").toggleClass("display-it");
    });*/
});
