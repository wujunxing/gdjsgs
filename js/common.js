$(function () {
    /*主要导航菜单*/
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

    /*底部友情链接*/
    $(".footerLink").hover(function () {
        $(this).children(".footerLinkCon").show()
    }, function () {
        $(this).children(".footerLinkCon").hide()
    })

})

/*切换函数*/
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