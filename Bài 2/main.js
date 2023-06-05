/*Điện*/
const KW_0 = 500;
const KW_50 = 650;
const KW_100 = 850;
const KW_150 = 1100;
const TREN_KW150 = 1300;

function tinhTienDien() {

/*Username*/

    var hoTen = document.querySelector('#hoTen').value;
    console.log(hoTen);

    
    var soKW = Number(document.querySelector('#soKW').value);
    console.log(soKW);

/*Tổng*/
    
    var thanhTien = 0;

    if (0 < soKW && soKW <= 50) {
        thanhTien = soKW * KW_0;
    } else if (50 < soKW && soKW <= 100) {
        thanhTien = 50 * KW_0 + (soKW - 50) * KW_50;
    } else if (100 < soKW && soKW <= 200) {
        thanhTien = 50 * KW_0 + 50 * KW_50 + (soKW - 100) * KW_100;
    } else if (200 < soKW && soKW <= 350) {
        thanhTien = 50 * KW_0 + 50 * KW_50 + 100 * KW_100 + (soKW - 200) * KW_150;
    } else if (soKW > 350) {
        thanhTien = 50 * KW_0 + 50 * KW_50 + 100 * KW_100 + 150 * KW_150 + (soKW - 350) * TREN_KW150;
    }
document.querySelector('#kqBai2').innerHTML = 'Họ Tên: ' + hoTen + ', Tiền Điện: ' + thanhTien.toLocaleString();
}

document.querySelector('#btnBai2').onclick = tinhTienDien;

