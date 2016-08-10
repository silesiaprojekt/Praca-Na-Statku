$(document).ready(function(){


     $(".buttons .btn").click(function(){

         var $element = $(this).data("id");

         $("#" + $element).prev("div").hide();
         $("#" + $element).next("div").hide();
         $("#" + $element).fadeIn();


    });


    $(".buttons .btn").click(function(){

        $(this).addClass("active");

});


    $("#mail p").click(function(){
        $(this).next("p").fadeToggle();
    });
    $("#new p").click(function(){
        $(this).next("p").fadeToggle();
    });


     $(".panel .btn").click(function(){

         $(".panel .btn").first().addClass("active");
         var $element = $(this).data("id");
         $(this).addClass("active").prev("div .btn").removeClass("in-active");

         $("#" + $element).prevAll("div").hide();
         $("#" + $element).nextAll("div").hide();
         $("#" + $element).fadeIn();

    });



     $(".opt").addClass("not-display");
    $("#opt").click(function(){
       $(".opt").fadeToggle("display-it");
    });

    $(".help").addClass("not-display");
    $("#help").click(function(){
       $(".help").fadeToggle("display-it");
    });



    $("#log-off").click(function(){
        alert("To jest wersja demo, nie można się wylogować!")
    })






    $(".help i").click(function(){
        $(".help").hide();
    });

    $(".opt i").click(function(){
        $(".opt").hide();
    });


    $(".finanse").addClass("not-display");
    $(".certyfikaty").addClass("not-display");
    $(".armatorzy").addClass("not-display");

    $(".main li").click(function(){


         var $element = $(this).data("id");
        $("#" + $element ).addClass("display-it")


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
