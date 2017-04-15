
//滚动-------------------------------------------------------------------Begin

var MarqueeDivControl = new Marquee(["MarqueeDiv", "MarqueeDivBoxent"], 2, 0.2, 780, 85, 20, 3000, 3000, 390)//向左翻屏滚动、缓动及跳过等待时间实例
document.getElementById("scroll_left").onclick = function () { MarqueeDivControl.Run(2) };	//跳过等待时间向左滚动后保持原向运动
document.getElementById("scroll_right").onclick = function () { MarqueeDivControl.Run(3) };	//跳过等待时间向右滚动后保持原向运动

//滚动-------------------------------------------------------------------End



//视频播放---------------------------------------------------------------Begin

var flashvars = {
    f: 'http://www.gdceg.com/data/video/cis.flv',
    c: 0,
    b: 1
};
var params = { bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent' };
CKobject.embedSWF('ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '600', '400', flashvars, params);
/*
CKobject.embedSWF(播放器路径,容器id,播放器id/name,播放器宽,播放器高,flashvars的值,其它定义也可省略);
下面三行是调用html5播放器用到的
*/
var video = ['http://www.gdceg.com/data/video/cis.flv->video/flv', 'http://www.ckplayer.com/webm/0.webm->video/webm', 'http://www.ckplayer.com/webm/0.ogv->video/ogg'];
var support = ['iPad', 'iPhone', 'ios', 'android+false', 'msie10+false'];
CKobject.embedHTML5('a1', 'ckplayer_a1', 600, 400, video, flashvars, support);


function closelights() {//关灯
    alert(' 本演示不支持开关灯');
}
function openlights() {//开灯
    alert(' 本演示不支持开关灯');
}

//视频播放---------------------------------------------------------------End



//项目展示+新闻滚动---------------------------------------------------------------Begin

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

//项目展示---------------------------------------------------------------End