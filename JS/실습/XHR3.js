const map = document.getElementById('map');

map.init = function(latitude, longitude) {
    if (latitude === undefined || longitude === undefined) {
        // getCurrentPosition() : Non blocking (이 메서드가 실행 되어도 멈추지 않고 아래 코드 계속 실행함)
        navigator.geolocation.getCurrentPosition(function(e) { // 위치 추적 허용 했을 때
            latitude = e.coords.latitude;
            longitude = e.coords.longitude;
            map.init(latitude, longitude);
        }, function() { // 위치 추적 거부 했을 때
            latitude = 35.8715411;
            longitude = 128.601505; // 대구시청 좌표
            map.init(latitude, longitude);
        });
        return; // 거짓이면 return; 이 실행되어서 종료됨.
    }

    const option = {
        center: new kakao.maps.LatLng(latitude, longitude), // 지도가 켜졌을 때 처음 위치
        level: 3 // 확대 정도
    };
    map.instance = new kakao.maps.Map(map, option);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }
        if (xhr.status >= 200 && xhr.status < 300) {
            const responseObject = JSON.parse(xhr.responseText);
            const items = responseObject['data'];
            const geocoder = new kakao.maps.services.Geocoder();
            for (const item of items) {
                geocoder.addressSearch(item['GNG_CS'], function(result, status) {
                    if (status !== kakao.maps.services.Status.OK) {
                        return;
                    }
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    const marker = new kakao.maps.Marker({
                        map: map.instance,
                        position: coords
                    });
                    kakao.maps.event.addListener(marker, 'click', function() {
                        cover.show();
                        info.show(item);
                    });
                });
            }
        } else {
            alert('맛집 데이터를 불러오지 못하였습니다.\n\n확인을 누르면 페이지를 새로 고칩니다.')
            location.reload(); // 새로고침 할 수 있는 코드
        }
    };
    xhr.open('GET', './XHR3.json');
    xhr.send();
};

map.init();

const cover = document.getElementById('cover');
cover.show = () => cover.classList.add('visible');
cover.hide = () => cover.classList.remove('visible');
cover.isVisible = () => cover.classList.contains('visible');

const info = document.getElementById('info');

info.querySelector('[rel="close"]').onclick = function() {
    cover.hide();
    info.hide();
};
info.show = (item) => {
    info.querySelector('[rel="title"]').innerText = item['BZ_NM'];
    info.querySelector('[rel="name"]').innerText = item['BZ_NM'];
    info.querySelector('[rel="address"]').innerText = item['GNG_CS'];
    info.querySelector('[rel="tel"]').innerText = item['TLNO'];
    info.querySelector('[rel="description"]').innerHTML = item['SMPL_DESC'];
    info.querySelector('[rel="menu"]').innerHTML = item['MNU'];
    info.querySelector('[rel="subway"]').innerText = item['SBW'];
    info.querySelector('[rel="bus"]').innerText = item['BUS'];

    info.classList.add('visible');
}
info.hide = () => info.classList.remove('visible');
info.isVisible = () => info.classList.contains('visible');

