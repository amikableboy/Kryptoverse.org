(function ($) {
    "use strict";
    $('body').scrollspy({
        target: '#bs-example-navbar-collapse-1'
    });
    //animation scroll js
    var nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* navOffset ends */


    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });

    /*=========================================================================
	Webticker Active
=========================================================================*/
    $('#webTicker').webTicker({
        duplicate: true,
        height: "40px"
    });
    /* -------------------------------------- Preloader jQuary --------------------------------- */

    $(window).load(function () {
        $('.preloader').fadeOut(2500);
    });

    /* -------------------------------------- FQR jQuary --------------------------------- */
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('fa-plus fa-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);


    /* --------------------------------------  Top to Bottom --------------------------------- */

    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        var bc2top = $(".back-top-btn");
        if ($scrolling > 200) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });

    $window.on('scroll', function () {

        var scrollPos = $window.scrollTop();

        if (scrollPos >= navOffset) {
            $('header nav').addClass('navbar-position');
        } else {
            $('header nav').removeClass('navbar-position');
        }


    });
// Bar Chart
                var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
                var barChartData = {
                  labels : ["January","February","March","April","May","June","July"],
                  datasets : [
                    {
                      fillColor : "rgb(1,0, 92)",
                      strokeColor : "rgb(1,0, 92)",
                      highlightFill: "rgba(0, 0, 0, 0.75)",
                      highlightStroke: "rgba(0, 0, 0, 1)",
                      data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                    },
                    {
                      fillColor : "rgb(255,174,17)",
                      strokeColor : "rgb(255,174,17)",
                      highlightFill : "rgba(151,187,205,0.75)",
                      highlightStroke : "rgba(151,187,205,1)",
                      data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                    }
                  ]

                }


                //window load
                window.onload = function(){

                  var chart_barChart = document.getElementById("barChart").getContext("2d");
                  window.myBar = new Chart(chart_barChart).Bar(barChartData, {
                    responsive : true
                  });
                }

    // feature design hover js ends     

})(jQuery);