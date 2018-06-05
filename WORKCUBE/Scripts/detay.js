
    $(document).ready(function () {
        $('#image-gallery').lightSlider({
            gallery: true,
            item: 1,
            thumbItem: 9,
            slideMargin: 0,
            speed: 500,
            auto: true,
            loop: true,
            onSliderLoad: function () {
                $('#image-gallery').removeClass('cS-hidden');
            }
        });
    var datas = [
             {'id': '10', 'address': 'NAR001', 'lng': '28.901112', 'lat': '41.022262' },
            ]
            var iconURLPrefix = '';
            var icons = [iconURLPrefix + '/Content/images/pin.png'];
            var icons_length = icons.length;
            var iconShadow = {
        anchor: new google.maps.Point(15, 33)
            };
            var gmarkers = [];
            var map = null;
            var infowindow = new google.maps.InfoWindow();
            function createMarker(latlng, address, id) {
                var index = 0;
                var marker = new google.maps.Marker({
        position: latlng,
                    icon: icons[index],
                    shadow: iconShadow,
                    map: map,
                    address: address,
                    zIndex: Math.round(latlng.lat() * -100000) << 5
                });
                gmarkers.push(marker);
                google.maps.event.addDomListener(window, "resize", function () {
                    var center = map.getCenter();
                    google.maps.event.trigger(map, "resize");
                    map.setCenter(center);
                });
            }
           
        });
 
  
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
        '../../connect.facebook.net/en_US/fbevents.js');
        fbq('init', '135565883959470');
        fbq('track', 'PageView');


        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-97565262-1');


        jQuery(document).ready(function ($) {
            init_projectdetail();
            $(window).resize(function () {
                init_projectdetail();
            });
            function init_projectdetail() {
                var width = parseInt($(window).width(), 0);
                var height = parseInt($(window).height(), 0);
                console.log(width);
                $("#projectul").css("left", "-275px");
                //Topslider
                $(".detailtopleft").css({ width: "60%" });
                $(".detailtopright").css({ width: "40%", padding: "30px", height: "530px" });
                $(".span18").css({ width: "260px" });
                $(".span17").css({ width: "150px" });
                $(".ikinokta").css({ display: "block" });
                if (width < 1200) {
                    $(".detailtopleft").css({ width: "50%" });
                    $(".detailtopright").css({ width: "50%", padding: "30px", height: "530px" });
                    $(".span18").css({ width: "auto" });
                    if (width < 840) {
                        $(".detailtopleft").css({ width: "100%" });
                        $(".detailtopright").css({ width: "100%", padding: "10px", height: "530px" });
                        $(".span17").css({ width: "50%" });
                        $(".span18").css({ width: "50%" });
                        if (width < 540) {
                            $(".span17").css({ width: "100%" });
                            $(".span18").css({ width: "100%" });
                            $(".ikinokta").css({ display: "none" });
                            $(".detailtopright").css({ width: "100%", padding: "10px", height: "initial" });
                        }
                    }
                }
                //Projealt
                $(".detailmidle .left").css({ width: "65%" });
                $(".detailmidle .right").css({ width: "35%" });
                $(".leftform").css({ paddingLeft: "45px" });
                $(".inputbox").css({ marginRight: "0px", maxWidth: "345px" });
                $(".span19").css({ maxWidth: "345px" });
                $(".p8").css({ marginTop: "0px" });
                if (width < 905) {
                    $(".detailmidle .left").css({ width: "100%" });
                    $(".detailmidle .right").css({ width: "100%" });
                    $(".leftform").css({ paddingLeft: "10px" });
                    $(".inputbox").css({ marginRight: "10px", maxWidth: "345px" });
                    $(".p8").css({ marginTop: "20px" });
                    if (width < 740) {
                        $(".inputbox").css({ marginRight: "0px", maxWidth: "100%" });
                        $(".span19").css({ maxWidth: "100%" });
                    }
                }
                //PopularProjects
                var slidewidth = $(".projectslider").outerWidth();
                var liwidth = slidewidth / 2;
                $(".proleft").css({ left: "-55px" });
                $(".proright").css({ right: "-55px" });
                $(".spanphone").css({ bottom: "14px", top: "initial" });
                $("#projectul").css({ left: "-275px" });
                $("#projectul li").css({ width: "275px" });
                $(".spanplus").css({ left: "initial" });
                $(".sliderdis").css({ marginBottom: "20px" });
                if (width < 1215) {
                    $(".proleft").css({ left: "15px" });
                    $(".proright").css({ right: "15px" });
                    $(".spanphone").css({ bottom: "initial", top: "14px" });
                    if (width < 1100) {
                        $("#projectul").css({ left: -liwidth + "px" });
                        $("#projectul li").css({ width: liwidth + "px" });
                        if (width < 565) {
                            $("#projectul").css({ left: -slidewidth + "px" });
                            $("#projectul li").css({ width: slidewidth + "px" });
                            $(".spanplus").css({ left: "10px" });
                            $(".sliderdis").css({ marginBottom: "0px" });
                        }
                    }
                }
            }
            new WOW().init();
        });

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        $(function () {
            $("#image-gallery").lightGallery({
                selector: "#image-gallery li",
                cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
                download: true,
                thumbnail: false
            });
            jQuery(document).ready(function () {
                jQuery("form").validationEngine('attach', {
                    promptPosition: "topLeft",
                    scroll: false,
                    autoHidePrompt: true,
                    autoHideDelay: 1500
                });
            });
            $(".midleslider .item").swipeleft(function () {
                var val = $(".item:visible").prev().attr("data-id");
                if (val != "" && val != null) {
                    $(".item:visible").prev().show().next().hide();
                    $(".item").removeClass("fadeInLeft animated").removeClass("fadeInRight animated");
                    $(".item").addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).find(".item").removeClass("fadeInRight animated");
                    });
                }
                else {
                    $(".item:visible").hide();
                    $(".item:last").show();
                    $(".item").removeClass("fadeInLeft animated").removeClass("fadeInRight animated");
                    $(".item").addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).find(".item").removeClass("fadeInRight animated");
                    });
                }
            });
            $(".midleslider .item").swiperight(function () {
                var val = $(".item:visible").next().attr("data-id");
                if (val != "" && val != null) {
                    $(".item:visible").next().show().prev().hide();
                    $(".item").removeClass("fadeInRight animated").removeClass("fadeInLeft animated");
                    $(".item").addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).find(".item").removeClass("fadeInLeft animated");
                    });
                }
                else {
                    $(".item:visible").hide();
                    $(".item:first").show();
                    $(".item").removeClass("fadeInRight animated").removeClass("fadeInLeft animated");
                    $(".item").addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).find(".item").removeClass("fadeInLeft animated");
                    });
                }
            });
            $('.proleft').click(function () {
                projeSlide("right");
                return false;
            });
            $('.proright').click(function () {
                projeSlide("left");
                return false;
            });
            $(".span19").click(function () {
                $.blockUI({
                    message: '<img src="/Content/images/loading.gif" /> Please wait while your form is being sent...'
                });
                var project = "NAR001";
                var namesurname = $("#txtNameSurname").val();
                var email = $("#txtEmail").val();
                var phone = $('#txtPhone').val() + $('#txtPhone2').val();
                var message = $("#txtMessage").val();
                var utm_source = (getParameterByName('utm_source') ? getParameterByName('utm_source') : 'direct');
                var utm_medium = (getParameterByName('utm_medium') ? getParameterByName('utm_medium') : 'direct');
                var utm_campaign = (getParameterByName('utm_campaign') ? getParameterByName('utm_campaign') : 'direct');
                var utm_content = (getParameterByName('utm_content') ? getParameterByName('utm_content') : 'direct');
                var utm_term = (getParameterByName('utm_term') ? getParameterByName('utm_term') : 'direct');
                var valid = $("#form1").validationEngine('validate');
                if (valid == false) {
                    $.unblockUI();
                }
                else {
                    $.ajax({
                        type: "POST",
                        url: "/Main/AddForm",
                        contentType: "application/json; charset=utf-8",
                        data: "{project:'" + project + "',namesurname:'" + namesurname + "',email:'" + email + "',phone:'" + phone + "',message:'" + message + "',utm_source:'" + utm_source + "',utm_medium:'" + utm_medium + "',utm_campaign:'" + utm_campaign + "',utm_content:'" + utm_content + "',utm_term:'" + utm_term + "'}",
                        dataType: "json",
                        success: function (data) {
                            var sonuc = data;
                            if (sonuc == "Ok") {
                                $.unblockUI();
                                window.location.href = "http://www.narusglobal.com/Thankyou";
                                //$("#txtNameSurname").val("");
                                //$("#txtEmail").val("");
                                //$('#txtPhone').val("");
                                //$("#txtMessage").val("");
                                //alert("Your form has successfully been sent. We will get back to you shortly.");
                                //$("#lightalert").css("background", "url('https://cdn3.iconfinder.com/data/icons/watchify-v1-0-32px/32/check-mark-32.png') 1em 50% no-repeat rgb(255, 255, 255)");
                            }
                            else if (sonuc == "No") {
                                $.unblockUI();
                                alert("There was an error sending your form. Please try again.");
                                $("#lightalert").css("background", "url('../../cdn0.iconfinder.com/data/icons/thin-gui-elements-1/24/thin-0155_delete_remove_exit_close_checkbox-32.png') 1em 50% no-repeat rgb(255, 255, 255)");
                            }
                            else {
                                $.unblockUI();
                                alert("You have a registered form for this project.");
                                $("#lightalert").css("background", "url('../../cdn0.iconfinder.com/data/icons/thin-gui-elements-1/24/thin-0155_delete_remove_exit_close_checkbox-32.png') 1em 50% no-repeat rgb(255, 255, 255)");
                            }
                        },
                        error: function (data) {
                        }
                    });
                }
            });
            $(".spanplus").click(function () {
                var href = $(this).attr("data-val");
                window.location.href = href;
            });
        });
        function projeSlide(where) {
            var item_width = $('#projectul li').outerWidth();
            var left_indent = 0;
            if (where == 'left') {
                left_indent = parseInt($('#projectul').css('left')) - item_width;
            }
            else {
                left_indent = parseInt($('#projectul').css('left')) + item_width;
            }
            $('#projectul:not(:animated)').animate({ 'left': left_indent }, 500, function () {
                if (where == 'left') {
                    $('#projectul li:last').after($('#projectul li:first'));
                }
                else {
                    $('#projectul li:first').before($('#projectul li:last'));
                }
                $('#projectul').css({ 'left': -item_width + "px" });
            });
        }