var group = ["阿美族", "泰雅族", "排灣族", "布農族", "卑南族", "魯凱族", "鄒族", "賽夏族", "達悟族", "邵族", "噶瑪蘭族", "太魯閣族", "撒奇萊雅族", "賽德克族", "拉阿魯哇族", "卡那卡那富族"];
var image = ["4", "1", "5", "7", "3", "6", "8", "10", "13", "11", "9", "12", "2", "0", "X", "X"];
var text = [
    "阿美族是原住民族群中人口最多的一族，主要分布在臺灣東部的花蓮、臺東兩縣，以及屏東縣的恆春半島。主要祭典有7月份的豐年祭。5、6月份的漁撈祭。",
    "泰雅族分布在新北市、桃園市、新竹縣、苗栗縣、臺中市、南投縣、宜蘭縣等七縣市的山區各鄉鎮，是臺灣原住民族中分布領域最廣的民族。\n著名的黥(ㄑㄧㄥˊ)面文化。主要祭典有播種祭。祖靈祭，兩者與小米有著密不可分的關係。",
    "排灣族（Paiwan）的分布包含屏東、臺東兩縣為範圍。\n建築特色：石板屋(抵禦強風)。\n主要祭典有小米收穫祭、五年祭。五年祭是排灣族布曹爾群所屬各部落中，祭儀規模最盛大、象徵內涵最豐富的祭典。",
    "布農族部落分布在海拔500 至1,500 公尺中央山脈兩側，是原住民族中分布海拔最高的民族。\n主要祭典有歲時祭典，與小米種植密切結合。4、5月舉行的打耳祭典(也稱打耳祭)",
    "卑南族位於多族群交會的平原地帶，很早與外界文化接觸，卻依然持續維繫傳統文化與生活。\n主要祭典依時間排序為婦女除草完工祭典>>>祖先登陸與發祥地祭祖>>>小米收穫祭>>>年祭（猴祭、大獵祭）",
    "魯凱族部落分布於高雄市、屏東縣與臺東縣三個行政區。\n族花為百合花、代表了社會秩序與倫理。其美術作品常以百步蛇、雲豹為象徵性意義。主要祭典有小米收穫祭、盪鞦韆、黑米祭、萬山祖靈祭",
    "鄒族居住在臺灣中部中高海拔的嘉義阿里山山區。\n飲食文化有著名的竹筒飯。主要祭典有小米收穫祭、凱旋祭(戰祭、團結祭)。",
    "賽夏族分布在以鵝公髻山為界分屬於新竹縣與苗栗縣兩個行政區。\n主要祭典有祖靈祭。巴斯達隘（矮靈祭）、賽夏族人對於矮靈傳說與觀念相當重視，不但在祭典中遵守矮靈禁忌，生活中也遵守許多避諱的風俗，每兩年舉行一次小祭典，每十年舉行一次大祭典。",
    "雅美（達悟）族（Yami/Tao）分布在臺東的蘭嶼鄉蘭嶼島。\n主要祭典有飛魚相關祭典：招魚祭、飛魚收藏祭、飛魚終食祭。收穫祭：在小米收成與飛魚季結束時舉行。落成禮：甩髮舞祭典。",
    "邵族主要居住在南投縣魚池鄉伊達邵部落和水里鄉大坪林聚落。\n早期民族分類上劃歸鄒族。祖靈信仰與公媽籃。氏族祖靈祭。狩獵祭、拜鰻祭。除穢祭等。主要祭典有除穢祭：男性族人全體集合至毛氏祭司家屋前參與除穢儀式，同時長老們商討今年度祖靈祭事宜。女性禁止參加。",
    "噶瑪蘭族位於宜蘭蘭陽平原。\n工藝方面，噶瑪蘭族目前仍保有編織香蕉絲的技術，非常具有特色。主要祭典有海祭：長老會在海邊祭祀祖靈。8 月中旬以前豐年祭典。祭祖儀式。",
    "太魯閣族以花蓮縣的秀林、萬榮、卓溪三鄉鎮為主要居住地。\n太魯閣族人重視織布與黥(ㄑㄧㄥˊ)面文化。太魯閣族男子、女子約14、15 歲成年後，才可以紋面。女子則在織布技巧受到長老肯定後，才能在臉部刺上紋面。主要祭典有祖靈祭典。",
    "撒奇萊雅族位於花蓮平原。\n主要祭典有火神祭典：加禮宛事件為祭典核心概念，屬於跨部落的全族紀念性活動。農耕祭儀：播種祭、豐年祭、海神祭等。",
    "賽德克族分布在臺灣中部山區。\n盛行織布與紋面文化。過去被歸為泰雅族的分支。而賽德克族與太魯閣族則有共同的起源與文化。相關電影：賽德克巴萊(霧社事件)。主要祭典有歲時祭儀。",
    "拉阿魯哇族主要聚居在高雄市桃源區高中里、桃源里以及那瑪夏區瑪雅里。\n早期民族分類上劃歸鄒族。主要祭典有聖貝祭：收穫過後之二年或三年間，所舉行的一次大祭。",
    "卡那卡那富族位於嘉義縣的阿里山鄉、南投縣信義鄉久美社區。\n早期民族分類上劃歸鄒族。主要祭典有祭儀。其次是獵祭與敵首祭族。家或家族為單位的河祭與嬰兒祭。直至三十年前才恢復的米貢祭及河祭現為卡族人每年必辦的祭儀活動。"
];
var loc = [
    "臺東縣\n花蓮縣\n屏東縣\n臺中市\n新竹市\n桃園市\n新北市\n基隆市\n",
    "宜蘭縣\n南投縣\n臺中市\n苗栗縣\n新竹縣\n桃園市\n新北市\n",
    "臺東縣\n屏東縣\n",
    "臺東縣\n花蓮縣\n高雄市\n南投縣\n",
    "臺東縣\n高雄市\n",
    "臺東縣\n屏東縣\n高雄市\n",
    "嘉義縣\n南投縣\n",
    "苗栗縣\n新竹縣\n",
    "臺東縣\n",
    "南投縣\n",
    "宜蘭縣\n",
    "花蓮縣\n",
    "花蓮縣\n",
    "花蓮縣\n南投縣\n",
    "高雄市\n",
    "嘉義縣\n",
]
var grouplist = [];
var nowLocation = 'Z';
$('#doll').hide();
$('#back').hide();
for (var i = 0; i < 16; i++) {
    grouplist[i] = document.createElement("button");
    grouplist[i].setAttribute("class", "groupshow");
    grouplist[i].setAttribute("id", i);
    grouplist[i].setAttribute("onclick", "datashow(" + i + ")");
    grouplist[i].setAttribute("style", "margin-top:12px;");
    grouplist[i].innerText = group[i];
}
function datashow(number) {
    $("#group").hide(1000);
    $('#back').hide(1);
    if ($("#doll").attr("src") == "") {
        $("#location").slideUp(100, function () { $("#location").text("位於:") }).slideDown(1000);
        $("#introduction").slideUp(100, function () { $("#introduction").text("簡介:") }).slideDown(1000);
    }

    $("#top").slideUp(1000, function () { $("#top").text(group[number]) }).slideDown(1000);
    $("#doll").slideUp(1000, function () { $("#doll").attr("src", "../public/image/" + image[number] + ".jpg"); }).slideDown(1000);
    $("#location-text").slideUp(1000, function () { $("#location-text").text(loc[number]) }).slideDown(1000);
    $("#introduction-text").slideUp(1000, function () { $("#introduction-text").text(text[number]) }).slideDown(1000);


    $("#datashowarea").show(1000);
    $('#back').show(2000);

}

function groupshow(location) {
    nowLocation = location;
    $("#datashowarea").hide(1000);
    $("#doll").hide(1000);
    $("#top").hide(1000);
    $("#group").hide(500, function () {
        var del = document.getElementById("del")
        var div = document.getElementById("group");
        var h3 = document.getElementById("h3");

        div.removeChild(del);
        var create = document.createElement("div");
        create.setAttribute("id", "del");

        if (location == 'a') {
            h3.innerText = "臺東縣";
            create.appendChild(grouplist[0]);
            create.appendChild(grouplist[2]);
            create.appendChild(grouplist[3]);
            create.appendChild(grouplist[4]);
            create.appendChild(grouplist[5]);
            create.appendChild(grouplist[8]);
        }
        else if (location == 'b') {
            h3.innerText = "花蓮縣";
            create.appendChild(grouplist[0]);
            create.appendChild(grouplist[3]);
            create.appendChild(grouplist[11]);
            create.appendChild(grouplist[12]);
            create.appendChild(grouplist[13]);
        }
        else if (location == 'c') {
            h3.innerText = "宜蘭縣";
            create.appendChild(grouplist[1]);
            create.appendChild(grouplist[10]);
        }
        else if (location == 'd') {
            h3.innerText = "屏東縣";

            create.appendChild(grouplist[0]);
            create.appendChild(grouplist[2]);
            create.appendChild(grouplist[5]);
        }
        else if (location == 'e') {
            h3.innerText = "高雄市";

            create.appendChild(grouplist[2]);
            create.appendChild(grouplist[3]);
            create.appendChild(grouplist[4]);
            create.appendChild(grouplist[5]);
            create.appendChild(grouplist[14]);
        }
        else if (location == 'f') {
            h3.innerText = "嘉義縣";

            create.appendChild(grouplist[6]);
            create.appendChild(grouplist[15]);
        }
        else if (location == 'g') {
            h3.innerText = "南投縣";
            create.appendChild(grouplist[1]);
            create.appendChild(grouplist[3]);
            create.appendChild(grouplist[6]);
            create.appendChild(grouplist[9]);
            create.appendChild(grouplist[13]);
        }
        else if (location == 'h') {
            h3.innerText = "臺中市";

            create.appendChild(grouplist[0]);
            create.appendChild(grouplist[1]);
        }
        else if (location == 'i') {
            h3.innerText = "苗栗縣";

            create.appendChild(grouplist[1]);
            create.appendChild(grouplist[7]);
        }
        else if (location == 'j') {
            h3.innerText = "新竹縣";

            create.appendChild(grouplist[1]);
            create.appendChild(grouplist[7]);
        }
        else if (location == 'k') {
            h3.innerText = "新竹市";

            create.appendChild(grouplist[0]);
        }
        else if (location == 'l') {
            h3.innerText = "桃園市";

            create.appendChild(grouplist[0]);
            create.appendChild(grouplist[1]);
        }
        else if (location == 'm') {
            h3.innerText = "新北市";

            create.appendChild(grouplist[0]);
            create.appendChild(grouplist[1]);
        }
        else if (location == 'n') {
            h3.innerText = "基隆市";

            create.appendChild(grouplist[0]);
        }
        div.appendChild(create);
    });

    $("#group").show(1000);
}

function goBack() {
    groupshow(nowLocation);
}

$(document).ready(function () {
    for (var i = 0; i < 16; i++) {
        $("#" + i).click(function () { datashow(i) });
    }
    $("#a").click(function () { groupshow('a') });
    $("#b").click(function () { groupshow('b') });
    $("#c").click(function () { groupshow('c') });
    $("#d").click(function () { groupshow('d') });
    $("#e").click(function () { groupshow('e') });
    $("#f").click(function () { groupshow('f') });
    $("#g").click(function () { groupshow('g') });
    $("#h").click(function () { groupshow('h') });
    $("#i").click(function () { groupshow('i') });
    $("#j").click(function () { groupshow('j') });
    $("#k").click(function () { groupshow('k') });
    $("#l").click(function () { groupshow('l') });
    $("#m").click(function () { groupshow('m') });
    $("#n").click(function () { groupshow('n') });
})

/******************mapAdust*********************/
adjust();

var timeout = null;
window.onresize = function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () { window.location.reload(); }, 100);
}

function adjust() {
    var map = document.getElementById("cirMap");
    var element = map.childNodes;
    var itemNum = element.length / 2;
    for (var i = 0; i < itemNum - 1; i++) {
        var item = 2 * i + 1;
        var newCoords = adjustCoords(element[item].coords);
        element[item].setAttribute("coords", newCoords);
    }
}

function adjustCoords(position) {
    var pageWidth = document.getElementById("taiwan").clientWidth;
    var pageHeight = document.getElementById("taiwan").clientHeight;

    var imgWidth = 948;
    var imgHeight = 668;

    var each = position.split(",");

    for (var i = 0; i < each.length; i++) {
        each[i] = Math.round(parseInt(each[i]) * pageWidth / imgWidth).toString();
        i++;
        each[i] = Math.round(parseInt(each[i]) * pageHeight / imgHeight).toString();
    }

    var nwePosition = "";
    for (var i = 0; i < each.length; i++) {
        nwePosition += each[i];
        if (i < each.length - 1) {
            nwePosition += ",";
        }
    }
    return nwePosition;
}