$(document).ready(function() {

    $('.button-collapse').sideNav({
        // menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });

    $('.scrollspy').scrollSpy();

    var actdim = $("#myimagemain").height()


    $(window).scroll(function() {
        var winheight = $(window).scrollTop();
        // $(".fadeaway").css("opacity", 0.4 + winheight / 450);
        var dim = winheight / 8;
        if (dim < 65) {
            $("#res_img").height(dim);
            $("#res_img").width(dim);
        }
        var imdim = actdim - winheight / 3;
        if (imdim > 80) {
            $("#myimagemain").height(imdim);
            $("#myimagemain").width(imdim);
        }

    });

    $(".brand-logo").click(function() {
        jQuery('html,body').animate({ scrollTop: 0 }, 3000);
    })

    // $(document).bind("contextmenu copy paste cut drag drop ",function(e) {return false;});


})

// $(".fadeaway").css("opacity", 0.4);
// $("#myimagemain").css("opacity", 1);