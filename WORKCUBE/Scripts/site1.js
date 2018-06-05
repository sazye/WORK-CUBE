
///
jQuery(document).ready(function ($) {
    init_width();
    $(window).resize(function () {
        init_width();
    });
    function init_width() {
        var width = parseInt($(window).width(), 0);
        var height = parseInt($(window).height(), 0);
        console.log(width);
        $('.itemwrap li:first').addClass("current");
        $(".tk_logo").css({ marginTop: "10px", width: "254px" });
        $(".p1").css({ marginTop: "50px", marginBottom: "30px", fontSize: "20px", lineHeight: "1.5em" });
        if (width < 1367) {
            $(".tk_logo").css({ marginTop: "10px", width: "185px" });
            $(".p1").css({ marginTop: "10px", marginBottom: "15px", fontSize: "14px", lineHeight: "1.3em" });
            if (width < 450) {
                $(".p1").css({ marginTop: "10px", marginBottom: "15px", fontSize: "14px", lineHeight: "1.3em" });
            }
        }
        //LeftRight
        $(".contentleft").css({ width: "80%" });
        $(".contentright").css({ width: "20%", position: "fixed", float: "none", height: height + "px", paddingBottom: "0" });
        if (width < 1180) {
            $(".contentleft").css({ width: "75%" });
            $(".contentright").css({ width: "25%", position: "fixed", float: "none", height: height + "px", paddingBottom: "0" });
            if (width < 768) {
                $(".contentleft").css({ width: "100%" });
                $(".contentright").css({ width: "100%", position: "relative", float: "left", height: "initial", paddingBottom: "10px" });
            }
        }


        //Galeri
        $(".component nav").css({ left: "-60px" });
        $("#component").css({ height: "446px", width: "85%" });
        $(".p6").css({ fontSize: "23px", lineHeight: "23px", letterSpacing: "5px" });
        if (width < 1180) {
            $(".component nav").css({ left: "0px" });
            if (width < 500) {
                $("#component").css({ height: "350px", width: "96%" });
                $(".p6").css({ fontSize: "17px", lineHeight: "17px", letterSpacing: "1px" });
            }
        }

        //Footer
        $(".footeric").css({ height: "81px" });
        $(".bottomsocial").css({ position: "absolute", left: "10px", right: "10px", bottom: "10px", width: "178px", float: "left", marginTop: "initial", marginBottom: "initial" });
        $(".bottomsocial a").css({ float: "left" });
        $(".tklogo_img").css({ width: "200px" });
        $(".telno").css({ fontSize: "30px", marginTop: "32px" });
        $(".ikonbox").css({ width: "170px" });
        $(".ikonbox span").css({ fontSize: "16px" });
        if (width < 620) {
            $(".footeric").css({ height: "initial" });
            $(".bottomsocial").css({ position: "relative", left: "initial", right: "initial", bottom: "initial", width: "100%", float: "left", marginTop: "10px", marginBottom: "10px" });
            $(".bottomsocial a").css({ float: "none" });
            $(".ikonbox").css({ width: "135px" });
            $(".ikonbox span").css({ fontSize: "13px" });
            if (width < 380) {
                $(".tklogo_img").css({ width: "140px" });
                $(".telno").css({ fontSize: "22px", marginTop: "27px" });
            }
        }
    }
    $('.fancybox').fancybox();
});
///

    jQuery(document).ready(function ($) {
        init_footer();
    $(window).resize(function () {
        init_footer();
    });
             function init_footer() {
                 var width = parseInt($(window).width(), 0);
                 var height = parseInt($(window).height(), 0);
                 console.log(width);
                 /*Footer*/
                 $(".span12").css({fontSize: "15px", float: "left", marginLeft: "115px" });
                 $(".footer").css({height: "200px" });
                 $(".footerbox").css({width: "33.33%" });
                 $(".span13").css({marginLeft: "0px", marginTop: "71px" });
                 $(".span15").css({marginTop: "53px", float: "left", width: "100%", marginBottom: "10px" });
                 $(".span16").css({float: "left", width: "100%" });
                 $(".footerlogo_img").css({position: "absolute", top: "45px" });
                 $(".span15 img,.span16 img").css({display: "inline-block" });
                 $(".socialall2").css({marginTop: "95px", paddingLeft: "80px" });
                 $(".socialall2 .telsoc").css({width: "auto", marginLeft: "10px" });
                 $(".socialall2 .linesoc").css({float: "left" });
                 $(".socialall2 .watssoc").css({float: "left" });
                 $(".socialall2 .imosoc").css({float: "left" });
                 if (width < 955) {
        $(".socialall2 .telsoc").css({ width: "100%", marginLeft: "0px" });
    $(".socialall2 .linesoc").css({float: "none" });
                     $(".socialall2 .watssoc").css({float: "none" });
                     $(".socialall2 .imosoc").css({float: "none" });
                     if (width < 790) {
        $(".span12").css({ fontSize: "13px", float: "left", marginLeft: "115px" });
    if (width < 750) {
        $(".footer").css({ height: "initial" });
    $(".footerbox").css({width: "100%" });
                             $(".span12").css({fontSize: "13px", float: "none", marginLeft: "15px" });
                             $(".span13").css({marginLeft: "0px", marginTop: "43px" });
                             $(".span15").css({marginTop: "25px", float: "none", width: "auto", marginBottom: "0" });
                             $(".span16").css({float: "none", width: "auto" });
                             $(".footerlogo_img").css({position: "relative", top: "32px" });
                             $(".socialall2").css({marginTop: "25px", paddingLeft: "0px" });
                             if (width < 450) {
        $(".span15 img,.span16 img").css({ display: "none" });
    }
                         }
                     }
                 }

             }
         });
         $(window).on('scroll', function () {
             var width = parseInt($(window).width(), 0);
             if ($(window).scrollTop() > 50) {
        $('.mobilediv').addClass('navbar-fixed-top animated fadeInDown');
    }
             else {
        $('.mobilediv').removeClass('navbar-fixed-top animated fadeInDown');
    }
         });
   
  
        $(function () {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() + $(window).height() + 200 > $(document).height()) {
                    $(".bottomcontacts").addClass("classbottom");
                }
                else {
                    $(".bottomcontacts").removeClass("classbottom");
                }
            });

         });
///
        $(function () {
            $("#txtTel1").intlTelInput();
            var deger1 = 0;
            var deger2 = 0;

            $(".topsharebtn").hover(
                function () {
                    $(".social-share-wrapper").addClass("social-share-wrapper-active social-share-wrapper-shadow");
                }, function () {
                    $(".social-share-wrapper").removeClass("social-share-wrapper-active social-share-wrapper-shadow");
                }
            );

            $("#carousel-img-carousel").owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: false,
                autoplaySpeed: 1000,
                autoplayTimeout: 5000,
                smartSpeed: 450,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    768: {
                        items: 3
                    },
                    1170: {
                        items: 3
                    }
                }
            });

        });

//
      

  