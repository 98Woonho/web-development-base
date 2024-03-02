const loading = document.getElementById("loading");

loading.show = () => loading.classList.add('visible'); // 자바스크립트에서는 존재하지 않는 멤버를 함수로 만들어줄 수 있음
// loading.show = function() {
//     loading.classList.add('visible');
// };

loading.hide = () => loading.classList.remove('visible');

loading.isVisible = () => loading.classList.contains('visible'); /* loading이 visible을 가지고 있는지 가지고 있지 않은지에 대한 여부 */

const table = document.getElementById('table');
const dataLoadButton = document.getElementById('dataLoadButton');
dataLoadButton.onclick = function() {
    // const trs = table.querySelectorAll(':scope > tbody > tr') // :scope는 현재 선택한 요소(table)를 가리킴.

    // 방법 1
    // for (let i=0 ; i < trs.length ; i++) {
    //     trs[i].remove();
    // }

    // 방법 2
    // table.querySelectorAll(':scope > tbody > tr').foreach(x => x.remove());

    // 방법 3
    // table.quSelector(':scope > tbody').innerHTML = '';

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return; // return을 하면 밑에 코드 실행 안 됨.
        }
        loading.hide();

        if (xhr.status >= 200 && xhr.status < 300) {
            // 성공
            const responseObject = JSON.parse(xhr.responseText);
            const items = responseObject['response']['body']['items']['item'];
            const tbody = table.querySelector(':scope > tbody');
            for (const item of items) {
                const tr = document.createElement('tr'); // 행
                const srtnCdTh = document.createElement('th'); // 종목 코드
                const isinCdTh = document.createElement('th'); // ISIN 코드
                const mrktCtgTd = document.createElement('td'); // 시장 구분
                const itmsNmTd = document.createElement('td'); // 종목명
                const crnoTd = document.createElement('td') // 법인등록번호
                const corpNmTd = document.createElement('td'); // 법인명
                const menuTd = document.createElement('td'); // 메뉴
                srtnCdTh.innerText = item['srtnCd'];
                isinCdTh.innerText = item['isinCd'];
                mrktCtgTd.innerText = item['mrktCtg'];
                itmsNmTd.innerText = item['itmsNm'];
                crnoTd.innerText = item['crno'];
                corpNmTd.innerText = item['corpNm'];
                tr.append(srtnCdTh, isinCdTh, mrktCtgTd, itmsNmTd, crnoTd, corpNmTd, menuTd);
                tbody.append(tr);
            }
        } else {
            alert('데이터를 불러오지 못하였습니다. 잠시 후 다시 시도해 주세요.');
        }
    };

    xhr.open('GET', 'https://apis.data.go.kr/1160100/service/GetKrxListedInfoService/getItemInfo?serviceKey=DaQnNyeclwZRFyM87WzCsOPaQRGbsnPepO9oC%2BWnRaHnIlnaEs1%2BiWpywAWSgIgOWT6zOPep4acAwWbssYnsBw%3D%3D&resultType=json&numOfRows=500');
    xhr.send();

    loading.show();
}

const searchForm = document.getElementById('searchForm');
searchForm.onsubmit = function(e) {
    e.preventDefault();

    const trs = Array.from(table.querySelectorAll(':scope > tbody > tr')); // :scope > tbody > tr을 만족하는 요소 전체를 인자로 가지는 NodeList 생성

    // tr.innerText에 있는 문자열과 input에 입력한 값을 비교하여 일치하면 숨기지 않고, 일치하지 않을 시 숨김.
    for (let tr of trs) {
        if (tr.innerText.indexOf(searchForm['keyword'].value) === -1) {
            tr.style.display = 'none';
        } else {
            tr.style.display = 'table-row';
        }
    }

    // 위 for문을 한 줄로
    // const keyword = searchForm['keyword'].value;
    // for (const tr of trs) {
    //     tr.style.display = Array.from(tr.querySelectorAll(':scope > *')).some(x => x.innerText.indexOf(keyword) > -1) ? 'table-row' : 'none';
    // }


    // const keyword = searchForm['keyword'].value;
    // const trs = Array.from(table.querySelectorAll(':scope > tbody > tr'));
    // for (const tr of trs) {
    //     const ths = Array.from(tr.querySelectorAll(':scope > th'));
    //     const tds = Array.from(tr.querySelectorAll(':scope > td'));
    //     const cells = ths.concat(tds);
    //     let searched = false; // 검색 대상 여부
    //     for (const cell of cells) {
    //         if (cell.innerText.indexOf(keyword) > -1) {
    //             searched = true;
    //             break;
    //         }
    //     }
    //     if (searched === true) {
    //         tr.style.display = 'table-row';
    //     } else {
    //         tr.style.display = 'none';
    //     }
    // }



    // tr을 안 보이게 : tr.style.display = 'none';
    // tr을 다시 보이게 : tr.style.display = 'table-row';

    // 키워드 입력값을 포함하고 있는 tr만 보이게. 나머지는 잠시 안 보이게.
    // searchForm['keyword'] 는 <input> 을 준다.
    // 선택된 <input> 요소의 .value 은 입력 값 뱉어냄.

    // 문자열.indexOf(찾을 문자열)
};