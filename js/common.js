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
$('#link_select').change(function () {
    var v = $(this).val();
    if (v == '')
        return;
    window.open(v);
});
var np = 0;
var nmax = 1;
var maxsize = 1;
var scrollpress = 189;
$(function () {
    nmax = $('#xmlist dl').size();
    if (nmax > maxsize) {
        var _lilast = new Array();
        var _lifirst = new Array();
        for (var i = 0; i < maxsize; i++) {
            _lifirst.push('<dl style="width:187px; float:left ">' + $('#xmlist dl').eq(i).html() + '</dl>');
            _lilast.push('<dl style="width:187px; float:left ">' + $('#xmlist dl').eq(nmax - i - 1).html() + '</dl>');
        }
        for (var i = 0; i < nmax; i++) {
            $('#xmlist').prepend(_lilast[i]);
            $('#xmlist').append(_lifirst[i]);
        }
        $('#xmlist').css({ 'left': '-' + (maxsize * scrollpress) + 'px' });

        $('a[rel=toright]').click(function () {
            $('a[rel=toright],a[rel=toleft]').addClass('hover');
            $(this).removeClass('hover');
            if (np < 1) {
                np--;
                if (np > 0 - maxsize) {
                    $('#xmlist').stop().animate({ 'left': '-' + ((scrollpress) * (maxsize + np)) + 'px' }, 600, function () { });
                } else {
                    $('#xmlist').stop().animate({ 'left': '-' + ((scrollpress) * (maxsize + np)) + 'px' }, 600, function () {
                        $(this).css({ 'left': '-' + ((scrollpress) * (nmax)) + 'px' });
                    });
                    np = nmax - maxsize;
                }
                return false;
            }
            np--;
            $('#xmlist').stop().animate({ 'left': '-' + ((scrollpress) * (maxsize + np)) + 'px' }, 600, function () { });
            return false;
        });

        $('a[rel=toleft]').click(function () {
            $('a[rel=toright],a[rel=toleft]').addClass('hover');
            $(this).removeClass('hover');
            if (np >= nmax - 1) {
                $('#xmlist').stop().animate({ 'left': '-' + ((scrollpress) * (maxsize + np + 1)) + 'px' }, 600, function () {
                    $(this).css({ 'left': '-' + (maxsize * scrollpress) + 'px' });
                });
                np = 0;

                return false;
            }
            np++;
            $('#xmlist').stop().animate({ 'left': '-' + ((scrollpress) * (maxsize + np)) + 'px' }, 600, function () { });

            return false;
        });
    }

    if ($('#newslist .news_list').size() > 1) {
        setInterval(function () {
            var piclist = $('#newslist');
            var firstli = piclist.find('.news_list').eq(0);
            piclist.stop().animate({ 'top': '-87px' }, 600, function () {
                piclist.children('.news_list').eq(0).remove();
                piclist.append(firstli);
                piclist.css({ 'top': '0' });
            });
        }, 3600);
    }

    setInterval(function () { $('a[rel=toleft]').click(); }, 4000);
});
