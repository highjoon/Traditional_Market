const container = document.getElementById('map');

const nambu = {
    center: new kakao.maps.LatLng(35.81277080070899, 127.1469777102885),
    level: 3
};

const garak = {
    center: new kakao.maps.LatLng(37.49304415616005, 127.11483621171726),
    level: 3
};

const gakwha = {
    center: new kakao.maps.LatLng(35.184517591797515, 126.93437142866725),
    level: 3
};

const gyeongdong = {
    center: new kakao.maps.LatLng(37.57952294340211, 127.03879825506773),
    level: 3
};

const gongdong = {
    center: new kakao.maps.LatLng(35.08877788154814, 129.02532071351365),
    level: 3
};

const nampo = {
    center: new kakao.maps.LatLng(35.09792369694969, 129.03492562700734),
    level: 3
};

const donggu = {
    center: new kakao.maps.LatLng(35.87462915850652, 128.63989612702386),
    level: 3
};

const dongmun = {
    center: new kakao.maps.LatLng(33.51181436154385, 126.52608826930329),
    level: 3
};

const bujeon = {
    center: new kakao.maps.LatLng(35.16279299841173, 129.06147379817313),
    level: 3
};

const bokjori = {
    center: new kakao.maps.LatLng(37.53926169251964, 127.14382972308651),
    level: 3
};

const bukbu = {
    center: new kakao.maps.LatLng(35.90324917493636, 128.54324163654422),
    level: 3
};

const sangnam = {
    center: new kakao.maps.LatLng(35.224164856272516, 128.6831091340513),
    level: 3
};

const seomun = {
    center: new kakao.maps.LatLng(35.86904964702354, 128.58074498284608),
    level: 3
};

const sinjeong = {
    center: new kakao.maps.LatLng(35.542537435819284, 129.31006983524045),
    level: 3
};

const yanggok = {
    center: new kakao.maps.LatLng(37.45897021349935, 127.03667752244806),
    level: 3
};

const yangdong = {
    center: new kakao.maps.LatLng(35.154589366175124, 126.90135118467954),
    level: 3
};

const umgung = {
    center: new kakao.maps.LatLng(35.128404672317046, 128.96426390769216),
    level: 3
};

const daejeon_yeokjeon = {
    center: new kakao.maps.LatLng(36.330524959040176, 127.4341226037443),
    level: 3
};

const suncheon_yeokjeon = {
    center: new kakao.maps.LatLng(34.748145437471734, 127.743920784671),
    level: 3
};

const yeongdungpo = {
    center: new kakao.maps.LatLng(37.52028595609094, 126.90563628048119),
    level: 3
};

const ojeong = {
    center: new kakao.maps.LatLng(36.35922974275708, 127.40695711169226),
    level: 3
};

const yukgeori = {
    center: new kakao.maps.LatLng(36.62917498864856, 127.48840588794171),
    level: 3
};

const indong = {
    center: new kakao.maps.LatLng(36.32190007498324, 127.43694439819795),
    level: 3
};

const jukdo = {
    center: new kakao.maps.LatLng(36.03628508685865, 129.36849628146783),
    level: 3
};

const seoul_jungbu = {
    center: new kakao.maps.LatLng(37.56519635573768, 127.00180832068591),
    level: 3
};

const daejeon_jungbu = {
    center: new kakao.maps.LatLng(36.33148434805461, 127.42931715258923),
    level: 3
};

const gangneung_jungang = {
    center: new kakao.maps.LatLng(37.754661914646285, 128.8985233846579),
    level: 3
};

const daejeon_jungang = {
    center: new kakao.maps.LatLng(36.32959492169177, 127.43193405402052),
    level: 3
};

const chuncheon_jungang = {
    center: new kakao.maps.LatLng(37.87822438604785, 127.7257019712456),
    level: 3
};

const jidong = {
    center: new kakao.maps.LatLng(37.277859696299686, 127.01922123370598),
    level: 3
};

const chilsung = {
    center: new kakao.maps.LatLng(35.87685433395873, 128.60454622517508),
    level: 3
};

const hyundai = {
    center: new kakao.maps.LatLng(37.47697476847654, 126.64498509822336),
    level: 3
};


var market = document.getElementById('map').getAttribute('value');
var country = document.getElementById('country').getAttribute('value');

var mapName = null;
var ctrName = null;

function marketLocation(name, city) {

    switch (name) {
        case ("????????????"):
            mapName = garak;
            break;
        case ("????????????"):
            mapName = gakwha;
            break;
        case ("??????"):
            mapName = gyeongdong;
            break;
        case ("?????????"):
            mapName = gongdong;
            break;
        case ("??????"):
            mapName = nambu;
            break;
        case ("??????????????????"):
            mapName = nampo;
            break;
        case ("??????"):
            mapName = donggu;
            break;
        case ("??????"):
            mapName = dongmun;
            break;
        case ("?????????"):
            mapName = bokjori;
            break;
        case ("??????"):
            mapName = bujeon;
            break;
        case ("????????????"):
            mapName = bukbu;
            break;
        case ("??????"):
            mapName = sangnam;
            break;
        case ("??????"):
            mapName = seomun;
            break;
        case ("??????"):
            mapName = sinjeong;
            break;
        case ("????????????"):
            mapName = yanggok;
            break;
        case ("??????"):
            mapName = yangdong;
            break;
        case ("????????????"):
            mapName = umgung;
            break;
        case ("?????????"):
            mapName = yeongdungpo;
            break;
        case ("????????????"):
            mapName = ojeong;
            break;
        case ("?????????"):
            mapName = yukgeori;
            break;
        case ("??????"):
            mapName = indong;
            break;
        case ("??????"):
            mapName = jukdo;
            break;
        case ("??????"):
            mapName = jidong;
            break;
        case ("??????"):
            mapName = chilsung;
            break;
        case ("??????"):
            mapName = hyundai;
            break;
    }

    if (name == "??????" && city == "??????") {
        mapName = daejeon_yeokjeon;
    } else if (name == "??????" && city == "??????") {
        mapName = suncheon_yeokjeon;
    }

    else if (name == "??????" && city == "??????") {
        mapName = seoul_jungbu;
    } else if (name == "??????" && city == "??????") {
        mapName = daejeon_jungbu;
    }

    else if (name == "??????" && city == "??????") {
        mapName = gangneung_jungang;
    } else if (name == "??????" && city == "??????") {
        mapName = daejeon_jungang;
    } else if (name == "??????" && city == "??????") {
        mapName = chuncheon_jungang;
    }
}

marketLocation(market, country);

// ??? ????????? ?????? ?????? ???????????? ?????? ?????? ??????
const map = new kakao.maps.Map(container, mapName);

// ?????? ????????? ??????????????? ?????? ????????? ????????? ??? ?????? ???????????? ????????? ??????
var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// ?????? ?????? ????????? ????????? ??? ?????? ????????? ??????
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// ?????? ?????? ??????
var markerPosition = mapName.center;

// ?????? ??????
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// ?????? ?????? ?????? ??????
marker.setMap(map);



