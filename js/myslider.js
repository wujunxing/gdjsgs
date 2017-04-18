var myslider01 = {
    slidercontent: $("#myslider_content"),
    slideritems: $("#myslider_content .item"),
    slidercount: $("#myslider_content .item").length,
    sliderwidth: $("#myslider_container").width(),
    curitem: 1
}

myslider01.slidercontent.width(10000);
myslider01.slideritems.width(myslider01.sliderwidth).css("float", "left");
myslider01.slideritems.eq(0).clone().appendTo(myslider01.slidercontent);
myslider01.slideritems.eq(myslider01.slidercount - 1).clone().prependTo(myslider01.slidercontent);
myslider01.slidercontent.css({ left: (-myslider01.sliderwidth + "px") });

$("#myslider_nav span").removeClass("cur").eq(0).addClass("cur");

function goto_page(pagenum) {
    $("#myslider_nav span").removeClass("cur").eq(pagenum - 1).addClass("cur");
    var _leftwidth = (-pagenum * myslider01.sliderwidth) + "px";
    myslider01.slidercontent.animate({ left: _leftwidth });
}

$("#myslider_next").click(
    function () {
        if (myslider01.curitem > (myslider01.slidercount - 1)) {
            myslider01.slidercontent.css({ left: "0px" });
            myslider01.curitem = 1;
            goto_page(myslider01.curitem);
        }
        else {
            myslider01.curitem = myslider01.curitem + 1;
            goto_page(myslider01.curitem);
        }
    }
)

$("#myslider_prev").click(
    function () {
        if (myslider01.curitem < 2) {
            var _leftwidth = (-(myslider01.slidercount + 1) * myslider01.sliderwidth) + "px";
            myslider01.slidercontent.css({ left: _leftwidth });
            myslider01.curitem = myslider01.slidercount;
            goto_page(myslider01.curitem);
        }
        else {
            myslider01.curitem = myslider01.curitem - 1;
            goto_page(myslider01.curitem);
        }
    }
)

var myslider_timer;

$("#myslider_nav span").click(
    function () {
        var navid = $(this).index() + 1;
        myslider01.curitem = navid;
        goto_page(navid);
    }
)

$("#myslider_container").hover(
    function () {
        $("#myslider_next").show();
        $("#myslider_prev").show();
        clearInterval(myslider_timer);
    },
    function () {
        $("#myslider_next").hide();
        $("#myslider_prev").hide();
        myslider_timer = setInterval(function () { $("#myslider_next").click(); }, 10000);
    }
)