$(function () {
    $(".menu li:has(div)").hover(function () {
        $(this).children(".menuson").stop().slideDown(400);
    }, function () {
        $(this).children(".menuson").stop().slideUp(0);
    });
    $(".menuson-one li:has(div)").hover(function () {
        $(this).children(".menuson-two").stop().slideDown(0);
        $(this).children("a").addClass("hover");
    }, function () {
        $(this).children(".menuson-two").stop().slideUp(0);
        $(this).children("a").removeClass("hover")
    });
    $(".more-box-on").hover(function () {
        $(this).find("img").stop().animate({ left: 0 }, 500);
    }, function () {
        $(this).find("img").stop().animate({ left: -66 }, 500);
    });

    $(".main-left .title").append("<div class='t_txt'><img src='../images/pinbo.jpg' /></div>");
    $(".t_txt").delay(500).animate({
        opacity: 1,
        right: 0
    }, 800, "easeOutBack");
    $(".sibarLink").hover(function () {
        $(this).children(".sibarLinkCon").show()
    }, function () {
        $(this).children(".sibarLinkCon").hide()
    })
    $(".footerLink").hover(function () {
        $(this).children(".footerLinkCon").show()
    }, function () {
        $(this).children(".footerLinkCon").hide()
    })
    $(".linkpic").hover(function () {
        $(this).find(".mask").stop(true, false).fadeTo(550, 1);
        $(this).find("p").stop(true, false).animate({ width: "100%" })
        $(this).find("h1").stop(true, false).animate({ top: 0 })
        $(this).find("h2").stop(true, false).animate({ bottom: 0 })
    }, function () {
        $(this).find(".mask").stop(true, false).fadeTo(450, 0);
        $(this).find("p").stop(true, false).animate({ width: 0 })
        $(this).find("h1").stop(true, false).animate({ top: -20 })
        $(this).find("h2").stop(true, false).animate({ bottom: -20 })
    })
    $(".video").hover(function () {
        $(this).find(".yy").stop(true, false).fadeTo(550, 1);
    }, function () {
        $(this).find(".yy").stop(true, false).fadeTo(450, 0);
    })
})

function tabChange(obj, id) {
    var arrayli = obj.parentNode.getElementsByTagName("li"); 
    var arrayul = document.getElementById(id).getElementsByTagName("dl"); 
    for (i = 0; i < arrayul.length; i++) {
        if (obj == arrayli[i]) {
            arrayli[i].className = "cli";
            arrayul[i].className = "";
        }
        else {
            arrayli[i].className = "";
            arrayul[i].className = "hidden";
        }
    }
}